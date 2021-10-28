const theOneFunc = when => {
    console.log('Hello after' +when+ 'seconds');

}

setTimeout(theOneFunc, 4 * 1000, 4);

setTimeout(theOneFunc, 8 * 1000, 8);