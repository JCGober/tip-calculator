// Set up Express
const express = require("express")

const app = express()

const PORT = 5000

// Static Serve
app.use(express.static('public'))

// Server Listen
app.listen(PORT, function(){

    console.log("Working server: http://localhost:" + PORT)
})


