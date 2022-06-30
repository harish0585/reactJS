import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0);
    
    const handleAdd = () => {
      setCount(count + 1);
    }

    const handleSub = () => {
      if(count === 0)
      {
        setCount(count = 0);
      }
      else
      {
        setCount(count - 1);
      }
    }
    return (
        <>
        <div>Count:{count}</div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>Sub</button>
        </>
    )
}