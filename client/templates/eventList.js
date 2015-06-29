
Template.eventList.helpers({
	myEvents: function () {
		return Events.find({})
	}
});