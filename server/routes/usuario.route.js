const UsuarioController = require('../controller/usuario.controller');

module.exports = (app) =>{
    app.get('/api/v1/usuarios', UsuarioController.listar);
    app.post('/api/v1/usuarios/', UsuarioController.crear);
    app.put('/api/v1/usuarios/:id', UsuarioController.editar);
    app.delete('/api/v1/usuarios/:id', UsuarioController.eliminar);
    app.post('/api/v1/pagos/', UsuarioController.crear);
}
