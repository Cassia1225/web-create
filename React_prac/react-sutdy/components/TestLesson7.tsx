export function TestLesson7() {
    let isLogin:boolean = false;
    let content;

    function ChangeFlag() {
        if (isLogin) {
            isLogin = false;
        } else {
            isLogin = true;
        }
    }

    if (isLogin) {
        content = <h2>ようこそ</h2>
    } else {
        content = <button onClick={ChangeFlag}>ログイン</button>
    }

    return(
        <div>
            {content}
        </div>
    );

}