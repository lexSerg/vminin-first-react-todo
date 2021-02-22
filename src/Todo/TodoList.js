import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

const styles = {
    ul : {
        listStyle : 'none',
        margin : 0,
        padding : 0
    }
};


function TodoList(props) {
    return (
        <ul style={styles.ul}>
            { props.todoList.map( (todoItem, index) => {
                return <TodoItem todoItem={todoItem} key={todoItem.id} index={index} onChange ={props.onToggle}/>
            }) }
        </ul>
    )
};
TodoList.propTypes = {
    todoList : PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle : PropTypes.func.isRequired
}
export default TodoList