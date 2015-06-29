Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/:slug', function () {
	var slug = this.params.slug;
	console.log(slug)
	var doc = Events.findOne({slug: this.params.slug});
	console.log(doc)
	Session.set("slug", slug);
	this.render('showEvent', {
		data: {
			"event": doc
		}
	});
});

Router.route('nope', function () {
  this.render('notComing');
});



// Router.route('/event/:_id', function () {
// 	this.render('showEvent', {
// 		data: function () {
// 			var params = this.params;
// 			return params
// 		}
// 	});
//   });

