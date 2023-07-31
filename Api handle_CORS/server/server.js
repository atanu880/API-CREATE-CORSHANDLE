// creating api here and access from client index.js

const http=require("http")

http.createServer((req,res)=>{
    let employees=[{
        "ename":"miles morales",
        "esal":4000
    },
  {
    "ename":"peter parker",
    "esal":50000
   }
]
res.writeHead(200,"ok",{
    "content-type":"application/json",  //which type of data send like json type of data
    "Access-Control-Allow-Origin":"*"  //handle cors
})
res.end(JSON.stringify(employees))

}).listen(5000,(err)=>{
    if(err)console.log(err);
    console.log("server is running on port 5000");
})