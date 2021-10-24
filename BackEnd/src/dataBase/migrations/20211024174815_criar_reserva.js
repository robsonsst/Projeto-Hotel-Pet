
exports.up = function(knex) {
    return knex.schema.createTable('reserva', function (table) {
        table.increments('id');
        table.string('proprietario').notNullable();
        table.text('notas').notNullable();
        table.string('notasFuncionario').notNullable();
        table.enu('status', ['reservado', 'em andamento','finalizada']);
        table.date('dataInicial');
        table.date('dataFinal');
        table.float('diaria');
        table.date('criacaoReserva');
        table.date('atualizacaoReserva');
        table.string('reciboCaminho');
        table.integer('idPet').references('id').inTable('pet');
        table.integer('idUsuario').references('id').inTable('usuario');
        
      })

};

exports.down = function(knex) {
    return knex.schema.dropTable('reserva');
  
};
