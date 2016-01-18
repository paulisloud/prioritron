Meteor.publish("tasks", function () {
  return Tasks.find()
})

Meteor.publish("singleTask", function (taskId) {
  return Tasks.find({_id: taskId})
})
