Template.homeLoggedIn.helpers({
	showNewEvent: function () {
		return showNewEvent.get()
	},
	showEvents: function () {
		return showEvents.get()
	},
	eventCount: function () {
		return Events.find({}).count()
	},
	eventVisible: function () {
		if (showNewEvent.get() || showEvents.get()) {
			return true
		} else {
			return false };
	}
})

Template.homeLoggedIn.events({
	'click [data-action="show-new-event"]': function(event, template) {
		showNewEvent.set( !showNewEvent.get() );
},
	'click [data-action="show-events"]': function(event, template) {
		showEvents.set( !showEvents.get() );
	}
})