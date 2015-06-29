Template.showEvent.helpers({
	eventId: function () {
		return Session.get("eventId");
	},
});
Template.showEventLoggedIn.helpers({
	isValidEvent: function () {
		var thisSlug = Router.current().params.eventSlug
		console.log(thisSlug)
		isValid = Events.findOne({eventSlug: thisSlug});
		return isValid
	}
});


