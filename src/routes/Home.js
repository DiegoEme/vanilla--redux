import React, {useState} from 'react';
import { connect } from 'react-redux';


function Home(props){
    console.log("props",props)
    const [text, setText] = useState("");

    function onChange(e){
        setText(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault();
        setText("")
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

export default connect(mapStateToProps) (Home);