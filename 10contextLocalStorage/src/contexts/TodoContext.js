import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Note",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    editTodo: (id, todo) => {},
    removeTodo: (id) => {},
    toggleComplete: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}