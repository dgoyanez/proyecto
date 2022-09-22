const express = require('express');
const app = express();
const cors = require('cors')
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//conexion a base de datos
require('./config/mongoose.config');
//rutas//
require('./routes/usuario.route')(app);


app.listen(port, () => console.log('servidor arriba ' + port))