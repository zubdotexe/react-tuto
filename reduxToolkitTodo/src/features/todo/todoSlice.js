import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [
    //     {
    //     id: 1,
    //     text: "hello world",
    // }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodos: (state, action) => {
            // console.log("setTodos", typeof action.payload, action.payload);
            state.todos = action.payload;
        },
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        editTodo: (state, action) => {
            const {id, text} = action.payload;
            // console.log(id, text);
            
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) todo.text = text;
        }
    }
})

export const {setTodos, addTodo, removeTodo, editTodo} = todoSlice.actions; // egular through te state update korbo

export default todoSlice.reducer; // store je shokol reducer theke value niye nijeke update korbe, shei reducer gular list dite hobe store ke