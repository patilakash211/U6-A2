const express = require('express');
const app = express();

app.get("/", (request,response,next) => {
        console.log("Hello");
        next();
    }
)
app.get('/books', (request,response,next) => {
    console.log("Hello");
    response.json({
        "book1":"The Story part-one",
        "book2":"The Story part-two",
        "book3":"The Story part-three",
        "book4":"The Story part-four"
    })
    response.send("success")
}
)

module.exports = app;