/* ミニ課題：FizzBuzz
1から15まで順番に確認し、次の条件で表示してください。
- 3でも5でも割り切れる：FizzBuzz
- 3で割り切れる：Fizz
- 5で割り切れる：Buzz
- それ以外：数字をそのまま表示
最初の実行結果は次のようになります。
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz*/

for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}