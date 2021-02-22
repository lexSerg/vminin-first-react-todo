import React, { useState } from 'react';
import TodoList from './Todo/TodoList';
import todoList from './Data/todoList';
import Context from './context';
import AddTodo from './Todo/addTodo';


function App() {
//   let todoList = [
//     {id : 1, complited : false, title : 'Купить хлеб'},
//     {id : 2, complited : false, title : 'Купить мясо'},
//     {id : 3, complited : false, title : 'Купить масло'},
// ]
  const [todo, setTodo] = React.useState(todoList)
  function toggleTodo(id){
    setTodo(todo.map((item) => {
      if (item.id === id) item.complited = !item.complited;
      return item
    })) 
  }
  function removeTodo(id){
    setTodo(todo.filter( iter => iter.id !== id))
  }
  function addTodo(title) {
    setTodo(todo.concat([{title, id : Date.now(), complited : false}]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
    <div className='wrap'>
      <h1>First App</h1>
      <AddTodo onCreate={addTodo}/>
      {todo.length ? 
      <TodoList todoList={todo} onToggle={toggleTodo}/> :
      <p>No todos!</p>}
      
    </div>
    </Context.Provider>
  );
}

export default App;
