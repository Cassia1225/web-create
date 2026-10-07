import {useState} from "react";

export function Lesson7() {
    const [isVisible, setisVisible] = useState(false);

    return (
        <>
            <h1>Lesson7</h1>
            <h4>フラグを書き換えます。ボタンを押すとログインとそうでない状態が変わります。</h4>
            <button onClick={()=> {
                setisVisible((isVisible) => !isVisible);}}>

                {/*ここで、フラグごとにボタンの文字を変更している。*/}
                {isVisible ? "表示中" : "非表示中"}
            </button>
            {isVisible && <h2>こんにちは!</h2>}
        </>
    );
}