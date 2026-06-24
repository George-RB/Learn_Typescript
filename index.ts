// MODULE 1

// const message: string = "Hello, TypeScript!";
// console.log(message);

// function greet(name: string, age: number, isAdmin: boolean = false): string {
//     const status = isAdmin ? `I am is admin` : `I am not admin`

//     return `Hi, my name is ${name} and i am ${age} years old. ${status}`

// }

// console.log(greet("Alex", 24, false));

// MODULE 2
// ARRAY START

    // SIMPLE 
let numbers: number[] = [1,2,3,4,5];
console.log(numbers);

let fruits: string[] = ['apple','banana','pineapple','melon'];
console.log(fruits);

let flags: boolean[] = [true, true, false];
console.log(flags);

    // GENERICS

let fruitsG: Array<string> = ['apple','banana','pineapple','melon'];
let numbersG: Array<number> = [1,2,3,4,5];
console.log(fruitsG, numbersG);

// ARRAY END


