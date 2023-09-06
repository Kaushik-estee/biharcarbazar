import React,{useState} from 'react'

const Pagination = () => {
 
    const [page,setPage] = useState(1)
     
  return (
    <div>
        <button style={{backgroundColor:'gray',color:'white',width:'60px',borderRadius:'7px',marginBottom:'6px'}} disabled={page===1} onClick={()=>setPage(page-1)}>Prev</button>
        <button style={{backgroundColor:'white',color:'black',width:'40px',marginBottom:'6px'}}>{page}</button>
        <button style={{backgroundColor:'gray',color:'white',width:'60px',borderRadius:'7px',marginBottom:'6px'}} disabled={page===5} onClick={()=>setPage(page+1)}>Next</button>
      
    </div>
  )
}

export default Pagination
