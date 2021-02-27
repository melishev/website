const Post = require('../models/modelPosts')

// Получить все
module.exports.list = function (req, res, next) {
	Post.find({}, function(err, posts){
      	if(err) {
          	return res.status(500).json({
              	message: 'Ошибка в получении объекта.'
          	});
      	}
  	return res.json(posts)
	})
}

// Получить один
module.exports.show = function(req, res) {
    var id = req.params.id;
    Post.findOne({_id: id}, function(err, post){
        if(err) {
            return res.status(500).json({
                message: 'Ошибка в получении объекта.'
            });
        }
        if(!post) {
            return res.status(404).json({
                message: 'Данного объекта не существует. Проверьте правильность данных.'
            });
        }
        return res.json(post);
    });
}