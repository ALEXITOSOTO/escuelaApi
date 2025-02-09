/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('curso', table => {
        table.increments('id').primary();
        table.string('codigo').notNullable().unique();
        table.string('nombre').notNullable();
        table.string('descripcion');
        table.string('duracion');
        table.string('fecha_inicio');
        table.string('fecha_fin');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('curso');
};

