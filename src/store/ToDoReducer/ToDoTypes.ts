import {AddToDo, DeleteTodo, FetchTodos, AssignCategoryToTodo, MarkComplete} from "./Operations/ToDoOperations";

interface IType{
    Type: string;
    Payload: Function;
}

const ADD_TODO:IType = {Type:"ADD_TODO", Payload: AddToDo};
const DELETE_TODO:IType = {Type:"DELETE_TODO", Payload: DeleteTodo};
const FETCH_TODO:IType = {Type:"FETCH_TODO", Payload: FetchTodos};
const ASSIGN_CATEGORY_TO_TODO:IType = {Type:"ASSIGN_CATEGORY_TO_TODO", Payload: AssignCategoryToTodo};
const MARK_COMPLETE:IType = {Type:"MARK_COMPLETE", Payload: MarkComplete};

const ToDoTypes: IType[]=[ADD_TODO, DELETE_TODO, FETCH_TODO, ASSIGN_CATEGORY_TO_TODO, MARK_COMPLETE];

export default ToDoTypes;