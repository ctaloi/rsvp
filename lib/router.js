Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/:eventSlug', function () {
	var eventSlug = this.params.eventSlug;
	var doc = Events.findOne({eventSlug: this.params.eventSlug});

	Session.set("eventSlug", eventSlug);
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

