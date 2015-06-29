Template.showEvent.helpers({
	eventId: function () {
		return Session.get("eventId");
	},
});
Template.showEventLoggedIn.helpers({
	isValidEvent: function () {
		var thisSlug = Router.current().params.slug
		console.log(thisSlug)
		isValid = Events.findOne({slug: thisSlug});
		console.log(isValid)
		return isValid
	}
});


