const numbers = [10,20,30,40,50];

const result = numbers.find((number) => {
    return number >= 30;
})

console.log(result);

//順に処理していって、見つかった一つを出力して終わる

//filterはすべて、findは条件にあう最初の一つだけ