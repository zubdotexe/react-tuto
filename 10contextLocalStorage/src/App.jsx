import { useEffect, useState } from "react";
import { TodoContextProvider } from "./contexts";
import {TodoForm, TodoItem} from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {id: Date.now(), ...todo}])
  }

  const editTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => {return prevTodo.id === id ? todo : prevTodo}))
  }

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    // as long as we are on client side, we can access localStorage, if it's on server then, we can't do anything about it

    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  return (
    <TodoContextProvider value={{todos, addTodo, editTodo, removeTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto  rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              // key use na korle performance future e onek degrade korbe
              <div key={todo.id}
              className="w-full">
                {/* index dile kichu pitfall ache */}
                <TodoItem todo={todo} />
              </div>
            ))} {/* map er bhitor {} use korle explicitly return kora lagto */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
