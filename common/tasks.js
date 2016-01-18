Tasks = new Mongo.Collection("tasks");

Schemas = {};

Schemas.Task = new SimpleSchema({
  title: {
    type: String
  }
})
