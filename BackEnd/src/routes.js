const express = require('express');

const routes = express.Router();

const UserController = require('./controller/UserController');

/*-----------------------------------------------------------------------------*/

routes.get('/usuario',UserController.list)

routes.get('/usuario/:id',UserController.show)

routes.post('/usuario',UserController.create)

routes.put('/usuario/:id',UserController.update)

routes.delete('/usuario/:id',UserController.delete)

/*--------------------------------------------------------------*/ 
routes.get('/cliente',ClientController.list)

routes.get('/cliente/:id',ClientController.show)

routes.post('/cliente',ClientController.create)

routes.put('/cliente/:id',ClientController.update)

routes.delete('/cliente/:id',ClientController.delete)
/*--------------------------------------------------------------*/
routes.get('/pet',PetController.list)

routes.get('/pet/:id',PetController.show)

routes.post('/pet',PetController.create)

routes.put('/pet/:id',PetController.update)

routes.delete('/pet/:id',PetController.delete)
/*------------------------------------------------------------- */
routes.get('/reserva',ReservaController.list)

routes.get('/reserva/:id',ReservaController.show)

routes.post('/reserva',ReservaController.create)

routes.put('/reserva/:id',ReservaController.update)

routes.delete('/reserva/:id',ReservaController.delete)
/*------------------------------------------------------------- */


module.exports = routes;