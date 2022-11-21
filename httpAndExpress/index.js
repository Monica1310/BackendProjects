const http = require("http");
const fs = require("fs")

const server = http.createServer((req, res) => {

  
  // res.write("hello"); //sever will run upto 300sec if end not given
  // res.end("world") // cannot write after end


  // //wrt the url
  //   if (req.url == "/home") {
  //     return res.end("the home page");
  //   }


    //to read a text file
    //1.sync 
    // if(req.url === "/file"){
    //   const data = fs.readFileSync("./data.txt",{encoding:"utf-8"})

    //   return res.end(data)
    // }

    //2.async way

    // fs.readFile("./data.txt",{encoding:"utf-8"},(err,data) => {
    //   if(err){
    //     console.log("err occured in reading file")
    //   }
    //   res.end(data)
    // })



    //reading a html file

    res.setHeader("content-type","text/html")

    fs.readFile("./index.html",{encoding:"utf-8"},(err,data)=>{
      res.end(data)
    })



});

server.listen(8080, () => {
  console.log("server started on localhost:8080/");
});
