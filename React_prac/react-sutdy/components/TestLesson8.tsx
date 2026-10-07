import {useEffect, useState} from "react";

export function TestLesson8() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`countは${count}です。`);
    }, [count]);

    return(
        <>
        <h1>Lesson8</h1>
        <h2>{count}</h2>

        <button onClick={() => {setCount((count) => count + 1)}}>+1</button>
        </>
    );
}