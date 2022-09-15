const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: [true, 'el nombre del usuario es requerido']
    },
    apellido:{
        type: String,
        required: [true, 'el apellido del usuario es requerido']
    },
    comuna:{
        type: String,
        required: [true, 'la comuna del usuario es requerido']
    },
    servicio:{
        type: String,
        required: [true, 'el servicio del usuario es requerido']
    },
    valor:{
        type: Number,
        required: [true, 'el valor del servicio es requerido']
    },
    contacto:{
        type: String,
        required: [true, 'el contacto del usuario es requerido']
    }
}, {timestamps: true});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;