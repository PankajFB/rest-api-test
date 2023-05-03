const express = require("express");
const user = require("./MOCK_DATA.json");
const bodyParser = require("body-parser");
const fs = require("fs");


const app = express();
app.use(bodyParser.urlencoded({ extended: false }))


// to get all the users in the json file
app.get("/", (req, res) => {
  res.send(user);
});

app.post("/", (req, res)=>{

    // always make sure to not send space in the body it will give error
    const body = req.body;
    user.push({...body, id: user.length+1});
    fs.writeFile("MOCK_DATA.json", JSON.stringify(user), (err)=>{
        console.log(err)
    })
    // console.log(name, origin)
    // res.send("Post method called")
    res.json(user);
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
