const Project = require('../models/modelProjects')

// Получить все
module.exports.list = function (req, res, next) {
	Project.find({}, function(err, projects){
      	if(err) {
          	return res.status(500).json({
              	message: 'Ошибка в получении объекта.'
          	});
      	}
  	return res.json(projects)
	})
}

// Получить один
module.exports.show = function(req, res) {
    var id = req.params.id;
    Project.findOne({_id: id}, function(err, project){
        if(err) {
            return res.status(500).json({
                message: 'Ошибка в получении объекта.'
            });
        }
        if(!project) {
            return res.status(404).json({
                message: 'Данного объекта не существует. Проверьте правильность данных.'
            });
        }
        return res.json(project);
    });
}