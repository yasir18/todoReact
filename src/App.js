import React,{ useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import uuid from 'react-uuid';
import {Container } from '@material-ui/core';
import Counters from './components/CounterComponent'
import DisplayTodos from './components/DisplayTodos'
import TextContainer from './components/TextContainer'
import DeletedTodos from './components/DeletedTodos'

const App = () => {
    const [todos,setTodos] = useState ([])
    const [todoItem,setTodoItem] = useState('')    
    const [count,setCount]=useState(0)                                
    const [deletedTodos,setDeletedTodos]=useState([])
    const [deletedCount,setDeletedCount] = useState(0)
    

    const setTodoEvent = (event) => {
        setTodoItem(event.target.value)
        if(event.key === 'Enter'){
            addTodoEvent()
        }
    }

    const addTodoEvent = () => {
        setTodos([...todos,{ id:uuid(), text:todoItem}])
        setTodoItem('')
    }

    useEffect(() => {
        setDeletedCount(deletedTodos.length)
    }, [deletedTodos])

    useEffect(() => {
        setCount(todos.length)
    }, [todos])

    return(
    <Container maxWidth="sm">
       <h1>To-do List</h1>
      <Counters count={count} deletedCount={deletedCount} />
      <DisplayTodos todos={todos} deletedTodos={deletedTodos} setDeletedTodos={setDeletedTodos} setTodos={setTodos}/>
      <TextContainer todoItem={todoItem} setTodoEvent={setTodoEvent} addTodoEvent={addTodoEvent}/>
      <DeletedTodos todos={deletedTodos}/>
      {/* <DisplayTodos todos={deletedTodos} /> */}
    </Container>
    )
}

export default App
