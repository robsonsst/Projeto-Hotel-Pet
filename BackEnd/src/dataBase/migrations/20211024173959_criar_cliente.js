
exports.up = function(knex) {
    return knex.schema.createTable('cliente', function (table) {
        table.increments('id');
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('email').notNullable();
        table.string('telefone');
        table.string('caminhoImagem');
      })

};

exports.down = function(knex) {
    return knex.schema.dropTable('cliente');
  
};
