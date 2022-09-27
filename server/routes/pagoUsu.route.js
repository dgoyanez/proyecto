const PagoUsuController = require('../controller/pagoUsu.controller');

module.exports = (app) =>{
    app.get('/api/v1/pago', PagoUsuController.listar);
    app.post('/api/v1/pago', PagoUsuController.crear);
}