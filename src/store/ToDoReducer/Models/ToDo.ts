
export interface ITodo {
    name: string;
    id: number;
    category: string;
    completed: boolean;
}
class ToDo implements ITodo {
    name: string;
    id: number;
    category: string;
    completed: boolean;
    constructor(nameOrToDo: string | ITodo, category?: string, id?: number, completed?: boolean) {
        if (typeof nameOrToDo === 'string') {
            this.name = nameOrToDo;
            this.category = category || '';
            this.id = id || -1;
            this.completed = completed || false;
        } else {
            this.name = nameOrToDo.name;
            this.category = nameOrToDo.category;
            this.id = nameOrToDo.id;
            this.completed = nameOrToDo.completed;
        }
    }
}
export default ToDo;