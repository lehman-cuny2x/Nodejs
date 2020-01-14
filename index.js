let express = require("express")

//We are creating an express app
let app = express();

// "/" - routes

app.get(["/", "/home", "/hi"], function(request, response){
    console.log("got a request of /")
    response.send("home")
})

app.get("/helloworld", function(request, response){
    console.log("got a request of /")
    response.send("hello world")
})




//http://localhost:3000/hello gives error
app.get("*", function(request, response){
    console.log("got a request of /")
    response.status(404).send("Page not found")
})

let port = 3000
app.listen(port, function(){
    console.log(`I am listening at port ${port}`)
})