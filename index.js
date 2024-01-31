import axios from "axios";
import express from "express";

const app = express();
const port = 3001;
const url = "https://secrets-api.appbrewery.com/random";

app.use(express.static("public"));

app.get("/", async (req,res) =>{
    try{
        const result = await axios.get(url);
        res.render("index.ejs", {
            secret: result.data.secret,
            user: result.data.username
        });
    }catch(error){
        console.log(error.message);
    }
});

app.listen(port, () =>{
    console.log(`listening to port ${port}`);
})