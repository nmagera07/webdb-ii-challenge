
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments()

      tbl.string('VIN', 128).unique().notNullable()
      tbl.string('make', 50)
      tbl.string('model', 50)
      tbl.string('mileage', 500000)
      tbl.string('transmissionType', 50)
      tbl.string('titleStatus', 50)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
