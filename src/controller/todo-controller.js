//import $ from '../../node_modules/jquery/dist/jquery';
console.log("todo controller got loaded");

document.getElementById("AddTodo").addEventListener("click",function(){
    let todoTaskName = document.getElementById("taskName").value;
    let action = {
        type:"ADD_TODOITEM",
        name:todoTaskName
    }
    store.dispatch(action);


})


let deleteTodoItem1 = function deleteTodoItem(){

    console.log("Delete button got clicked:");
   }

