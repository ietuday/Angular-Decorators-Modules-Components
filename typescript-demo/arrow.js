function printHello() {
    console.log("Hello");
}
;
var printHelloAnanymous = function () {
    console.log('Hello');
};
printHello();
printHelloAnanymous();
var user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        var _this = this;
        return function () {
            console.log("The Fullname of this user is : " + _this.firstName + " " + _this.lastName);
        };
    }
};
user.getFullName()();
