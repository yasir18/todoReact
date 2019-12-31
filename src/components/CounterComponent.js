import React from 'react'

const Counters = (props) =>{
    return(
        <div style={{margin:'2%'}}>Todos count:{props.count} | Deleted count :{props.deletedCount}</div>
    )
}
export default Counters