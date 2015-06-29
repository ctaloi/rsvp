Events = new Mongo.Collection('events');

Events.before.insert(function (userID, doc) {
  doc.createdAt = Date.now();
  doc.createdBy = userID;
});

Events.before.update(function (userId, doc, fieldNames, modifier, options) {
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = Date.now();
  modifier.$set.modifiedBy = userId;
});
