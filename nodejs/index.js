let a = require('./module.js')
//console.log(a.World(), a.Person('Mary Doe!'))

let http = require('http')

http.createServer(function(req,res){
  res.write("Hello World!")
  res.end()
}).listen(8080)