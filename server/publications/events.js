Meteor.publish("events", function(limit) {
    // if (!this.userId) {
    //     return [];
    // }
    // Meteor._sleepForMs(5000);
    // return EventLog.find({}, {limit: 100});
    return Events.find({})
});
