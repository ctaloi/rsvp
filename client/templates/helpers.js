
showNewEvent = new ReactiveVar()
showEvents = new ReactiveVar()

Template.registerHelper('firstName', function() {
  return firstName = Meteor.user().profile.name.split(" ")[0]
})

Template.registerHelper("logger", function() {
  return console.log(this);
});

Template.registerHelper('userAvatar', function() {
	var getAvatar = function() {
	Meteor.call('getUserAvatar', function (error, result) {
		Session.set("avatarUrl", result);
		})
	}
	getAvatar()
	return Session.get("avatarUrl");
})