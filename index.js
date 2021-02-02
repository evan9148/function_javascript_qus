// const users = require("./users"); 
// console.log(users); 

// const fs = require("fs"); 
   
// // Read users.json file 
// fs.readFile("users.json", function(err, data) { 
      
//     // Check for errors 
//     if (err) throw err; 
   
//     // Converting to JSON 
//     const users = JSON.parse(data); 
      
//     console.log(users); // Print users  
// }); 



const fs = require("fs"); 
  
// STEP 1: Reading JSON file 
const users = require("./users"); 
   
// Defining new user 
let user = { 
    name: "New User", 
    age: 30, 
    language: ["PHP", "Go", "JavaScript"] 
}; 
   
// STEP 2: Adding new data to users object 
users.push(user); 
   
// STEP 3: Writing to a file 
fs.writeFile("users.json", JSON.stringify(users), err => { 
     
    // Checking for errors 
    if (err) throw err;  
   
    console.log("Done writing"); // Success 
}); 