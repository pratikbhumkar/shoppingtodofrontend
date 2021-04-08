import ITodo from "../Models/ToDo";

function AddToDo(state: ITodo): ITodo {
    return state;
}

function DeleteTodo(state: ITodo): ITodo {
    return state;
}

function FetchTodos(state: ITodo): ITodo {
    console.log('in fetch')
    return state;
}

function AssignCategoryToTodo(state: ITodo): ITodo {
    return state;
}

function MarkComplete(state: ITodo): ITodo {
    return state;
}

export {AddToDo, DeleteTodo, FetchTodos, AssignCategoryToTodo, MarkComplete};