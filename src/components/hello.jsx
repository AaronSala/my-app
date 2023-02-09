import { useState } from "react";

const Hello =()=>{
    const [counter, setCounter] =useState(1)
    return (
        <div>
            <h1>Hello ninjas!!!</h1>
            <h1>My counter is at {counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>Increase counter</button>
            <button onClick={()=>setCounter(counter-1)}>Reduce counter</button>
        </div>
    )
}

export default Hello;