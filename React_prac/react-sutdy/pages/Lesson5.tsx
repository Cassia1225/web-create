import { useState } from "react";

export function Lesson5() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    return(
        <>
            <input type="text" value={name} onChange={((e) => {
                setName(e.target.value);
            })}/>
            <input type="text" value={age} onChange={((e) => {
                setAge(e.target.value);
            })} />

            <h2>名前：{name}</h2>
            <h2>年齢：{age}</h2>
        </>
    );
}