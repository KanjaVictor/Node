const obj = {
    p1: 25,
    p2: 18,
    f1() {},
    f2: () => {},
}

//Destructuring 

//const PI = Math.PI;
//const E = Math.E;
//const SQRT2 = Math.SQRT2;

const {PI, E, SQRT2} = Math;

//console.log(PI);

const circle = {
    label: 'circleX',
    radius: 2,
}

const circleArea = ({radius}, {precision = 2} = {} ) => 
    (PI * radius * radius).toFixed(precision);

console.log(
    circleArea(circle)
);

console.log(
    circleArea(circle, {precision: 5})
);

//Rest

const[first, ...restOfItems] = [10,20,30,40];

console.log(restOfItems);

const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Doe',
};

const{temp1, temp2, ...person} = data;

console.log(person);