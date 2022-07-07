import { useState } from "react"
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from "./components/TodoItem";


function App() {

  const [todos, setTodos] = useState([])

  function addTodo(text) {
    let id = 1
    if(todos.length > 0){
      id = todos[0].id + 1
    }
    let todo ={
      id: id,
      text: text,
      completed: false
    }
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
    
  }
  function removeTodo (id) {
    let updatedTodos = [...todos].filter((dentro) => dentro.id !== id)
    setTodos(updatedTodos)
  }
  function completeTodo(id) {
    let updatedTodos = todos.map((todo)=> {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className='todo-app'>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <hr className="seperator"/>
      {todos.map((dentro)=>{
        return(
          <TodoItem removeTodo={removeTodo} item={dentro} key={dentro.id} completeTodo={completeTodo}/>
        )
      })}
    </div>
  );
}

export default App;
