/* You have an array of user objects, each one has user.name. Write the code that converts it into an array of names. */

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let names = [];

for (i = 0; i < users.length; i++) {
    
    names[i] = (users[i].name);
}

alert( names ); // John, Pete, Mary