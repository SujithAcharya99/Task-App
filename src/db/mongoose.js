const mongoose = require('mongoose');
//const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false
});

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value){
//             if (!validator.isEmail(value)) {
//                 throw new Error('Invalid email id....!');
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value){
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('password cannot contain "password"');
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be greater than zero');
//             }
//         }
//     }
// });

// const me = new User({
//     name: 'Sujith',
//     age : 'hello'
// })

// const me = new User({
//     name: 'sanjay   ',
//     email: 'sanjay@123.com    ',
//     password: 'hello12234',
//     age: 22
// })

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('error...!',error);
// });

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         required: true,
//         default : false
//     }
// })

// const task = new Task({
//     description: 'Task-app',
//     completed: true
// });

// task.save().then(() => {
//     console.log(task);
// }).catch((error) => {
//     console.log(error);
// });

