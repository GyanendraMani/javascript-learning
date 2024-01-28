// let myName = "Gyan     "
// let mychannel = "ji     "

// console.log(myName.trueLength);


let user = {
    firstName: "Gyanendra",
    lastName: "Mishra",
    getFullName: function () {
        return `Full Name is ${this.firstName} ${this.lastName}`
    }
}

let myHeros = ["thor", "spiderman"]


// console.log("printing users", user.getFullName());

// *****************if want make available on prototype in all objects
Object.prototype.gyan = function () {
    return (`Gyan is available`)
}


//console.log(user.gyan());
// ***************** javascript is totaly basesd on object because of that gyan is available for array, strings functions etc
//console.log(myHeros.gyan());

Array.prototype.heyGyan = function () {
    return ("Gyan is telling Hi!");
}

// console.log(myHeros.heyGyan());
// **************** here heyGyan will Not available for Objects and othere it available for only arrays.
// console.log(user.heyGyan());


/*** Object Prototypal Inheritance ***/

let employee = {
    name: "Gyan",
    email: "gyan@gmail.com"
}

let teacher = {
    makeVideo: true
}

let teachingSuport = {
    isAvailable: false
}

let TAsupport = {
    makeAssignment: "Js Assignment",
    fullTime: true,
    __proto__: teachingSuport
}

teacher.__proto__ = employee

console.log(TAsupport.isAvailable)
console.log(TAsupport.__proto__)

Object.setPrototypeOf(teachingSuport, teacher)

let anotherUsername = "mai aur code     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}


anotherUsername.trueLength()