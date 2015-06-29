Meteor.methods({
	newEvent: function (theDoc) {
		check(this.userId, String)
		check(theDoc, {
			title: String,
			slug: String,
			location: String,
			date: String,
			description: String
		})
		Events.insert(theDoc)
	}
})
