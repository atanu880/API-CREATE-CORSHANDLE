// async function api(){
//     let data = await fetch("http://localhost:5000")  //getting data in the form of Array
//     let finalData = await data.json()
//     console.log(finalData)
// }
// api()


// access the api json data from separate port number like server.js to index.js

let div=document.querySelector("div"); 
let output="";
async function api(){
    let data = await fetch("http://localhost:5000")  
    let finalData = await data.json()
   finalData.forEach(emp =>{
        output+=`<h1>${emp.ename} ${emp.esal}</h1>`
        
    });
     console.log(output);
    div.innerHTML=output;
}
api()