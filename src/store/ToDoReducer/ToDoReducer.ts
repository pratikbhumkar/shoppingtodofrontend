import ITodo from "./Models/ToDo";
import ToDoTypes from "./ToDoTypes";

function ToDoReducer(state: ITodo, action: any): ITodo {
  var newState = { ...state };
  ToDoTypes.forEach((element) => {
    if (element.Type === action.type) {
      newState = element.Payload(action?.payload);
    }
  });
  return newState;
}

export async function fetchTodos(dispatch: any) {
  var requestOptions = {
    method: 'GET'
  };

  fetch("http://localhost:5000/api/items/all", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log('in fetch')
      dispatch({ type: 'FETCH_TODO', payload: result.items })
    })
    .catch(error => console.log('error', error));
}

export default ToDoReducer;