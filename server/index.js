const path = require('path')
const express = require('express');
const app = express();
const connection = require('../database/index.js');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(path.join(process.cwd(),'/client/dist')));

app.get('/test', (req, res) => {
    res.send("I work");
})

app.route('/bundle')
  .get((req, res) => {
    res.sendFile(path.join(process.cwd(), '/client/dist/bundle.js'));
  });

app.get('/', (req, res) => {
    res.send('Hi')
    // connection.query('INSERT into products (product_name) VALUES (?);', [product_name], (err, data) => {
    //     if (err) {
    //         console.log(err)
    //         res.status(500).send('IM SO WRONG');
    //     } else {
    //         res.send(data)
    //     }
    // })
 });


let port = 3700
app.listen(port, function () {
    console.log(`listening on port ${port}`);
});