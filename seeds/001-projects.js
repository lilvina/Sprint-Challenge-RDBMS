
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {name: 'Web APIs', description: 'starting a project on APIs', completed: false},
    {name: 'Databases', description: 'starting a project on databases', completed: false},
    {name: 'Node', description: 'starting a project in Node', completed: false}
  ]);
};
