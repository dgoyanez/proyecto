const UsuarioController = require('../controller/usuario.controller');

module.exports = (app) =>{
    app.get('/api/v1/usuarios', UsuarioController.listar);
    app.post('/api/v1/usuarios', UsuarioController.crear);
    app.delete('/api/v1/usuarios/:id', UsuarioController.eliminar);
}