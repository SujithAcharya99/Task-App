const express = require('express');
const User  = require('../models/user');
const auth = require('../middleware/auth');
const router = new express.Router();
const multer = require('multer');


router.post('/users', async (req, res) => {
    // console.log(req.body);
    // res.send('testing');
    const user = new User(req.body);

    try {
        await user.save();  
        const token = await user.generateAuToken();
        res.status(201).send({ user, token });
    } catch (e) {
        res.status(400).send(e);
    }

    // user.save().then(() => {
    //     res.status(201).send(user);
    // }).catch((error) => {
    //    // console.log('Error found ' + error);
    //    res.status(400).send(error);
    //   // res.send(error);
    // });
});

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuToken();
        res.send({ user, token });
        //res.send(user);
    } catch (e) {
        res.status(400).send();
    }
});

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        await req.user.save();

        res.send();
    } catch (e) {
        res.status(500).send();
    }
});

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.send();
    } catch (e) {
        res.status(500).send();
    }
});

router.get('/users/me', auth, async (req, res) => {

    res.send(req.user);
});  

// router.get('/users', auth, async (req, res) => {

//     try {
//         const user = await User.find({});
//         res.send(user);
//     } catch (e) {
//         res.status(500).send();
//     }

    // User.find({}).then((users) => {
    //     res.send(users);
    // }).catch((e) => {
    //     res.status(500).send();
    // });
//});

// router.get('/users/:id', async (req, res) => {
//     const _id = req.params.id;

//     try {
//         const user = await User.findById(_id);

//         if (!user) {
//             return res.send(404).send();
//         }

//         res.send(user);
//     } catch (e) {
//         res.status(500).send();
 //   }

    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send();
    //     }

    //     res.send(user);

    // }).catch((e) => {
    //     res.status(500).send();
    // });
//});

// router.patch('/users/:id', async (req, res) => {

router.patch('/users/me', auth, async (req, res) => {

    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

    //const _id = req.params.id;

    if (!isValidUpdate) {
        return res.status(404).send({ error : 'Invalid Update...!'})
    }

    try {
       // const user = await User.findByIdAndUpdate(_id, req.body, { new : true, runValidators: true});

    //    const user = await User.findById(_id);
       
       updates.forEach((update) => req.user[update] = req.body[update])

       await req.user.save();

        // if (!user) {
        //     return res.status(404).send();
        // }

        res.status(200).send(req.user);

    } catch (e) {
        res.status(400).send();
    }
})

// router.delete('/users/:id', auth, async (req, res) => {

router.delete('/users/me', auth, async (req, res) => {

    //const _id = req.params.id;

    try {
        // const user = await User.findByIdAndDelete(req.user._id);

        // if (!user) {
        //     return res.status(404).send();
        // }

        await req.user.remove();

        res.status(200).send(req.user);

    } catch (e) {
        res.status(500).send();
    }


});

const upload = multer({
    dest: 'avatar',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('File must be a Image'));
        }
        cb(undefined, true);
    }
});

router.post('/users/me/avatar', upload.single('avatar'), (req, res) => {

    res.send();
    
},  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
})


module.exports =router;
