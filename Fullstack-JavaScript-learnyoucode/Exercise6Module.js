var fs = require('fs')
var path = require('path')

module.exports = function (dirpath, ext, cb) {
    ext = `.${ext}`

    function a(err, data) {
        if (err) {
            return cb(err)
        }
        var filtereddata = data.filter(x => path.extname(x) === ext)
        return cb(null, filtereddata)
    }
    fs.readdir(dirpath, a)
}