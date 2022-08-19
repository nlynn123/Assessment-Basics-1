

let password = "BB8!"
let number = /[0-9]/
let letters = /[a-z]/
let Uppercaseletters = /[A-Z]/

if(password.length>=10 && password.length<=20){
    console.log("success")
}
else console.log("failure")

if(password.match(number)){
    console.log("success")
}
else console.log ("failure")

if(password.match(letters)){
    console.log("success")
}
else console.log ("failure")

if(password.match(Uppercaseletters)){
    console.log("success")
}
else console.log ("failure")