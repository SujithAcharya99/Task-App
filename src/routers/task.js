const express = require('express');
const router = new express.Router();
const Task = require('../models/task');


router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }

    // task.save().then(() => {
    //     res.status(201).send(task);
    // }).catch((error) => {
    //    res.status(400).send(error);
    // });
});

router.get('/tasks', async (req, res) => {

    try {
       const tasks = await Task.find({});
        res.send(tasks);
    } catch (e) {
        res.status(500).send();
    }
    
    // Task.find({}).then((tasks) => {
    //     res.send(tasks);
    // }).catch((e) => {
    //     res.status(500).send();
    // });
});

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findById(_id);

        if (!task) {
            return res.status(404).send();
        }

        res.send(task);

    } catch (e) {
        res.status(500).send();
    }


    // Task.findById(_id).then((task) => {
    //     if (!task) {
    //         return res.status(404).send();
    //     }

    //     res.send(task);

    // }).catch((e) => {
    //     res.status(500).send();
    // });
});

router.patch('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidUpdate) {
        return res.status(400).send({ error: 'Invald Update..!'});
    }

    try {
        //const task = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true});
        
        const task = await Task.findById(_id);

        updates.forEach((update) => task[update] = req.body[update]);
        await task.save();

        if (!task) {
            return res.status(400).send();
        }

        res.status(200).send(task);

    } catch (e) {
        res.status(400).send();
    }
});


router.delete('/tasks/:id',async (req, res) => {

    const _id = req.params.id;

    try {
        const task = await Task.findByIdAndDelete(_id);

        if (!task) {
            return res.status(404).send();
        }

        res.status(200).send(task);

    } catch (e) {
        res.status(500).send();
    }


});

module.exports =router;