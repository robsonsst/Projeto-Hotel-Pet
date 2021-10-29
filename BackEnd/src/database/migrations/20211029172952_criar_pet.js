exports.up = function(knex) {
    return knex.schema.createTable('pet', function (table) {
        table.increments('id');
        table.string('nome').notNullable();
        table.string('tipo').notNullable();
        table.string('raça');
        table.enu('tamanho', ['pegueno', 'medio', 'grande']);
        table.string('imagemCaminho');
        table.integer('idUsuario').references('id').inTable('usuario');
        
      })

};

exports.down = function(knex) {
    return knex.schema.dropTable('pet');
  
};