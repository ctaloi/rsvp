
var title = new ReactiveVar()

var clearForm = function() {
    $("#title").val(null);
    $("#location").val(null);
    $("#date").val(null);
    $("#description").val(null);
    title.set(null);
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
		var theTitle = event.target.value
		title.set(theTitle);
	},
})

Template.newEvent.helpers({
	eventSlug: function () {
		slug = title.get()
		return encodeURI(slug.split(' ').join('-'))
	},
	eventTitle: function () {
		return title.get()
	}
});