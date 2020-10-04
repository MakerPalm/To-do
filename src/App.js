import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList'
import Form from './Components/Form'
function App() {
  const [inputText, setinputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    filterhandler();
    saveLocal();
    
  }, [todos, status])


  useEffect(() => {
    getlocal();
  }, [])

  const filterhandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }
  //Save To Local
  const saveLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getlocal = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todolocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todolocal)
    }
  }
  return (

    <div className="app">
      <header>
        Mahir's To Do List
      </header>
      <Form setStatus={setStatus} setTodos={setTodos} todos={todos} inputText={inputText} setinputText={setinputText} />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} inputText={inputText} />
    </div>
  );
}

export default App;
