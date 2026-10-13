let id: string | number;

id = 10;
id = "A001";

function printId(id: string | number): void {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else
    {
        console.log(id);
    }
}

let message: string | null = null;
let value: string | number | boolean;

value = "hello";
value = 100;
value = true;