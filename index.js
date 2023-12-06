const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

const PORT = 8001;

 

app.get("/testing", (req,res)=>{
    res.send("Calculator API");
});


// params
app.get("/add/:num1/:num2", (req,res)=>{
    const num1 = Number(req.params.num1) ;
    const num2 = Number(req.params.num2);
    const sum = (num1) + (num2);

    res.send(`Sum is- ${sum}`);
});

// query
app.get("/subtract", (req,res)=>{
    const num1 = Number(req.query.num1) ;
    const num2 = Number(req.query.num2);
    const subtract = (num1) - (num2);

    res.send(`subtract is- ${subtract}`);
});

app.post("/multiply", (req,res)=>{
    const {num1, num2} = req.body;
    const multiply = num1 * num2;

    res.send(`multiply is- ${multiply}`);
});

app.post("/division", (req,res)=>{
    const {num1, num2} = req.body;

    if(num2===0){
        return res.status(400).send("Err: Enter more than 0");
    }
    const division = num1 / num2;

    res.status(200).send(`division is- ${division}`);
});



app.listen(PORT, ()=>{
    console.log("Server is running at Port:", PORT);
}); 