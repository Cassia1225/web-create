const triple = (num) => {
    return num * 3;
};

const execute = (callback, num) => {
    console.log(callback(num));
};

execute(triple,5);