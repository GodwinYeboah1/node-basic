const express = require('express')
const router = express.Router()

//return template data
router.get('/home', (req,res,next)=>{
    return res.render('home')
})

// return json data
router.get('/json', (req,res, next)=>{
    const data = {
        header: 'Godwin Yeboah',
        body: {
            name: "godwin",
            lastname: "yeboah"
        }
    }
    return res.json(data)
})

module.exports = router