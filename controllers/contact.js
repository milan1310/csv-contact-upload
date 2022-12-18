// const router = require('express').Router();
const multer = require('multer');
const Contact = require('../models/contact');
const csv = require('csvtojson');



const saveContacts = async(req,res) => {
    try {
        console.log(req.file);
        let file = req.file
        csv()
        .fromFile(file.path)
        .then(async objArr => {
            let responase = await Contact.insertMany(objArr);
            console.log(responase);
            res.json(responase);
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = saveContacts