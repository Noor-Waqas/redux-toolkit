import { createSlice ,nanoid } from "@reduxjs/toolkit";

// const initialState = {
//     todos:[{id:"", text:""}]
// }

  const todoSlice = createSlice({
    name:'todo',
    initialState:{ todos:[]},
    reducers:{
        addTodo: (state, action) => {
        const todo = {
        id: nanoid(), 
        text: action.payload
        }
        state.todos.push(todo)
        },// is me to cheez mily gi 

        removeTodo:(state,action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload) // jo id di usy match mat kro baki sb ly a oh
        },
     
     
          updateTodo: (state, action) => {
            const { id, newData } = action.payload;
           const updateData= state.todos.find((todo) => todo.id === id);
            if (updateData) {
                updateData.text = newData;
            }
            },
    }// is me properties or funcation aty hai
})
// // sab funcationality export kry gy
export const {addTodo,removeTodo,updateTodo,startEdit} = todoSlice.actions
export default todoSlice.reducer

