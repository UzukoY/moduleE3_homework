function getSumFunction(a) {
    return function(b) {
        return a + b
    }
};

const sumFunction = getSumFunction(5);

const sum = sumFunction(7)

console.log(sum);