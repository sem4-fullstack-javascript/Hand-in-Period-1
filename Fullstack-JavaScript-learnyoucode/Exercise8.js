var http = require("http")

http.get(process.argv[2], callback)

function callback(response) {
    var count = 0
    var res = ''
    response.setEncoding("utf8")
    response.on("data", (data) => {
        count += data.length
        res += data
    })
    return response.on('end', () => {
        console.log(count)
        console.log(res)
    })
}