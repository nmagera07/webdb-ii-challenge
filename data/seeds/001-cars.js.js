
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert({
        VIN: '12345',
        make: 'Ford',
        model: 'F-150',
        mileage: '100,000'
      });
    });
};
