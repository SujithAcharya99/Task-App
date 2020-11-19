const mongoose = require('mongoose');
const validator = require('validator');
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        required: true,
        default : false
    },
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
    }  
}, {
    timestamps: true
});


const Task = mongoose.model('Task', taskSchema)

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