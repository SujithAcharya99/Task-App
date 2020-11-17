require('../src/db/mongoose');
const User = require('../src/models/user');

//5fb2324d49d086212a4a74b9

// User.findByIdAndUpdate('5fb24eb9f974f33a762c9e9d', { age: 1}).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// });

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
}

updateAgeAndCount('5fb24eb9f974f33a762c9e9d', 22).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});