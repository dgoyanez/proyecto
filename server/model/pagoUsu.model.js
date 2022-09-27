const mongoose = require('mongoose');

const PagoUsuSchema = new mongoose.Schema({
    tarjeta:{
        type: String,
        required: [true, 'el tipo de tarjeta es requerido']
    },
    card:{
        type: Number,
        required: [true, 'el numero de la tarjeta es requerido']
    },
    expiration:{
        type: Number,
        required: [true, 'la fecha de expiracion es requerida']
    },
    name:{
        type: String,
        required: [true, 'el nombre completo de la tarjeta es requerido']
    }
}, {timestamps: true});

const PagoUsu = mongoose.model('PagoUsu', PagoUsuSchema);

module.exports = PagoUsu;