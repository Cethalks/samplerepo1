import { Company } from "./Company.js";

    class Developer extends Company
    {
        writecode(){
console.log("developer can write code")}
debug()

{
    console.log("Developer can debug the code")
}
        
       
    bugfix()
    {
        console.log("developer can fix bugs")
    }
}

    let obj = new Developer()
    obj.writecode()
    obj.debug()
    obj.bugfix()