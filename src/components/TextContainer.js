import React from 'react';
import {Button,TextField } from '@material-ui/core';

const TextContainer = (props) =>{
    return (
        <div  style={{'marginBottom':'5%'}}>
            <TextField id="standard-basic" value={props.todoItem} onChange={props.setTodoEvent} onKeyDown={props.setTodoEvent} style={{width:'85%',marginRight: '2%'}} />
            <Button variant="contained" onClick={props.addTodoEvent} style={{width:'13%'}}>Add</Button>
        </div>
    )
}

export default TextContainer