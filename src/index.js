const express = require('express');
require('./db/mongoose');
// const User = require('./models/user');
// const Task = require('./models/task');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;


// const multer = require('multer');
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {

//         // if (!file.originalname.endsWith('.pdf')) {
//         if (!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('File must be a Word Document'));
//         }

//         cb(undefined, true);
        // cb(new Error('File must be a PDF'));
        // cb(undefined, true);
        // cb(undefined, false);

//     }
// });

// const errrorMiddleware = (req, res, next) => {
//     throw new Error('from my middleware');
// }

//upload.single('upload')

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send();
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
// });




// app.use((req, res, next) => {
//     // console.log(req.method, req.path);
//     // next();
//     if (req.method === 'GET') {
//         res.send('GET request are disabled')
//     } else {
//         next();
//     }

// })

//***********maintenance mode*********** */

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon..!');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('server is up on port:' + port);
});

//const bcrypt = require('bcryptjs');

// const jwt = require('jsonwebtoken');

// const myFunction = async () => {

//     const token = jwt.sign({ _id: 'add123' }, 'thisismynewcourse', { expiresIn: '3 second'});
//     console.log(token);

//     const data = jwt.verify(token, 'thisismynewcourse');
//     console.log(data);
    // const password = 'Red12345!';
    // const hashedPassword = await bcrypt.hash(password, 8);

    // console.log(password);
    // console.log(hashedPassword);

    // const isMatch = await bcrypt.compare('Red12345!', hashedPassword);

    // console.log(isMatch);
//}

// myFunction();

// const pet = {
//     name: 'munna'
// }

// pet.toJSON = function () {
//     // console.log(this);
//     // return this;
//     return {}
// }
// console.log(JSON.stringify(pet));

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
    // const task = await Task.findById('5fb4b50f04ea241ab42c5866');
    // await task.populate('owner').execPopulate();
    // console.log(task.owner);

    // const user = await User.findById('5fb4b40f7814cc1a420996db');
    // await user.populate('tasks').execPopulate();
    // console.log(user.tasks);
// }


// main();