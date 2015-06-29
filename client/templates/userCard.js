var getAvatar = function() {
	Meteor.call('getUserAvatar', function (error, result) {
		Session.set("avatarUrl", result);
	})
}

Template.userCard.helpers({
  userAvatar: function() {
  	getAvatar()
    return Session.get("avatarUrl");
  }
});