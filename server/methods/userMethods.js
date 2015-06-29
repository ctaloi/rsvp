Meteor.methods({
	getUserAvatar: function () {
		console.log(this)
		var facebookId = Meteor.users.findOne({_id: this.userId},
                             {fields: {
                             	'services.facebook.id': 1
                             }});
		var facebookUserId = facebookId.services.facebook.id
		var avatarUrl = 'http://graph.facebook.com/'+facebookUserId+'/picture?type=large'
		return avatarUrl
	}
});