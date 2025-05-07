const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const cashflowModel = require('./models/cashflowModel')

const port = 5000
const app = express()

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

// Database
mongoose.connect('mongodb://localhost:27017/srms')
    .then(result => console.log("connected"))
    .catch(err => console.log(err.message))

app.get('/', async (req, res) => {

    try{
        const cashFlows = await cashflowModel.find()
        const countItem = await cashflowModel.countDocuments()
        console.log(countItem)
        if(countItem > 0){
            return res.render('index', {cashFlows, countItem})
        }
        return res.render('index')
    }catch(err){
        console.log(err)
    }
    
    // res.sendFile(path.join(__dirname, 'views/index.html'))
//     const data = {}
//     try{
       
//         const cashFlows = await cashflowModel.find()
//         if(cashFlows){
//             data = cashFlows
//         }

//         console.log(cashFlows)
//         return res.render('index')

//     }catch(err){
//        return  res.json(err)
//     }
    
//    return res.render('index')
    
})


app.post('/user/cashflow', async (req, res) => {
    const data = req.body
    try{
        const cashflow = await cashflowModel.create(data)
        res.redirect('/')
        // res.json(cashflow)
    }catch(err){
        res.json({
            'err': err.message
        })
        console.log('Error: ', err)
    }
})

app.listen(port, () => {
    console.log('App running on port: '+port)
})
