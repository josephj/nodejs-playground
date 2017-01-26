
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({name: 'Joseph'}),
        knex('users').insert({name: 'Ray'}),
        knex('users').insert({name: 'Martin'})
      ]);
    });
};
