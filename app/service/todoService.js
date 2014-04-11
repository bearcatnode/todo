var TodoService = function() {
	this.todoDao = null;
}

TodoService.prototype.getList = function(params, cb) {
	return this.todoDao.getList(params, cb);
}

TodoService.prototype.addTodo = function(params, cb) {
	return this.todoDao.addTodo(params, cb);
}

TodoService.prototype.getTodoById = function(id, cb) {
	return this.todoDao.getTodoById(id, cb);
}

TodoService.prototype.updateTodo = function(title, id, cb) {
	return this.todoDao.updateTodo(title, id, cb);
}

TodoService.prototype.updateTodoFinished = function(finished, id, cb) {
	return this.todoDao.updateTodoFinished(finished, id, cb);
}

TodoService.prototype.deleteById = function(id, cb) {
	return this.todoDao.deleteById(id, cb);
}

module.exports = {
	id: "todoService",
	func: TodoService,
	props: [{
		name: "todoDao",
		ref: "todoDao"
	}]
}