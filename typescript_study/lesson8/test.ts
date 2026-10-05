function identity<T>(value: T): T {
    return value;
}

const a = identity<string>('hello');

function getFirst<T>(items: T[]): T {
  return items[0];
}

const firstNumber = getFirst([10,20,30]);

const firstName = getFirst(['Ayaka','Raiden']);

const scores: Array<number> = [80,90,100];

