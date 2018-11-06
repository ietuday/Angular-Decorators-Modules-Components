// class Person{
//     constructor(private firstName:string, private lastName:string, private age:number) {
//     }
//     getFullName(): string{
//         return `Full name : ${this.firstName} ${this.lastName}`;
//     }
//     protected getAge(): number{
//         return this.age;
//     }
// }
// let myPerson: Person = new Person('Udayaditya', 'Singh', 25);
// console.log(myPerson.getFullName());
// class Employee extends Person{
//     constructor(private id: number, firstName: string, lastName: string, age: number) {
//         super(firstName, lastName, age);
//     }
//     getAge(): number{
//         return super.getAge();
//     }
//     getFullName(): string{
//             return `The full name of the person is ${this.getFullName()}`
//     }
// }
// let manger: Person = new Employee(1, 'John', 'Doe', 25);
// console.log(manger.getFullName());
