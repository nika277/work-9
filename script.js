let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
 sum += numbers[i];
}
console.log(sum);
let people = [
    { name: "Alice", age: 25, address: "282 Tbilisi" },
    { name: "Bob", age: 30, address: "456 Tbilisit" },
    { name: "Charlie", age: 35, address: "78 Tbilisi" }
];
console.log(
    "My name is " + people[0].name,
    "My age is " + people[0].age,
    "My address is " + people[0].address
);
let people = [
    { name: "Alice", age: 25, address: "123 Main St" },
    { name: "Bob", age: 30, address: "456 Elm St" },
    { name: "Charlie", age: 35, address: "789 Pine St" }
];
if (people[1].age < 19) {
    console.log("I am a teenager");
} else {
console.log("I am an adult");
}
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
console.log(numbers[i]);
}
