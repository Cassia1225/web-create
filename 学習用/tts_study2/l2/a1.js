const execute = (callback,value) => {
    console.log(callback(value));
};

execute((num) => {
    return num * 3;
},5);

