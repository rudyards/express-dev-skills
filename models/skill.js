const skills = [
    {skill: 'HTML', proficency: 'Intermediate'},
    {skill: 'Javascript', proficency: 'Intermediate'},
    {skill: 'CSS', proficency: 'Intermediate'},
    {skill: 'Express', proficency: 'Beginner'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};



function getAll() {
    return skills;
}

function getOne(id){
    return skills[id];
}

function create(skill) {
  skills.push(skill);
}

function deleteOne(id) {
    skills.splice(id, 1);
}