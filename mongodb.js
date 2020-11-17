//CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const { MongoClient, ObjectID } = require('mongodb');

// const id = new ObjectID();
// console.log(id);

// console.log(id.getTimestamp());

const connectionURL =  'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, clent) => {
    if (error) {
       return console.log('connection error...!');
    }
        console.log('connected successfully...!');

        const db = clent.db(databaseName);

//         ****************** INSERT ONE ******************* */

//         db.collection('users').insertOne({
//             name : 'Sharath',
//             age : 22
//         }, (error, result) => {
//             if(error){
//                 return console.log('unable to insert data');
//             }

//             console.log(result.ops);

//         });
// **************************** INSERT MANY ************************ */

//         db.collection('users').insertMany([
//             {
//                 name : 'Sanjay',
//                 age : 22
//             },{
//                 name : 'thanush',
//                 age : 22
//             }
//         ], (error , result) => {

//             if (error) {
//                return console.log('unable to insert data');
//             }
//             console.log(result.ops);
//         } );

//         db.collection('tasks').insertMany([
//             {
//                 description : 'note-app',
//                 completed : true
//             },{
//                 description : 'weather-app',
//                 completed : true
//             },{
//                 description : 'task-app',
//                 completed : false
//             }
//         ], (error , result) => {

//             if (error) {
//                 return console.log('unable to insert data');
//             }
//             console.log(result.ops);
//         } ); 


//         ***************** FIND ONE ************************* */

//         db.collection('users').findOne({_id: new ObjectID("5fb1fb16e5236e15209a00f9")}, (error, user) => {
//             if (error) {
//                 return console.log('unable to fetch data');
                
//             }

//             console.log(user);
//         });


// ************************** FIND MANY ******************************* */

//         db.collection('users').find({age : 22}).toArray((error, user) => {
//             console.log(user);
//         });
         

//         ********************* UPDATE ONE ************************** */

//         db.collection('users').updateOne({
//             _id: new ObjectID("5fb1f3f4a747921253ccdee2")
//         },{
//             $set : {
//                 name : 'Mike'
//             }
//         }).then((result) => {
//             console.log(result);
//         }).catch(() => {
//             console.log(error);
//         })


//         ************************ UPDATE MANY ******************** */

//         db.collection('tasks').updateMany({
//             completed: false
//         },{
//             $set : {
//                 completed : true
//             }
//         }).then((result) => {
//             console.log(result.matchedCount);
//         }).catch((error) => {
//             console.log(error);
//         });


//         ********************************** DELETE MANY **************************** */

//         db.collection('users').deleteMany({
//             age: 25
//         }).then((result) => {
//             console.log(result);
//         }).catch((error) => {
//             console.log(error);
//         })

});
