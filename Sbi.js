import {RBI} from "./Bank.js";

class Sbi extends RBI
{
deposit(){
    console.log("customer can deposite amount")
}
withdraw()
{
    console.log("customer can withdraw amount")
}
InternetBanking(){
    console.log("customer can use internet banking")
}
}
let obj = new Sbi()
obj.kyc()
obj.deposit()
obj.withdraw()
obj.InternetBanking()