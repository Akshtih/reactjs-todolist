import React from 'react'
import { useState } from 'react'

export default function TodoInput(props) {
    const {handleAddTodos , todoValue , setTodoValue} = props
    // const [todoValue, setTodoValue] = useState("")
    return (
    <header>
        <input placeholder='Enter Todo...' value={todoValue} onChange={(e) => {
            setTodoValue(e.target.value)
        }}/>
        <button onClick={() => {
            handleAddTodos(todoValue)
            setTodoValue("")
        }}>Add</button>
    </header>
  )
}
