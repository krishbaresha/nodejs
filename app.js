// Node js is js runtime environment
/* 
Js se backend nahi ban skta qk js ke pas us wkt wo functionality nahi thi jis se hum backend bana ske 
tu us ne google chrome ke open source v8 engine ke sth thori cher char ki or js wrapper me c++ code likh k us me backend functionality add kr di
tu ab hum js se backend bna skte hain or yea kehlaya node js
*/
const fs = require('fs');
const https = require("https");

/*
write file ✅
append file ✅
read file ✅
copy file ✅
rename ✅
unlink ✅
*/


// fs.unlink("./Javascript/nodejs/hey.txt",(err)=>{
//     if (err) console.log(err.message);
//     else console.log("UNLINKING DONE");
// })

// fs.rm("./Javascript/Fundamentals", {recursive: true},(err)=>{
//     if (err) console.log(err.message);
//     else console.log("REMOVING DONE");
// })



// fs.writeFile("hey.txt","hey hello me krish hun",(err)=>{
//     if (err) console.error(err);
//     else console.log("done");
// })

// fs.readFile("Javascript/nodejs/hey.txt",'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.appendFile("hey.txt"," OR YEA FILE MENE APPEND KI HAI",(err)=>{
//     if (err) 
//         console.log(err);
//     else
//          console.log("File Appended successfully");
//         fs.readFile("hey.txt",'utf8', (err, data) => {
//             if (err) throw err;
//             else console.log(data, "OR yea function appended file ke andr hi chala hai ");
//         });  
    
// })

// fs.copyFile("E:/.JS.PY/Javascript/nodejs/hey.txt","E:/.JS.PY/heey.txt",(err)=>{
//     if (err) console.log(err.message);
//     else console.log("File Copied To Desired Location");  
// })

// const fs = require("fs");
// const path = require("path");

// const source = "E:/JS.PY/Javascript/nodejs/hey.txt";
// const destFolder = "E:/JS.PY/";

// // yahan basename se "hey.txt" nikalenge
// const fileName = path.basename(source);
// const dest = path.join(destFolder, fileName);

// fs.copyFile(source, dest, (err) => {
//   if (err) console.log(err.message);
//   else console.log("File Copied To Desired Location");
// });

// const fs = require("fs");
// const path = require("path");

// const source = "E:/.JS.PY/Javascript/nodejs/hey.txt";
// const destFolder = "E:/.JS.PY/";

// // Source ka filename nikal lo
// const fileName = path.basename(source);

// // Final destination bana lo
// const dest = path.join(destFolder, fileName);

// fs.copyFile(source, dest, (err) => {
//   if (err) console.log(err.message);
//   else console.log("File Copied To Desired Location:", dest);
// });

// fs.rename("E:/.JS.PY/Javascript/nodejs/Hello_2.txt","E:/.JS.PY/Javascript/nodejs/hey.txt",(err)=>{
//     if (err) {
//         console.log(err.message);
//     }
//     else console.log("RENAME DONE");
    
// })


// FOR MAKING FOlDER

//Sync way (turant bana dega) 

// fs.mkdirSync("myFolder");

// Async way (callback ke sath)

// fs.mkdir("./Javascript/myAsyncFolder", (err)=>{
//     if (err) console.log("ERROR:", err.message);
//     else console.log("✅ Folder created successfully");
    
// })

// fs.rm("./myAsyncFolder",{recursive: true},(err)=>{
//     if (err) {
//         console.log("Error", err.message);
        
//     } else {
//         console.log("✅ Successfully removed");
//     }
// })

// ⚡ Note: Agar folder pehle se exist hai to error aayega.
// Isko avoid karne ke liye:

// fs.mkdirSync("myFolder", { recursive: true });

// 👉 recursive: true matlab agar parent folders missing hain to wo bhi bana dega.


// Async
// fs.readdir("./Javascript/nodejs", (err, files) => {
//   if (err) console.log("❌ Error:", err.message);
//   else {
//     console.log("📂 Folder contents:", files);
//     fs.writeFile("./Javascript/nodejs/Temp.txt","IS FILE ME TEMP DATA HAI !!",(err)=>{
//         if (err) console.log(err.message);
//         else{
//             console.log("✅ CREATION DONE");
//             fs.readFile("./Javascript/nodejs/Temp.txt","utf-8",(err,data)=>{
//                 if (err) console.log("Error:",err.message);
//                 else console.log("✅ READING DONE: \n File Content:",data)
//             })
//         }
//     })
// }
// });


// Sync
// const files = fs.readdirSync("./Javascript");
// // console.log("📂 Folder contents:", files);

// const fs = require("fs");

// // 1. Make folder
// fs.mkdirSync("demo", { recursive: true });

// // 2. Write file
// fs.writeFileSync("demo/hello.txt", "Hello World!");

// // 3. Read folder
// const files = fs.readdirSync("demo");
// console.log("📂 Files inside demo:", files);

// // 4. Read file
// const data = fs.readFileSync("demo/hello.txt", "utf8");
// console.log("📄 File content:", data);
