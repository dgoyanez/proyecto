const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/test3', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>console.log('Conectado a la BASEDATOS'))
    .catch(error =>console.error('ocurrio un error con la BASEDATOS', error));

