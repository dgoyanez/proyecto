const Usuario = require('../model/usuario.model');
const usuarioRoute = require('../routes/usuario.route');

module.exports.listar = (req, res) => {
    Usuario.find()
      .then((resp) => {
        res.json({
          datos: resp,
          error: false,
        });
      })
      .catch((e) => {
        res.json({
          error: true,
          mensaje: 'ha ocurrido un error',
        });
      });
  };

module.exports.crear = (req, res) =>{
    Usuario.create(req.body)
        .then(resp =>{
            res.json({
                datos: resp,
                error: false
            })
        }).catch((e) => {
            res.json({
              error: true,
              mensaje: 'ha ocurrido un error',
            });
          });
};

module.exports.eliminar = (req, res) =>{
    Usuario.findByIdAndDelete(req.params.id)
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