const { Schema, model } = require('mongoose')
const reservaSchema = new Schema({
    IdReserva: { type: String, required: true },
    fecha: { type: String, required: true },
    IdServicio: { type: String, required: true },
    tittle: { type: String, required: true },
    informacion: { type: String, required: true },
}, {
    timestamps: true,
    versionkey: false
})
module.exports = model('reservacion', reservaSchema)