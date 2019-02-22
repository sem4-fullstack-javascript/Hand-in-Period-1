module.exports = function f(x, y, ...rest) {
    return (`Sum: ${x+y}
    ${rest.map((v,i) => `rest value ${i + 1} is a: ${v.constructor.name}`).join('\n')}`)
}