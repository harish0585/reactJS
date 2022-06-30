import { useState } from "react";
import {v4 as uuid} from "uuid";
import { TodoDisplay } from "./TodoDisplay";

export const Todo = () => {
    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);

    const handleChange = (e) => {
       setText(e.target.value);
    }

    const handleClick = () => {
      const payload = {
        title: text,
        id: uuid(),
        status: false
      }
      setTodo([...todo, payload])
    }

    const handleToggle = (id) => {
      const toggleTodo = todo.map((e) => 
      e.id === id ? {...e, status: !e.status}: e)
      setTodo(toggleTodo);
    }

    const handleDelete = (id) => {
      const deleteTodo = todo.filter((e) => e.id !== id )
      setTodo(deleteTodo);
    }

   return (
    <>
    <br/>
    <input type="text" onChange={handleChange} placeholder="Enter Text"/>
    <button onClick={()=>handleClick(text)}>Enter</button>
    <br/>
    {todo.map((e) => {
        return (
            <TodoDisplay 
            {...e}
            key={e.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            />
        )
    })}
    </>
   )
}