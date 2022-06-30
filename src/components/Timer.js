import { useEffect, useRef, useState } from "react"

export const Timer = () => {
    const [time, setTime] = useState(0);
    const ref = useRef();
    const [start, setStart] = useState(false);
    
    const handleStart = () => {
       if(start)
       {
        return
       }
       setStart(true);
       ref.current = setInterval(() => {
        setTime((time) =>  time+1)
       }, 1000)
    }

    const handlePause = () => {
       setStart(false);
       clearInterval(ref.current);
    } 

    const handleStop = () => {
       setStart(false)
       clearInterval(ref.current)
       setTime(0)
    }

    return (
        <>
         <br/>
        <div>Time:{time}</div>
       <button onClick={handleStart}>Start</button>
       <button onClick={handlePause}>Pause</button>
       <button onClick={handleStop}>Stop</button>
        </>
    )
}