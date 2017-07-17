// visibility filters
// var filters = {

// }

export default {
  all: function (todos) {
    return todos
  },
  active: function (todos) {
    return todos.filter(function (todo) {
      return !todo.isFinished;
    });
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.isFinished;
    });
  }
}
