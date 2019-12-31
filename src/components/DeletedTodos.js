import React,{ useState, useEffect} from 'react';
import {Button,Container,List,ListItem,ListItemText,Divider } from '@material-ui/core';


const DeletedTodos = (props) => {
    
    const [clicked,setClicked]=useState(false)
    const [buttonText,setButtonText]=useState()
    const toggleDelete = () =>{
        setClicked(!clicked)
    }

    useEffect(() => {
        if(clicked){
            setButtonText('Hide')
        }
        else{
            setButtonText('Show')
        }

    }, [clicked])

    const hideOrUnhide = () =>{
        return ( clicked ? {display:'block'}:{display:'none'})
    }
    return (
        <div style={{'textAlign':'center'}}>
        <Button variant="outlined" size="medium" color="secondary" onClick={toggleDelete}>
        {buttonText}  Deleted Todos
        </Button>
        <Container style={{margin:'2%'}} >
            <List>
            {props.todos.map((todo) => {
            return (
                <>
                    <ListItem  style={hideOrUnhide()}>
                    <ListItemText primary= {todo.text} />
                    </ListItem>
                    <Divider />
                </>
            )
            })}
                
            </List>
        </Container>

        </div>
    )
}

export default DeletedTodos