import { dom } from "./dom"

export async function nextHolidays(){
    const slop = await fetch("https://date.nager.at/api/v3/NextPublicHolidays/US")
    const data = await slop.json()
   document.querySelector("h1").innerHTML = `${data[0].date} ${data[0].localName}` 
 }
