// const express = require("express");
// const app = express();
// console.dir(app);
// let port = 8080;
// app.listen(port,()=>{
//     console.log(`app is listening on port  ${port}`);
// })


// const express = require("express");
// const app = express();
// console.dir(app);
// let port = 8080;
// app.listen(port,()=>{
//     console.log(`app is listening the port ${port}`);
// });

// // app.use((req,res) =>{
// //     // console.log(res);
// //     console.log("request recieved");
// //     // res.send( {
// //     //     name:"apple",
// //     //     color:"red",
// //     // });
// //     // let code = "<h1>Fruits</h1><ul><li>Apple</li><li>mango</li></ul>";
// //     // res.send(code); 
// //     let info = {
// //         name:"Aryan Arya",
// //         age:20,
// //         marks:94.4,
// //         teacher:"Shradha Khapra",
// //         website:"Apna College",
// //         learning:"WebDevlopment + MERN",
// //     };
// //      res.send(info);
// // })

// app.get("/",(req,res)=>{
//     res.send("hello i am root path");
// });


// app.get("/:username/:id",(req,res)=>{
//     // console.log(req.params);
//     // res.send("hello i am root path");
//     let = {username,id}=req.params;
//     // res.send(`welcome to the page of @${username}`);
//     let htmlstr = `<h1>welcome to the page of @${username}</h1>`
//     res.send(htmlstr);
// });
// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path");
// });
// app.get("/mango",(req,res)=>{
//     res.send("you contacted mango path");
// });
// // app.get("*",(req,res)=>{
// //     res.send("this page doesn't exist");
// // });
// app.post("/",(req,res)=>{
//           res.send("you send a post request to root");
//       });

//                     query 

// app.get("/search",(req,res)=>{
//     let {q} =req.query;
//     if(!q){
//         res.send("<h1>Nothing Searched</h1>")
//     }
//     res.send(`<h1>search results of the query ${q}</h1>`);
// });


let express = require("express");
let app = express();
console.log(app);
let port = 8080;
app.listen(port,()=>{
    console.log(`app is listening to the port ${port}`);    
});

app.get("/",(req,res)=>{
    res.send("hello i am a root path");
});
app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    let htmlstr = `<h1>welcome to the page of @${username} </h1>`
    res.send(htmlstr);
})


app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("<h1>Nothing Searched</h1>");
    }
    res.send(`<h1>searched result for ${q}</h1>`)
})

 
