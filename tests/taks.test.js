const request = require('supertest');
const Task = require('../src/models/task');
const app = require('../src/app');
const {
        userOne,
        userOneId,
        userTwo,
        userTwoId,
        taskOne,
        taskTwo,
        taskThree,
        setUpDatabase } = require('./fixtures/db');

beforeEach(setUpDatabase);

test('should create new task for user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
        .send({
            description: 'from my test ie jest'
        })
        .expect(201)
    const task = await Task.findById(response.body._id);
    expect(task).not.toBeNull();
    expect(task.completed).toEqual(false)
})

test('should get task for user', async () => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
        expect(response.body.length).toEqual(2)
})

test('should not delete other users tasks', async () => {
    const respons = await request(app)
    .delete(`/tasks/${taskOne._id}`)
    .set('Authorization', `Bearer ${userTwo.tokens[0].token}`)
    .send()
    .expect(404)

    const task = await Task.findById(taskOne._id);
    expect(task).not.toBeNull();
})
