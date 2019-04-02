
exports.seed = function(knex, Promise) {
  return knex('actions').insert([
    {project_id: 1, description: 'practice 1', notes: 'do this', completed: false},
    {project_id: 1, description: 'practice 1', notes: 'do this', completed: false},
    {project_id: 2, description: 'practice 2', notes: 'do this', completed: false},
    {project_id: 2, description: 'practice 2', notes: 'do this', completed: false},
    {project_id: 3, description: 'practice 3', notes: 'do this', completed: false},
    {project_id: 3, description: 'practice 3', notes: 'do this', completed: false}
  ]);
};
