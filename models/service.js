const { default: mongoose } = require("mongoose")

// Định nghĩa schema và model cho collection 'service'
const serviceSchema = new mongoose.Schema({
    name: String,
    price: Number,
    unit: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
})

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service