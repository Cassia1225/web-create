function triple(num) {
    return num * 3;
}

function execute(callback, value) {
    const result = callback(value);
    console.log(result);
}

execute(triple, 5);