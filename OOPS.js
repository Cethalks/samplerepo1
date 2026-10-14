// create a student Class
/*
class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    study() {
        console.log(`${this.name} is studying ${this.course}`);
    }

    attendClass() {
        
        console.log(`${this.name} is attending class`);
    }
}

let student1 = new Student("Anu", 22, "JavaScript");
console.log(student1.name);
console.log(student1.age);
console.log(student1.course);
student1.study();
student1.attendClass();
*/
// question 2
/*let d = new Date();
console.log(d);

// question 3

class Employee { constructor(name, age, department) 
{ 
// Properties 
this.name = name; 
this.age = age; 
this.department = department; 
} 

work() {
 console.log(this.name + " is working");
 } 
// Method 
attendMeeting() { 
console.log(this.name + " is attending a meeting"); 
} }

let employee1 = new Employee("Rahul", 30, "Testing"); 
// Print employee details 
console.log(employee1.name); 
console.log(employee1.age); 
console.log(employee1.department); 

employee1.work(); 
employee1.attendMeeting(); 
*/

class Product {
    constructor(name, price, category)
     {
        this.name = name;
        this.category = category;
        this.price = price;
    }

    displayProduct() 
    {
        console.log(this.name + "is added to available")
    }
addToCart(){
   console.log(this.name + "is added to cart")
}}
    let product1 = new Product("Laptop", 50000, "Electronics");
    console.log(product1.name)
    console.log(product1.price)
    console.log(product1.category)

   product1.displayProduct()
    product1.addToCart()


  
