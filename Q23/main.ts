/*Q23:Conditional Tests: Write a series of conditional tests.
 Print a statement describing each test and your prediction for
  the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why 
each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True
 and another 5 tests evaluate to False.*/




let car:string = 'subaru';
//Test No1
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');


//Test No2
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

//Test No3
console.log("Is car != 'Honda'? I predict True.");
console.log(car != 'Honda');

//Test No4
console.log("Is car !== 'ford'? I predict True.");
console.log(car != 'ford');

//Test No5
console.log("Is car.upper case =='SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');

//Test No6
console.log("Is car =='SUBARU'? I predict false.");
console.log(car == 'SUBARU');


//Test No7
console.log("Is car === 'SUBARU'? I predict false.");
console.log(car === 'SUBARU');

//Test No8
console.log("Is car === 'Train'? I predict false.");
console.log(car === 'Train');

//Test No9
console.log("Is car === 'Bus'? I predict false.");
console.log(car === 'Bus');

//Test No10
console.log("Is car === 'cycle'? I predict false.");
console.log(car === 'cycle');

