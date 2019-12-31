import React from 'react'
import {List} from '@material-ui/core'
import DisplayTodo from './DisplayTodo'

const DisplayTodos = (props) => {

    return(
        <List component="nav"  aria-label="mailbox folders">
           {props.todos.map((todo) => {
            return (
                <DisplayTodo key={todo.id} todo={todo} deletedTodos={props.deletedTodos} 
                            setDeletedTodos={props.setDeletedTodos} todos={props.todos} setTodos={props.setTodos} />
            )
            })}
        </List>
    )
  }
export default DisplayTodos
