var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], (err, list) => {
    if (err) {
        throw new Error(err)
    }
    list.filter(x => path.extname(x) === `.${process.argv[3]}`).forEach(x => console.log(x))
})