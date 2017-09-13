module.exports = function(app)
{
	app.get('/',function(req,res){
		res.render('index');
	});
	app.get('/new',function(req,res){
		res.render('new');
	});
	app.get('/list',function(req,res){
		res.render('list');
	});
}
