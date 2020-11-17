const mongoose = require('mongoose');
const validator = require('validator');


const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        required: true,
        default : false
    }
})

// const task = new Task({
//     description: 'Task-app',
//     completed: true
// });

// task.save().then(() => {
//     console.log(task);
// }).catch((error) => {
//     console.log(error);
// });

module.exports = Task;