Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {
                             	'services.facebook.first_name': 1,
                             	'services.facebook.last_name': 1,
                             	'services.facebook.id': 1
                             }});
  } else {
    this.ready();
  }
});