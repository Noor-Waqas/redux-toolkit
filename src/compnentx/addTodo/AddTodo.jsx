import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../feature/todo/todoSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTodo = () => {
    const [input,setInput] =useState('') 
    const [notification,setNotification] = useState("")
    const dispatch = useDispatch()// data add ko krna k liye used hota hai //
    
    const addTodoHandler = (e) => {
        e.preventDefault()
        const inputdata = input.trim()
        if (inputdata) {
            dispatch(addTodo(inputdata))// dispatch reduser ko used krty ho store me data store krta hai
            setInput("")
            toast.success('Add Items Successfully!');
            setNotification("")
          }
        else {
          setNotification("Please Enter The Items")
        }
    }
    
  return (<>
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <div className='flex justify-center gap-2'>
   <div className='flex '>
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    
    </div>
    <div>
    <button
      type="submit"
      className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
    >
      Add List
    </button>
    </div>
    </div>
    <p>{notification}</p>
  </form>
  <ToastContainer/>
  </>
  )
}

export default AddTodo