import React from 'react'
import { useState } from 'react'
function TodoForm({addTodo}) {

    const [input, setInput] = useState()

    function handleSubmit (e) {
        e.preventDefault()
        addTodo(input)
        setInput("")
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            <input value={input} onChange={(e) => setInput(e.target.value)} className='todo-input' type="text" placeholder='Add a todo...' />
            <button type='submit' className='todo-button'>Add Todo</button>
        </form>
    )
}

export default TodoForm
