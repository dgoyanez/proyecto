const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: [true, 'el nombre del usuario es requerido']
    },
    servicio:{
        type: String,
        required: [true, 'el servicio del usuario es requerido']
    },
    valor:{
        type: Number,
        required: [true, 'el valor del servicio es requerido']
    },
    email:{
        type: String,
        // required: [true, 'el correo del usuario es requerido']
    },
    telefono:{
        type: Number,
        // required: [true, 'el contacto del usuario es requerido']
    },
    comuna:{
        type: String,
        required: [true, 'la comuna del usuario es requerido']
    },
    idusuario:{
        type: String
    }
}, {timestamps: true});

const Usuarios = mongoose.model('Usuarios', UsuarioSchema);

module.exports = Usuarios;


