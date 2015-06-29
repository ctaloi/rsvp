
var eventSlug = new ReactiveVar()

var clearForm = function() {
    $("#title").val(null);
    $("#location").val(null);
    $("#date").val(null);
    $("#description").val(null);
    eventSlug.set(null);
}

Template.newEvent.events({
	'click [data-action="save"]': function(event) {

		event.preventDefault();

		var title = $("#title").val()
		var location = $("#location").val()
		var date = $("#date").val()
		var description = $("#description").val()

		slug = encodeURI(title.split(' ').join('-'))

		doc = {
			"title": title,
			"slug": slug,
			"location": location,
			"date": date,
			"description": description
		}

		Meteor.call("newEvent", doc, function (error, result) {
			if(error) {
				Materialize.toast("An Error Occurred", 2000)
			} {
				Materialize.toast("Saved your event", 2000)
				clearForm();
				showNewEvent.set( !showNewEvent.get() );
			}
		});
	},
	'keyup [data-action="event-title"]': function(event) {
		var title = event.target.value
		eventSlug.set(encodeURI(title.split(' ').join('-')));
	}
})

Template.newEvent.helpers({
	eventSlug: function () {
		return eventSlug.get()
	}
});