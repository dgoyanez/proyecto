const PagoUsu = require('../model/pagoUsu.model');

module.exports.listar = (req, res)=>{
    PagoUsu.find()
    .then(resp =>{
        res.json({
            datos: resp,
            error: false
        })
    }). catch(e =>{
        res.json({
            error: true,
            mensaje: 'ha ocurrido un error'
        })
    })
};

module.exports.crear = (req, res) =>{
    const {tarjeta,card,name,expiration} = req.body
    PagoUsu.create({
        tarjeta,
        card,
        name,
        expiration
    })
    .then((PagoUsu) => res.json(PagoUsu))
    .catch(err => res.json(err))
};