import React from 'react'
import './Nodewrite.css'
const NoteWrite = (props) => {
  const deleteNode=()=>{
    props.deleteItem(props.id);
  }
  return (
    
    <div className='note'>
      
        <h5 >{props.title}</h5>
        <br/>
        <p  >{props.content}</p>
        <button >
            <img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"onClick={deleteNode} height={40} width={40} alt="" srcset="" />
            
        </button>
        </div>
      
   
    
  )
}

export default NoteWrite
