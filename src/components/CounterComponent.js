import React from 'react'

const Counters = (props) =>{
    return(
        <div style={{margin:'2%'}}>Todos count:{props.todos.length} | Deleted count :{props.deletedTodos.length}</div>
    )
}
export default Counters