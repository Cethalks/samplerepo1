// class Student{
//     name="Anu"
//     #marks=85

//     displayDetails(){
//         console.log("Name : ",this.name)
//         console.log("Marks : ",this.#marks)
//     }
// }
// let student1=new Student()
// console.log(student1.name)
// student1.displayDetails()

// class Employee
// {
//     name="Rahul"
//     #salary=25000


// displayDetails()
// {
// console.log("Name :",this.name)
// console.log("Salary :,this.#salary)

// }}

// class BankAccount{
//     #balance=1000
//     getBalance(){
//     return this.#balance
// }

// deposit(amount){
//     if(amount>0){
//        this.#balance=amount+this.#balance
//     }
// }
// }
// let account=newBankAccount()
// account.deposit(500)
// console.log(account.getBalance())


// class BankAccount{
//     #balance=1000
//     getBalance(){
//         return this.#balance
//     }
//     deposit(amount){
//         if(amount>0){
//             this.#balance=amount+this.#balance
//         }
//     }
// }
// let account=new BankAccount()
// account.deposit(500)
// console.log(account.getBalance())
// //account.deposit(500)
// //console.log(account.getBalance())

/*class Employee
{
    #salary=20000
    getSalary()
    {
        return this.#salary
    }
}
let obj=new Employee()
obj.updateSalary(2500)
console.log(obj.getSalary())*/

// class Employee{
//     #salary=20000
//     getSalary(){
//         return this.#salary
//     }
//     updateSalary(amount){
//         if(amount>0){
//             this.#salary=amount+this.#salary
//         }
//     }
// }
// let obj=new Employee()
// obj.updateSalary(2500)
// console.log(obj.getSalary())

// class Animal{
//     sound(){
//         console.log("Anmal makes a sound")
//     }
// }
// class Dog extends Animal{
//     sound(){
//         console.log("Dog barks")
//     }
// }
// class Cat extends Animal{
//     sound(){
//         console.log("Cat meows")
//     }
// }

// let dog1=new Dog()
// let cat1=new Cat()

// dog1.sound()
// cat1.sound()

// class Payment{
//     pay(){
//         console.log("Making a Payment")
//     }
// }
// class UPI extends Payment{
//     pay(){
//         console.log("Payment done using UPI")
//     }
// }
// class CreditCard extends Payment{
//     pay(){
//         console.log("Payment done using CreditCard")
//     }
// }

// let upi1=new UPI()
// let creditcard1=new CreditCard()

// upi1.pay()
// creditcard1.pay()

//---------------

class Notification
{
send()
{
    console.log("Sending a notification")
}
}
class Email extends Notification{
    send(){
        console.log("notification send through Email")
    }
}
class SMS extends Notification{
    send(){
        console.log("notification send through SMS")
    }
}
let email1=new Email
let sms1=new SMS
email1.send()
sms1.send()
