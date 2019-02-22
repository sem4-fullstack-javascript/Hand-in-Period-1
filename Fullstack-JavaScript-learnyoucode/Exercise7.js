var http = require("http")

http.get(process.argv[2], callback)

function callback(response) {
    return response.setEncoding("utf8").on("data", (data) => console.log(data))
}