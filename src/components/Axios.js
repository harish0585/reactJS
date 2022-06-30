import axios from "axios";
import { useEffect, useState } from "react";

export const Axios = () => {

    const [title, setTitle] = useState("");
    const [todo, setTodo] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const [error, setIsError] = useState(false);
    
    useEffect(() => {
        getTodo()
    }, [])

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const getTodo = async () => {
        const {data} = await axios.get("http://localhost:8000/tasks");
        setTodo(data);
    }

    const addTodo =  async () => {
        if(title.length===0)
        return 
        let payload = {
            title, 
            status: false
        }
        let res = await axios.post('http://localhost:8000/tasks', payload)
        getTodo();
        setTitle("");
    }

    const deleteTodo = async(id) => {
        let res = await axios.delete(`http://localhost:8000/tasks/${id}`)
        getTodo()
    }

    const toggleTodo =  async(id) => {
        let payload;
        for(let i=0; i<todo.length; i++)
        {
            if(todo[i].id === id)
            {
                payload = {...todo[i], status: !todo[i].status}
            }
        }
            await axios.put(`http://localhost:8000/tasks/${id}`, payload)
            getTodo()
    }

    return (
        <>
        <input type="text" placeholder="Enter text" onChange={handleChange} VALUE={title} />
        <button onClick={addTodo}>Add Todo</button>
        {todo.map((item) => (
            <div key = {item.id}>
                <div>{item.title}</div>
                <div>{`${item.status}`}</div>
                <button onClick={() => deleteTodo(item.id)}>Delete</button>
                <button onClick={() => toggleTodo(item.id)}>Toggle</button>
            </div>
        ))}  
        </>
    )
}

// json-server --watch db.json --port 8000