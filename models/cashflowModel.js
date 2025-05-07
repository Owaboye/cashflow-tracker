const mongoose = require('mongoose')

const cashFlowSchema = new mongoose.Schema({
    amount: {type: Number, required: true},
    type: {type: String, required: true},
    description: String,
    exp_purpose: String,
    income_source: String,

}, {timestamps: true}) 

const cashflow = mongoose.model('CashFlow', cashFlowSchema)

module.exports = cashflow