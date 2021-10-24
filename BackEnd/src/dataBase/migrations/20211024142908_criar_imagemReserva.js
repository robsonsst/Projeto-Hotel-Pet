
exports.up = function(knex) {
    return knex.schema.createTable('imagemReserva', function (table) {
        table.increments('id');
        table.string('caminhoImagem');
      })

};

exports.down = function(knex) {
    return knex.schema.dropTable('imagemReserva');
  
};
