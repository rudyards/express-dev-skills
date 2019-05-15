var Skill = require('../models/skill')


module.exports = {
   index,
   show,
   new: newSkill,
   create,
   delete: deleteSkill
};
 
function index(req, res) {
   res.render('skills/index', {
     skills: Skill.getAll()
   });
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    id: req.params.id
  });
}

function create(req, res){
    req.body.done = false;
    Skill.create(req.body);
    res.redirect('/skills');
}

function newSkill(req, res){
    res.render('skills/new')
}

function deleteSkill(req, res){
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}