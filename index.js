let express = require("express")

//We are creating an express app
let app = express();

let port = 3000
app.listen(port, function(){
    console.log(`I am listening at port ${port}`)
})