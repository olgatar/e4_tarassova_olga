console.log('May node be with you!');

const express = require('express');
const bodyParser = require('body‐parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))

var db;
MongoClient.connect('your‐mongodb‐url', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  });
});

app.get('/', function(req, res) {
  res.send('Hello World');
  //res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
console.log(req.body)
})
