import React from 'react'
import {RiCloseCircleLine} from "react-icons/ri"
import {BiCheckCircle} from "react-icons/bi"

function TodoItem({item, removeTodo, completeTodo}) {
  return (
    <div className={item.completed ? "todo-row complete" : "todo-row"} >
      {item.text}
     <div className="iconsContainer">
     <RiCloseCircleLine className='icon'  style={{marginRight: "5px"}} onClick={()=> removeTodo(item.id)} />
     <BiCheckCircle onClick={() => completeTodo(item.id)} />
     </div>
    </div>
  )
}

export default TodoItem
