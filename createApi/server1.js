//Api creation

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
res.end(JSON.stringify(employees))

}).listen(5000,(err)=>{
    if(err)console.log(err);


    console.log("server1 is running on port 5000");
})