import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../feature/todo/todoSlice'
import { DeleteOutlined,FormOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {
   const todos = useSelector(state => state.todos)// state ka access milta hai
   const dispatch = useDispatch() // funationality run krni ho to dispatch se krna hai
  //  const [edit, setEdit] = useState(null);

   const deleteHandleButton = (todo) => {
    dispatch(removeTodo(todo.id));
    toast.success('Items deleted successfully!');
  };
  

  const updateHandleButton = (todo) => {
    const newData = prompt("Enter Data:", todo.text);
  if (newData !== null) {
    dispatch(updateTodo({ id: todo.id, newData }));
    toast.success('Edit successful!');
  }
  }
  return (
  <>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <div className='flex gap-2'>
            <button
              onClick={() => updateHandleButton(todo)}
              className="text-white bg-green-500  border-0 py-2 px-3  focus:outline-none hover:bg-green-600 rounded text-md"
              >
              <FormOutlined />
            </button>
         
            <button
            //  onClick={() => dispatch(removeTodo(todo.id))}
            onClick={() => deleteHandleButton(todo)}
              className="text-white  bg-red-500 border-0 py-2 px-3  focus:outline-none hover:bg-red-600 rounded text-md"
              >
              <DeleteOutlined/>
            </button>

           
            </div>
         
          </li>
        ))}
      </ul>
      <ToastContainer />
    </>
   
  )
}

export default Todo