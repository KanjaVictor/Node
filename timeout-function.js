const func = () => {
    console.log('Hello after 4 seconds');
};

setTimeout(func, 4 * 1000);

const person = who =>{
    console.log(who + 'welcome');
};

setTimeout(person, 2 * 1000, 'John Doe, ');