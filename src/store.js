import {createStore} from 'redux';


const ADD = "add";
const DELETE = "minus";

const addTodo = (text) => {
    return {
        type: ADD,
        text
    }
}

const deleteTodo = (id) => {
    return {
        type: DELETE,
        id
    }
}
const reducer = (state = ["1"], action) => {
    switch (action.type) {
        case ADD:
            return [{text: action.text, id: Date.now()}, ...state];
        case DELETE:
            return state.filter(el => el.id !== action.id);
        default:
            return state;
    }
}

const store = createStore(reducer);

export const actionCreators = {
    addTodo,
    deleteTodo
}

export default store;