let totalamount=1000
let finalamount;
let today=new Date().getDay()

switch(today){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        finalamount=totalamount-(totalamount*0.1)
        console.log("Discount of 10% Applied Successfully")
        break
    case 0:
    case 6:
        finalamount=totalamount
        console.log("Sorry No Discounts On Weekends")
        break
    default:
        console.log("Invalid Day")
}

    console.log(`Total Amount: ${totalamount} Rs`)
    console.log(`Final Amount to Pay: ${finalamount} Rs`)
    
    