if ( Meteor.isClient ) {
  FlowRouter.route( "/edit-task/:_id", {
    name: "Edit Recipe",
    action: function () {
      BlazeLayout.render( "MasterLayout", { content: "EditRecipe" } );
    }
  })

  // FlowRouter.route( "/recipe-html/:_id", {
  //   name: "Recipe HTML",
  //   action: function () {
  //     BlazeLayout.render( "MasterLayout", { content: "RecipeHTML" } )
  //   }
  // })

  FlowRouter.route( "/add-task", {
    name: "Add Recipe",
    action: function () {
      BlazeLayout.render( "MasterLayout", { content: "AddRecipe" } )
    }
  })

  FlowRouter.route( "/tasks", {
    name: "Recipes",
    action: function () {
      BlazeLayout.render( "MasterLayout", { content: "Recipes" } )
    }
  })
}
