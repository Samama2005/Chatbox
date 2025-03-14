import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <h4>Todos</h4>
    <table className="w-full text-left rounded-lg">
    <ul className="list-none">
        {todos.map((todo) => (
          <li
          className="mt-4 flex justify-between items-left bg-zinc-800 px-4 py-2 rounded"
          key={todo.id} > {todo.text}
         &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          <button 
           onClick={() => dispatch(removeTodo(todo.id))}
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
          > delete </button>
        </li>
        ))}
      </ul>
      </table>
    </>
  )
}

export default Todos