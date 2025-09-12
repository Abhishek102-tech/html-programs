let username=document.getElementById("username").value;
let pass=document.getElementById("password").value;

document.getElementById("create Account").addEventListener("click",function(){
    if(username=="" || pass==""){
        alert("Please fill all the details");
    }
    else{
        alert("Account created successfully");
    }
});

let users = [];

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "" || password === "") {
        alert("Please fill all the details");
        return;
    }   
    let user = { username: username, password: password };
    users.push(user);
    console.log("User logged in:", user);
    alert("Login successful");
    document.querySelector("form").reset();
});