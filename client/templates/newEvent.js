
var eventSlug = new ReactiveVar()

function hasWhiteSpace(s) {
  return s.indexOf(' ') >= 0;
}

function makeSlug(title) {
  // Transform title to slug
  if (hasWhiteSpace(title)) {
    slug = encodeURI(title.split(' ').join('-'))
  } else {
    slug = encodeURI(title)
  }
  console.log("> transformed "+ title + " to " + slug)
  return slug
}

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

		doc = {
			"title": title,
			"slug": eventSlug.get(),
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
		var tmpSlug = event.target.value
    var cleanSlug = makeSlug(tmpSlug).toLowerCase()
    eventSlug.set(cleanSlug)
	},
})

Template.newEvent.helpers({
	eventSlug: function () {
    return eventSlug.get()
	},
	eventTitle: function () {
		return title.get()
	}
});

Template.newEvent.onRendered(function () {
  var picker = new Pikaday({ field: document.getElementById('date') });
  picker.gotoDate(new Date())
});
