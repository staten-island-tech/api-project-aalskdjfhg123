import { dom } from "./dom"
let currentDate = new Date();

let currentYear = currentDate.getFullYear();

let currentMonth = currentDate.getMonth();


export async function nextHolidays(){
    const slop = await fetch("https://date.nager.at/api/v3/NextPublicHolidays/US")
    const data = await slop.json()
    console.log(data)
    document.querySelector("h1").innerHTML = `${data[0].date} ${data[0].localName}` 

    
 }
