prImage0 = new Image(); prImage0.src = "./../../image/number_folder/0.gif";
prImage1 = new Image(); prImage1.src = "./../../image/number_folder/1.gif";
prImage2 = new Image(); prImage2.src = "./../../image/number_folder/2.gif"; 
prImage3 = new Image(); prImage3.src = "./../../image/number_folder/3.gif";
prImage4 = new Image(); prImage4.src = "./../../image/number_folder/4.gif";
prImage5 = new Image(); prImage5.src = "./../../image/number_folder/5.gif";
prImage6 = new Image(); prImage6.src = "./../../image/number_folder/6.gif";
prImage7 = new Image(); prImage7.src = "./../../image/number_folder/7.gif";
prImage8 = new Image(); prImage8.src = "./../../image/number_folder/8.gif";
prImage9 = new Image(); prImage9.src = "./../../image/number_folder/9.gif";

// 3つのスロットの状態を管理する変数
timer1 = null; timer2 = null; timer3 = null; 
num1 = 0; num2 = 0; num3 = 0; 
stopCount = 0; // 止めたボタンの数


function startGame() {
    if (timer1 != null || timer2 != null || timer3 != null) return;
    
    stopCount = 0; // 止めた数をリセット
    
    // 0.1秒ごとに画像を切り替えるタイマーを3つ同時にスタート
    timer1 = setInterval(function() { changeImage(1); }, 100);
    timer2 = setInterval(function() { changeImage(2); }, 100);
    timer3 = setInterval(function() { changeImage(3); }, 100);
}


function changeImage(slotNo) {
    let n = Math.floor(Math.random() * 10); // 0〜9の乱数
    
    // 引数で受け取った番号(1〜3)の画像を書き換える
    document.images["Num" + slotNo].src = "./../../image/number_folder/" + n + ".gif";
    
    // 最終的な判定のために現在の数字を変数に保存しておく
    if (slotNo == 1) num1 = n;
    if (slotNo == 2) num2 = n;
    if (slotNo == 3) num3 = n;
}

//ボタンを押して数字を止める
function stopNum(slotNo) {
    
    if (slotNo == 1 && timer1 != null) {
        clearInterval(timer1); 
        timer1 = null;         
        stopCount++;           
    }
    if (slotNo == 2 && timer2 != null) {
        clearInterval(timer2);
        timer2 = null;
        stopCount++;
    }
    if (slotNo == 3 && timer3 != null) {
        clearInterval(timer3);
        timer3 = null;
        stopCount++;
    }

    if (stopCount == 3) {
        setTimeout(checkResult, 100); 
    }
}

function checkResult() {
    if (num1 == num2 && num2 == num3) {
        alert("ビンゴ！");
    } else {
        alert("残念！");
    }
}