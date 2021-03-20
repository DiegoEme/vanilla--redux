import React, {useState} from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function Home(props){
    console.log(props)
    
    const [text, setText] = useState("");

    function onChange(e){
        setText(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault();
        props.addTodo(text);
        setText("");
    }

    return (
    <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type="text" value={text}/>
        </form>
        <ul>{JSON.stringify(props.todo)}</ul>
    </>
    )


}

function mapStateToProps(state, ownProps){
    return {todo: state}
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        addTodo: (text) => dispatch(actionCreators.addTodo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);