// プレロードする画像のパスにもフォルダの場所を追加します
prImage1 = new Image();
prImage1.src = "./../../image/number_folder/1.gif"; // 1以外も同様に修正

prImage2 = new Image();
prImage2.src = "./../../image/number_folder/2.gif"; 

prImage3 = new Image();
prImage3.src = "./../../image/number_folder/3.gif";

prImage4 = new Image();
prImage4.src = "./../../image/number_folder/4.gif";

prImage5 = new Image();
prImage5.src = "./../../image/number_folder/5.gif";

prImage6 = new Image();
prImage6.src = "./../../image/number_folder/6.gif";

prImage7 = new Image();
prImage7.src = "./../../image/number_folder/7.gif";

prImage8 = new Image();
prImage8.src = "./../../image/number_folder/8.gif";

prImage9 = new Image();
prImage9.src = "./../../image/number_folder/9.gif";

count = 0;
gameFlag = false;

function startGame() {
    count = 0;
    gameFlag = true;
    Game();
}

function Game() {
    n = Math.floor(Math.random() * 10); //ここで1~9の値を作成してnに代入

    document.images["Num"].src = "./../../image/number_folder/" + n + ".gif"; //Numというname属性をもつimageのsrcを変更
    dateObj = new Date();
    startSec = dateObj.getTime();
}

function keyCheck(e) {
    if (gameFlag == false) return;
    
    k = e.keyCode - 48;
    
    if (k == n) {
        n = Math.floor(Math.random() * 10);
        // ここも同様にフォルダのパスを追加します
        document.images["Num"].src = "./../../image/number_folder/" + n + ".gif";
        count = count + 1;
        
        if (count == 20) {
            dateObj = new Date();
            endSec = dateObj.getTime();
            time = endSec - startSec;
            time = time / 1000;
            alert("ゲームオーバー:" + time + "秒");
            gameFlag = false;
        }
    }
}