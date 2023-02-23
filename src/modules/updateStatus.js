import { getTodos ,setTodos} from "./store.js"
import UI from "./UI.js";
export const updateStatus=(id)=>{
    const [statusId] = id.match(/\d+/);
    const todos=getTodos().map(todo=>{
        if(todo.id===statusId){
            return {...todo,completed:!todo.completed}
        }else{
            return todo
        }
    })
    setTodos(todos)
    return
}
export const clearTodoList=()=>{
    const listToNotClear=getTodos().filter((todo)=>todo.completed===false)
    const listToClear=getTodos().filter((todo)=>todo.completed===true)
    listToClear.forEach(todo=>{
        UI.remove(todo.id)
    })
    setTodos(listToNotClear)
    return
}