const { Schema, model } = require('mongoose')
const servicioSchema = new Schema({
    id: { type: String, required: true },
    tittle: { type: String, required: true },
    informacion: { type: String, required: true },
}, {
    timestamps: true,
    versionkey: false
})
module.exports = model('servicio', servicioSchema)