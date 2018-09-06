console.log("reducer got loaded"); 
function todoListAddReducer(currentState, action) {
    console.log("inside todoList Reducer");
    if (typeof currentState === 'undefined') {
        return [];
    }
    let newState = [...currentState];
    switch (action.type) {
        case "ADD_TODOITEM":
            addTodoList(newState, action.name);
            return newState;
            
        case "DELETE_TODOITEM":
        deleteToDoItem(newState,action.name);
        return newState;

        default:
            return currentState;

    }
}
function addTodoList(newState, _todoTaskName) {
    let todoItem = new TodoItem(_todoTaskName);
    newState.push(todoItem);
}
function deleteToDoItem(_newState,_todoTaskName){
    for (let itemCount = 0; itemCount < _newState.length; itemCount++) {
        if (_todoTaskName == _newState[itemCount].name) {
    _newState.splice(itemCount, 1);
        }
}
}