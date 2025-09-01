//Singleton
// Object.create  This method is used to create a new object with the specified prototype object and properties.

// Object.create 

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//.........................ACCESS THE ELEMENT OF THE OBJECT.........................
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


//CHANGE THE VALUE OR OVERWRITE THE VALUE;
JsUser.email = "hitesh@chatgpt.com"


//TO LOCK THE OBJECT SO THAT NO ONE CAN ALTER OR MODIFIED IT.
// Object.freeze(JsUser)


//NOT CHANGE THE VALUE OF THE EMAIL BECAUSE WE FREEZE THE OBJECT ABOVE SO NO ONE CAN ALTER IT

JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);  //Don't change the value;


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());