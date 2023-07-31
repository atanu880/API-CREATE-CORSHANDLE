// insert many double api data get,
//insertone no data will get

const http=require("http")
// const fs=require("fs")
const {MongoClient} = require("mongodb")

const server=http.createServer((req,res)=>{

    let employess=[{
        "name":"Atanu12345",
        "sex":"malee"
    },
{
    "name":"rakshit12345",
    "sex":"malee"
},
{
    "name":"Shweta",
    "sex":"female"

}
]
  
           async function db(){
            let client=await MongoClient.connect("mongodb://127.0.0.1:27017")

            await client.db("UserDB").collection("user").insertMany(employess)   
            
        }
            db()
            res.end("data stored in mongodb11")

// res.end(JSON.stringify(employees)) //to convert JSON object to string
})
    
server.listen(5000,(err)=>{
    if(err)console.log(err);
    console.log("server running on port 5000");
})