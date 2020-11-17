const express = require('express');
require('./db/mongoose');
// const User = require('./models/user');
// const Task = require('./models/task');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000

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

const jwt = require('jsonwebtoken');

const myFunction = async () => {

    const token = jwt.sign({ _id: 'add123' }, 'thisismynewcourse', { expiresIn: '3 second'});
    console.log(token);

    const data = jwt.verify(token, 'thisismynewcourse');
    console.log(data);
}

myFunction();
