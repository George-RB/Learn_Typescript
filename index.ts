// const message: string = "Hello, TypeScript!";
// console.log(message);

function greet(name: string, age: number, isAdmin: boolean = false): string {
    const status = isAdmin ? `I am is admin` : `I am not admin`

    return `Hi, my name is ${name} and i am ${age} years old. ${status}`

}

console.log(greet("Alex", 24, false));