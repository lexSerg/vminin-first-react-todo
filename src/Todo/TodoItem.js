import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context';

const styles = {
    li : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : '.5rem 1rem',
        border : '1px solid #ccc',
        borderRadius : '4px',
        marginBottom : '.5rem'
    },
    input : {
        marginRight : '1rem'
    }
}

function TodoItem({todoItem, index, onChange}) {
    const {removeTodo} = useContext(Context)
    const classes = [];
    if (todoItem.complited) classes.push('done');
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input 
                    style={styles.input} 
                    type='checkbox' 
                    onChange={()=> onChange(todoItem.id)}
                    checked={todoItem.complited}
                />
                <strong>{++index})&nbsp;</strong>
                {todoItem.title}
            </span>
            <button className='rm' onClick={removeTodo.bind(null, todoItem.id)}>&times;</button>
            
        </li>
    )
}
TodoItem.propTypes = {
    todoItem: PropTypes.object.isRequired,
    index : PropTypes.number,
    onChange : PropTypes.func.isRequired
}
export default TodoItem