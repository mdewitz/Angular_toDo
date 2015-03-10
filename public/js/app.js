angular
  //dependencies
  .module('TodoApp', [])

  //dependency incetion ($scope)
  // .controller('TodoController', ['$scope', function($scope){
  .controller('TodoController', ['$scope', 'TodoService', function($scope, TodoService){

    //displays todos within array.
  TodoService.list().then(function (response){
    $scope.todos = response.data;
  });

    // $scope.todos = [
    //   {
    //     title : "Fake toDo",
    //     completed : true
    //   }
    // ];

    //below adds new todo
  $scope.save_todo = function(new_title){
    $scope.todos.push({
      title: new_title,
      completed: false
    });

    //clear input on send
    $scope.new_todo = "";
    //must in inside curly brace seen below
    // };
    TodoService.create({ title : new_title });
    };
    
  $scope.enter_saves = function($event){
    if($event.keyCode ==13){ //keycode for enter key
      $scope.save_todo($scope.new_todo);
    }
  };

}]);

  // $('input').find('#search_input').hover(function(){
  //     $(this).css("background-color", "rgb(192, 192, 192)");
  //   }, function(){
  //     $(this).css("background-color", "rgb(96, 96, 96)");
  //   }); 
