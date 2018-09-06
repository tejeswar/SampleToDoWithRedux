
function constructDeleteAnchorTag(_todoObjName){
    let eventListenerMethod = `${deleteTodoItem}`;
    let anchorTag = "<a id=a1_"+_todoObjName+" href='#' onClick="+eventListenerMethod+">Delete</a>";
    //$('#_todoObjName').on('click', '.listDeleteIcon', deleteList);
    //let anchorNode = createHTMLElement(anchorTag);
    //anchorNode.addEventListener('click',deleteTodoItem);
    //return createStringOfHtmlElement(anchorNode);
    return anchorTag;
   
}
function createStringOfHtmlElement(_anchorNode){
    const template = document.createElement('template');
    template.appendChild(_anchorNode);
    console.log(template.innerHTML);
   
    return template.innerHTML;
}
function render(){
    console.log("inside render method");
    document.getElementById("toDocontainer").innerHTML = "";
    let _todoObjArr = store.getState();
    console.dir(_todoObjArr);
    
    let singleTodoDiv = "";
    for(let todoItemCount = 0;todoItemCount < _todoObjArr.length ;todoItemCount++ ){

      let _todoObj =  _todoObjArr[todoItemCount];
      //let singleAnchorTag = constructDeleteAnchorTag(_todoObj.name);
     // console.log(singleAnchorTag);
     /*
      let singleTodoDiv = document.createElement('div');
      singleTodoDiv.setAttribute('id',_todoObj.name);
      singleTodoDiv.setAttribute('class',"todoItem");
      singleTodoDiv.innerText = _todoObj.name;
      singleTodoDiv.appendChild(singleAnchorTag);
      */
     //${singleAnchorTag}
      
        singleTodoDiv = singleTodoDiv+ 
        `<div id=${_todoObj.name} class="todoItem">${_todoObj.name}<a href="#" class="todoItemClass" onClick="deleteTodoItem1()">Delete</a></div> `;

       
        /*
       singleTodoDiv = singleTodoDiv+ 
       `<div id=${_todoObj.name} class="todoItem">${_todoObj.name}</div>`;
       */
      //document.getElementById("toDocontainer").appendChild(singleTodoDiv);
    }
    //let createHTMLElement(singleTodoDiv);

    console.log(singleTodoDiv);
    document.getElementById("toDocontainer").innerHTML = singleTodoDiv;
    
    }
    function createHTMLElement(html) {
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content.firstElementChild;
    }
    
    //document.body.appendChild(createHTMLElement('<h1>Hello</h1>'));
   
    store.subscribe(render);