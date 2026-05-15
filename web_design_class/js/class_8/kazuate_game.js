n = Math.floor(Math.random() * 10);
flag = false;
count = 3;

function check() {
    if (flag == ture) return;
    ans = document.gameForm.Num.value;

    if (n == ans) {
        alert("正解");
        flag = true;
    }
    else {
        alert("不正解");
    }

    count -= 1;

    if (count == 0) {
        alert("正解は" + n + "でした。");
        flag = true;
    }
}