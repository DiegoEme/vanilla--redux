import {createStore} from "redux";

const input = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case ADD_TODO:
            return [{text: action.text, id: Date.now() },...state ];
        case DELETE_TODO:
            return state.filter(el => el.id !== action.id)
        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))

const addTodo = (text) => {
    store.dispatch({type: ADD_TODO, text})
}

const deleteTodo = (e) => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch({type: DELETE_TODO, id})
}


const renderTodo = () => {
    const todos = store.getState();
    ul.innerHTML = "";
    todos.forEach(element => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "Delete";
        btn.addEventListener("click", deleteTodo)
        li.id = element.id;
        li.innerText = element.text;
        ul.appendChild(li)
        li.appendChild(btn)
    });
}

store.subscribe(renderTodo)

const onSubmit = (e) => {
    e.preventDefault();
    const todo = input.value;
    input.value = "";
    addTodo(todo)
}

form.addEventListener("submit", onSubmit);