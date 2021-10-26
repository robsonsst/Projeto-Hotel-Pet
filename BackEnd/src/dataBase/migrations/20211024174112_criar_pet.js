exports.up = function(knex) {
    return knex.schema.createTable('pet', function(table) {
        table.increments('id');
        table.string('nome').notNullable();
        table.string('tipo').notNullable();
        table.string('raça');
        table.enu('tamanho', ['pequeno', 'medio', 'grande']);
        table.string('imagemCaminho');
        table.integer('idCliente').references('id').inTable('cliente');

    })

};

exports.down = function(knex) {
    return knex.schema.dropTable('pet');

};