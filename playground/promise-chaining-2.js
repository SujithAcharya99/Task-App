require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndRemove('5fb25438e374263d33466de3').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const deleteTaskAndCount = async (id) =>{
    const task = await Task.findByIdAndRemove(id);
    const count = await Task.countDocuments({ completed: true});
    return count
};

deleteTaskAndCount('5fb2537081f2f43ca1c0ae5e').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});