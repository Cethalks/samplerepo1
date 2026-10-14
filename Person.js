class person{
    speak(){

console.log("person can speak")
}}

class Student extends person{
    study(){
        console.log("Student is studying")
    }
}
class collegeStudent extends Student{
    attendClass(){
        console.log("college student is attending class")
    }
}
let obj = new collegeStudent()
obj.speak()
obj.study()
obj.attendClass()