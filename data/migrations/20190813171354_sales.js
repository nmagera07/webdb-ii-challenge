
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments()

      tbl.string('salesPrice').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
