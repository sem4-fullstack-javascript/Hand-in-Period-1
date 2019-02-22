var mymodule = require('./Exercise6Module.js')

var pathToFile = process.argv[2]
var ext = process.argv[3]

mymodule(pathToFile, ext, myfunction)

function myfunction(err, data) {
    if (err) {
        throw new Error(err)
    }
    console.log(data.join('\n'))
}