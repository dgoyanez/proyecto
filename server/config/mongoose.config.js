const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://BDPROYECTO:123@cluster0.qa0ls1a.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>console.log('Conectado a la BASEDATOS'))
    .catch(error =>console.error('ocurrio un error con la BASEDATOS', error));

