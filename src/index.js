import {createStore} from 'redux';

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


//Este es el reducer, la única función que puede
//modificar el estado de la app por medio de una accion
//Dispacth va a llamar el reducer con el estado actual y lo
// va a modificar con la accion que indiquemos.

const countModifier = (count = 0, action) => {
    
    switch (action.type) {
        case "plus":
            return count + 1;
        case "minus":
            return count - 1;
        default:
            return count;
    }   
}

const countStore = createStore(countModifier)

//El subscriptor es que está pendiente de chismoso
//cuando hay un cambio en el reducer
const onChange = () => {
    number.innerText = countStore.getState();
}
countStore.subscribe(onChange)


plus.addEventListener("click", () => {
    countStore.dispatch({type: "plus"})
})

minus.addEventListener("click", () => {
    countStore.dispatch({type: "minus"})
})

