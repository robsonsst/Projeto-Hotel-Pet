
exports.up = function(knex) {
    return knex.schema.createTable('usuario', function (table) {
        table.increments('id');
        table.string('nome').notNullable();
        table.string('sobrenome');
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.enu('status', ['ativo', 'inativo']).defaultTo('ativo');
        table.date('criado_em');
        table.enu('funcao', ['cliente', 'funcionario', 'gerente']).defaultTo('cliente');
        table.string('usuario');
        table.string('senha');
      })

};

exports.down = function(knex) {
    return knex.schema.dropTable('usuario');
  
};
