'use strict'
const express = require("express");
const page = express();
const router = express.Router();
const bodyparser = require("body-parser");
const methodoverride = require("method-override");
const mongoose = require("mongoose");
const checkModel = require("./checkModel");


page.use(bodyparser.urlencoded({extended: false}))
page.use(bodyparser.json())
page.use(express.json({limit: '20mb'}));
page.use(methodoverride());

mongoose.connect('mongodb://localhost:27017/consulta', (err, res) => {
    if (err) throw err;
    console.log('excellent');
})

router.get('/check',(req, res) => {
    res.send({message: 'hello world'})
})


router.post('/check',(req, res) => {
    var objectadd = new checkModel();
    objectadd.Name = req.body.Name;
    objectadd.Telephone = req.body.Telephone;
    objectadd.Age = req.body.Age;

    objectadd.save((err, res) => {

    })

})

page.listen(8000, () => {
    console.log('Run http://localhost:8000')
})

page.use(router);