require('dotenv').config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

let data = [];

app.post("/api/addTodo",(req,res)=>{
    const {todo} = req.body;
    console.log(todo)
    
    data.push({
        id: data.length +1,
        todo:todo
    });
    res.status(200).json({
        success: true,
        message: "Todo added successfully",
        data
    })
})

app.get("/api/get",(req,res)=>{
    res.status(200).json({
        message: "Data fetched successfully",
        data
    });
})

app.delete("/api/deleteTodo/:id",(req,res)=>{
    const {id} = req.params;
    console.log(typeof(id));
    try {
        data = data.filter(item => item.id !== parseInt(id));
        console.log(data)
        res.status(200).json({
            message: "Todo deleted successfully",
            data
        }); 
        
    } catch (error) {
        res.status(404).json({
            message: "Todo not found",
            error
        })
    }
})

app.put("/api/editTodo/:id",(req,res)=>{
    const {id} = req.params;
    const {todo} = req.body;

    const findTodo = data.findIndex(item => item.id === parseInt(id));
    if(findTodo !== -1){
        data[findTodo].todo = todo;
        res.json(data[findTodo]);
    }
    else{
        res.status(404).json({ message: 'Item not found' });
    }

})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})