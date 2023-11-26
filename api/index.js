const Express = require('express')
const Mongoclient = require('mongodb').MongoClient
const cors = require('cors')
const multer = require('multer')

let app=Express()
app.use(cors())

let CONNECTION_STRING = 'mongodb+srv://vbansal:cejzAw-5vyqju-neqgif@cluster0.oia2x2n.mongodb.net/?retryWrites=true&w=majority'

let DATABASENAME = 'fblawebsitedesign'
let database;

app.listen(5038, () => {
    Mongoclient.connect(CONNECTION_STRING, (error, client) => {
        database=client.db(DATABASENAME)
        console.log('Mongo DB Connection Successful')
    })
})

// Possible error above

app.get('/api/fblawebsitedesign/GetNotes', (request, response) => {
    database.collection('events').find({}).toArray((error, result) => {
        response.send(result)
    })
})

app.post('/api/fblawebsitedesign/AddNotes', multer().none(), (request, response) => {
    database.collection('events').count({}, function(error, numOfDocs) {
        database.collection('events').insertOne({
            id: (numOfDocs +1).toString(),
            name: request.body.newNotes
        })
        response.json('Added Succesfully')
    })
})

app.delete('/api/fblawebsitedesign/DeleteNotes', (request, response) => {
    database.collection('events').deleteOne({
        id: request.query.id
    })
    response.json('Deleted Successfully')
})