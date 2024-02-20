 import './App.css'
import Todo from './compnentx/Todo'
import AddTodo from './compnentx/addTodo/AddTodo'

function App() {
  return (
   <>
   <h1 className='p-4 text-4xl text-white'>Todu Project</h1>
   <AddTodo/>
   <Todo/>
   
   </>
  )
}

export default App
