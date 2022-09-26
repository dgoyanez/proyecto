const usuario = require('../model/usuario.model');

module.exports.listar = (req, res) => {
    usuario.find()
      .then(resp =>{
        res.json({
          datos: resp,
          error: false
        })
      }).catch(e =>{
        res.json({
          error: true,
          mensaje: 'ha ocurrido un error'
        })
      })
  };

module.exports.crear = (req, res) =>{
    const {nombre,servicio,valor,email,telefono,comuna}=req.body
    usuario.create({
          nombre,
          servicio,
          valor,
          email,
          telefono,
          comuna
    })
        .then((usuario) =>res.json(usuario))
        .catch(err=>res.json(err))
};

module.exports.eliminar = (req, res) =>{
    usuario.findByIdAndDelete({_id:req.params.id})
        .then(resp =>{
            res.json({
                error: true,
            })
        }).catch((e) => {
            res.json({
              error: true,
              mensaje: 'ha ocurrido un error',
            });
          });
}

module.exports.editar = (req, res)=>{
  usuario.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
  .then((usuario)=>res.json(usuario))
  .catch(err=>res.json(err))
}

module.exports.agregar = (req, res) =>{
  const {tarjeta,card,expiration,name}=req.body
  usuario.create({
        tarjeta,
        card,
        expiration,
        name,
  })
      .then((usuario) =>res.json(usuario))
      .catch(err=>res.json(err))
};
