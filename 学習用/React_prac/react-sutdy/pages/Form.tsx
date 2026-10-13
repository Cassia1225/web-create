import {useState} from "react";

export function Form() {
    const [name,setName] = useState("");

    return(
        <>
            <input 
            type="text"
            value={name}
            onChange={(e) => {
                setName(e.target.value);
            }}
            />
            <p>
                入力内容：{name}
            </p>
        </>
        
    )
}