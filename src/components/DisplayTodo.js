import React, {useState} from 'react';
import {Checkbox,Container,ListItem,ListItemText,Divider,IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


const DisplayTodo = (props) =>{

    const [checked,setCheckedProperty]=useState(false)
    const markComplete = () => {
        return (checked ? {textDecoration:'line-through'}: {textDecoration:'none'} )
     }
    
    const deleteTodoEvent = () =>{
        props.setDeletedTodos([...props.deletedTodos,{text:props.todo.text}])
        let filteredTodos=props.todos.filter((todo)=>{
            return (todo.id !== props.todo.id)            
        })
        props.setTodos(filteredTodos)

    }
     
    const toggleComplete = () =>{
         setCheckedProperty(!checked)
     }

    return(
        <Container>
    <ListItem  style={markComplete()}>
        <ListItemText primary= {props.todo.text} />
        <Checkbox checked={checked} onChange={toggleComplete} value={checked}/>
        <IconButton aria-label="delete" onClick={deleteTodoEvent}>
            <DeleteIcon />
        </IconButton>
    </ListItem>
      <Divider />
      </Container>
      )
}  

export default DisplayTodo;