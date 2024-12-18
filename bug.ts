function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); // This will result in an error because the function expects a single string, but an array is passed as argument