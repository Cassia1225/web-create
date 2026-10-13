import {useState, useEffect} from "react";

export function Lesson8() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`現在のcount : ${count}`);
    }, [count]);

    return (
        <>
        <h1>{count}</h1>
        <button onClick={() => {
            setCount((count) => count + 1);
        }}>
            追加
        </button>
        </>
        
    )
}