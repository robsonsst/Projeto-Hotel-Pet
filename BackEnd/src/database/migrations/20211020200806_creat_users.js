
exports.up = function(knex) {
    return knex.schema.createTable('usuario', function (table) {
        table.increments('id');
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('email').notNullable();
        table.string('telefone');
        table.enu('status', ['ativo', 'inativo']);
        table.date('criado_em');
        table.string('funcao');
        table.string('usuario');
        table.string('senha');
      })

};

exports.down = function(knex) {
    return knex.schema.dropTable('usuario');
  
};