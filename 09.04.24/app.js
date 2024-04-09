"use strict"


let users = [{
    id: 1,
    name: "Ilahe",
    age: 21,
},

{
    id: 2,
    name: "Aydan",
    age: 20,
},

{
    id: 3,
    name: "Zehra",
    age: 14,
},




{
    id: 4,
    name: "Ferid",
    age: 33,
},]

let checkAge = 30

const checkOldUser = (users, age) => {
    let oldUser = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age < age) {
            continue;
        }
        oldUser.push(users[i]);

    }
    return oldUser
}
const checkYoungUser = (users, age) => {
    let youngUser = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= age) {
            continue;
        }
        youngUser.push(users[i]);

    }
    return youngUser
}

const writeConsole = (callback, str) =>{
    console.log(str);
    for (let i =0 ; i < callback.length; i++ ) {
      let users= callback[i];
      console.log('  username: ${user.name}, age: ${user.age}');
    }
    }
writeConsole(checkOldUser(users, checkAge), '${checkAge} - den boyukler');
writeConsole(checkYoungUser(users, checkAge), '${checkAge} - den kicikler');


const checkAbDe = (number) => {
    let count = 1;
    let sum = 0;

    while (count < number) {
        if (number % count === 0) {
            sum += count;
        }
        count++;
    }
    if (sum < number) {
        console.log("Def num");

    } else if (sum === number) {
        console.log("Equal num")
    } else {
        console.log("Ab num")
    }
};
let num = Number(prompt("Enter number"));
checkAbDe(num);


let sumOdd = 0;
let sumEven = 0;

for (let i = 1; i <= 500; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}

let sub = sumEven - sumOdd;
console.log('SumEven-${sumEven}, SumOdd-{sumOdd}');
sub >0 ? console.log("Positive") : console.log("Negative")





































