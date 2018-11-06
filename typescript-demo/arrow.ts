function printHello(){
    console.log(`Hello`);
};

var printHelloAnanymous = function() {
    console.log('Hello');
};

printHello();
printHelloAnanymous();

let user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function(){
        return ()=>{
            console.log(`The Fullname of this user is : ${this.firstName} ${this.lastName}`);
        }
    }
}

user.getFullName()();