const express = require('express');

const routes = express.Router();

const UserController = require('./controller/UserController');
const ClientController = require('./controller/ClientController');
const PetController = require('./controller/PetController');
const ReservaController = require('./controller/ReservaController');
//const ImagemReservaController = require('./controller/ImagemReservaController');


/*---------------------------------Rotas Usuário--------------------------------------------*/

routes.get('/usuario', UserController.list)

routes.get('/usuario/:id', UserController.show)

routes.post('/usuario', UserController.create)

routes.put('/usuario/:id', UserController.update)

routes.delete('/usuario/:id', UserController.delete)

// /*-----------------------------Rotas Cliente---------------------------------*/ 

routes.get('/cliente', ClientController.list)

routes.get('/cliente/:id', ClientController.show)

routes.post('/cliente', ClientController.create)

routes.put('/cliente/:id', ClientController.update)

routes.delete('/cliente/:id', ClientController.delete)

// /*--------------------------------Rotas Pet------------------------------*/

routes.get('/pet', PetController.list)

routes.get('/pet/:id', PetController.show)

routes.post('/pet', PetController.create)

routes.put('/pet/:id', PetController.update)

routes.delete('/pet/:id', PetController.delete)

// /*----------------------------------Rotas Reserva--------------------------- */

// routes.get('/reserva', ReservaController.list)

// routes.get('/reserva/:id', ReservaController.show)

// routes.post('/reserva', ReservaController.create)

// routes.put('/reserva/:id', ReservaController.update)

// routes.delete('/reserva/:id', ReservaController.delete)
/*------------------------------------------------------------- */

module.exports = routes;