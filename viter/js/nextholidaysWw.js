import { dom } from "./dom";

export async function holidayWw(){
    const slop = await fetch("https://date.nager.at/api/v3/NextPublicHolidaysWorldwide")
    const data = await slop.json()
    data.forEach((holiday)=>console.log(holiday))
    data.forEach((holiday)=> document.querySelector("h1").innerHTML += `${holiday.localName}`)
}