
let state = {count:0};
//REDUCERS
function counter(currentState,action){
    console.log("inside reducer");
    if(typeof currentState === 'undefined'){
  return {count:0};
    }
console.log("CURRENT STATE");
    console.log(currentState);
console.log("ACTION");
console.log(action.type);
let newState = {count:currentState.count}
    switch(action.type){
        case 'ADD':
        newState = {count:currentState.count+1};
        return newState;
        break;

        case 'SUBSTRACT':
        newState = {count:currentState.count-1};
        return newState;
        break;

        case 'RESET':
        newState = {count:0};
        return newState;
        break;

        default:
        console.log("default case");
        return currentState;//here just retun; statement will create problem.I suffered 20 min.
    } 
}

//ACTIONS
//let action = {type:"ADD"};
let store = Redux.createStore(counter);
render();
function render(){
    console.log("In render"+store.getState().count);
    document.getElementById("counter").innerHTML = store.getState().count;
}


document.getElementById("Add").addEventListener('click',function(){
    console.log("Add button clicked");
    store.dispatch(action);
    });
    document.getElementById("Substract").addEventListener('click',function(){
        console.log("Substract button clicked");
        store.dispatch({type:"SUBSTRACT"});
        });
        document.getElementById("Reset").addEventListener('click',function(){
            console.log("Reset button clicked");
            store.dispatch({type:"RESET"});
            });
store.subscribe(render);



//STORE:

console.log(store);