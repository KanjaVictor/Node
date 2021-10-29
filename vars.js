//Variables in a block scope can be accessed outside, in fucntion scopes they can't.

//This is solved by using let, const instead of var.
{
    //Block scope
    {
        //Nested Block scope
    }
}

if(true){
    //Block scope
}

for(var i = 1; i <= 10; i++){
    //Block scope
}

function sum (a, b) {
    //Function scope
    var result = a + b;
}

sum(1 + 2);

//Scalar values
const answer = 42;
const greeting = 'Hello';

//Arrays and Objects
const numbers = [2,4,6];
const person = {
    firstName: 'John',
    lastName: 'Doe'
}