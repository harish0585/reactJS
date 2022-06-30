import { useEffect, useState } from "react"

export const Fetch = () => {
    const [query, setQuery] = useState("");
    const [list, setList] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const [error, setIsError] = useState(false);

    useEffect(() => {
        getTodo()
    }, [])

    const handleChange = (e) => {
       setQuery(e.target.value);
    } 

    const getTodo = () => {
        setIsLoading(true)
        fetch("http://localhost:8000/tasks")
        .then((res) => res.json())
        .then((res) => setList(res))
        .catch((err) => setIsError(true))
        .finally(() => setIsLoading(false));
    }

    const addTodo = () => {
        if(query.length===0)
        return 
        const payload = {
            title: query,
            status: false
        }
        fetch("http://localhost:8000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res => getTodo())
        .catch(err => setIsError(true))
        .finally(() => setIsLoading(false))
        setQuery("");
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:8000/tasks/${id}`, {
           method: "DELETE",
        })
        .then((res) => res.json())
        .then((res) => getTodo())
        .catch((err) => setIsError(true))
        .finally(() => setIsLoading(true))
    }

    const handleToggle = (id) => {
        let payload;
        for(let i=0; i<list.length; i++)
        {
            if(list[i].id === id)
            {
                payload = {...list[i], status: !list[i].status }
            }
        }
        fetch(`http://localhost:8000/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((res) => getTodo())
        .catch((err) => setIsError(true))
        .finally(() => setIsLoading(true))
    }

    return (
        <>
        <input type="text" placeholder="Enter text" value={query} onChange={handleChange} />
        <button onClick={addTodo}>Add Todo</button>
        {list.map((item) => (
            <div key ={item.id}>
            <div>{item.title} - {`${item.status}`}</div>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => handleToggle(item.id)}>Toggle</button>
            </div>
        ))}
        </>
    )
}