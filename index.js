let express = require("express")

//We are creating an express app
let app = express();

app.get("/", function(request, response){
    console.log("got a request of /")
    response.send("hello world")
})

let port = 3000
app.listen(port, function(){
    console.log(`I am listening at port ${port}`)
})