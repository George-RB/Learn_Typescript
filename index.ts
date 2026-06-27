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

//     // SIMPLE 
// let numbers: number[] = [1,2,3,4,5];
// console.log(numbers);

// let fruits: string[] = ['apple','banana','pineapple','melon'];
// console.log(fruits);

// let flags: boolean[] = [true, true, false];
// console.log(flags);

//     // GENERICS

// let fruitsG: Array<string> = ['apple','banana','pineapple','melon'];
// let numbersG: Array<number> = [1,2,3,4,5];
// console.log(fruitsG, numbersG);

// ARRAY END

// ----------------------------------------------

// READONLY ARRAYS START
// Если массив не должен изменяться — используй readonly

// const colors: readonly string[] = ['red', 'orange', 'green']
// console.log(colors[1])

// READONLY ARRAYS END

// ----------------------------------------------


// TUPLE START
// Кортеж — это массив фиксированной длины, где каждый элемент имеет свой тип.

// let user: [string, number, boolean] = ['Alex', 18, true]
// console.log(user[0])
// console.log(user[1])
// console.log(user[2])

// TUPLE END

// ----------------------------------------------

// UNKNOWN START

let value: unknown = 'Hello';
value = 42;
value = true;

typeof value === 'string' ? console.log(value) : console.log('Type isn`t STRING')


// UNKNOWN END
