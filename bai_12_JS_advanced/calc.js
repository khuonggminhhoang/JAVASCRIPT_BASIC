const sum = (...args) => {
    return [...args].reduce((total, curVal) => {
        total += curVal;
        return total;
    }, 0);
}

const mul = (...args) => {
    return [...args].reduce((mul, curVal) => mul *= curVal, 1);
}

const sayHello = () => {
    console.log('function say hello!');
}

export {sum, mul as MUL};
export default sayHello;