import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World"}],
}

export const todoSlice=createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo={
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo: (state, action)=>{
            const index=state.todos.findIndex((todo)=>todo.id===action.payload)
            state.todos[index].text=action.payload
        }
    }
})

export const{addTodo, removeTodo, updateTodo}=todoSlice.actions

export default todoSlice.reducer