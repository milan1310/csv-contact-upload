const router = require('express').Router();
const multer = require('multer');
const Contact = require('../models/contact');
const saveContactRouter = require('../controllers/contact');
const path = require('path')
const auth = require('../controllers/auth')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./contact-csv')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname);
    }
});

const upload = multer({
    storage:storage,
    fileFilter:function(req,file,cb){
        let extension = path.extname(file.originalname);
        if(extension !== '.csv'){
            return cb(new Error('Only CSV files are allowed'))
        }
        cb(null,true)
    }
})

router.post('/',auth,upload.single('contact'), saveContactRouter);

module.exports = router;