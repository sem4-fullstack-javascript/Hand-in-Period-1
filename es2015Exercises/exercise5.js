// A

function f(x, y, ...rest) {
    return (`Sum: ${x+y}
    ${rest.map((v,i) => `rest value ${i + 1} is a: ${v.constructor.name}`).join('\n')}`)
}

console.log(f(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {}));

// B

var rest = [true, 2, "hello World", [1, 2, 3], new Date(), {}];
var restParams = [...rest];
console.log(f(5, 2, ...restParams));

// C

let chars = [...f(5, 2, ...restParams)];
console.log(chars);