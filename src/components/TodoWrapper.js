import React,{useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from "uuid";
uuidv4()

export const TodoWrapper = () => {

    const [todo,setTodo] = useState([])

    const addTodo = (todo) => {
        setTodo([...todo,{id : uuidv4(), task : todo,completed : false, isEditing : false}])
    }

  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo}/>
    </div>
  )
}
