import React,{useState} from 'react'

const Pagination = ({total,current,onChange}) => {
 
    
     
  return (
    <div>
        <button style={{backgroundColor:'#27005D',color:'white',width:'60px',borderRadius:'7px',marginBottom:'6px'}} disabled={current === 1} onClick={() => onChange(current - 1)}>Prev</button>
        <button style={{backgroundColor:'white',color:'black',width:'40px',marginBottom:'6px'}}>{current}</button>
        <button style={{backgroundColor:'#27005D',color:'white',width:'60px',borderRadius:'7px',marginBottom:'6px'}} disabled={current=== 1} onClick={() => onChange(current + 1)}>Next</button>
      
    </div>
  )
}

export default Pagination
