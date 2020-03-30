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
    const [deletedTodos,setDeletedTodos]=useState([])

    

    const setTodoEvent = (event) => {
        setTodoItem(event.target.value)
        if(event.key === 'Enter'){
            addTodoEvent()
        }
    }

    const addTodoEvent = () => {
        if(todoItem.trim().length > 0){
            setTodos([...todos,{ id:uuid(), text:todoItem}])
            setTodoItem('')
        }
        
    }

    return(
    <Container maxWidth="sm">
       <h1>To-do List</h1>
      <Counters todos={todos} deletedTodos={deletedTodos} />
      <DisplayTodos todos={todos} deletedTodos={deletedTodos} setDeletedTodos={setDeletedTodos} setTodos={setTodos}/>
      <TextContainer todoItem={todoItem} setTodoEvent={setTodoEvent} addTodoEvent={addTodoEvent}/>
      <DeletedTodos todos={deletedTodos}/>
    </Container>
    )
}

export default App
