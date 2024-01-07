import { choice } from "./buttons";
import { dom } from "./dom";
import { months } from "./months";



let currentDate = new Date();

let currentYear = currentDate.getFullYear();

let currentMonth = currentDate.getMonth();

//date getting

let input = document.querySelector('.input')



    

export async function makeCalender() {
try {
    const slop = await fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${input.value}`)
    if(slop.status != 200){
        throw new Error(response.statusText)
    }  //get the api data

    const data = await slop.json() 

    dom.dates.innerHTML = ""
     let dayOne = new Date(currentYear, currentMonth, 1).getDay();
     //first day of the month
     let dayEnd = new Date(currentYear, currentMonth + 1, 0).getDay();
     //last day of the month
     let dateEndlast = new Date(currentYear, currentMonth, 0).getDate();
     //last date of previous month
     let dateEnd = new Date(currentYear, currentMonth + 1, 0).getDate();
     //last date of the month
     dom.monthYear.innerHTML = `${months[currentMonth]}  ${currentYear}`
     //makes the thing at the top display the correct month and year
 
     for (let i = dayOne; i > 0; i--) {
         dom.dates.innerHTML += `<li class="inactive">${dateEndlast - i + 1}</li>`
     } //adds the dates
 
 
     for (let i = 1; i <= dateEnd; i++) {
         let today = ""; //makes current date highlighted
         let isHoliday = ""; //makes nearest holiday highlighted

         if (i === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
             today = "active"
         } //makes current date highlighted


         if( `${currentYear}-${currentMonth+1}-${i}` === data[choice].date){
             isHoliday ="yes"
         }else if(`${currentYear}-0${currentMonth+1}-${i}` === data[choice].date ){
            isHoliday = "yes"
         }else if(`${currentYear}-0${currentMonth+1}-0${i}` === data[choice].date ){
            isHoliday = "yes" //if the holiday is on a single digit number
         }else if(`${currentYear-1}-0${currentMonth+1}-0${i}` === data[choice].date ){
            isHoliday = "yes" //accounts for changing years in calendder
         }  //all these else if statements are bc of the way date spits out the dates, it spits out "month number" instead of 0"month number" eg. 6 instead of 06 and the api has the data in the second format
         //probably definately super inefficient way of doing it
        

         
         dom.dates.innerHTML += `<li class="${today}" id="${isHoliday}">${i}</li>`
     }
     console.log(data)
 
     for (let i = 1; i <= 6 - dayEnd; i++) {
        let isHoliday = "";

       if (`${currentYear}-${currentMonth+2}-0${i}` === data[choice].date){
        isHoliday = "yes" //if current month is jan-nov
       }else if(`${currentYear+1}-0${currentMonth-10}-0${i}` === data[choice].date){
        isHoliday = "yes" //if current month is dec
       } //checks holidays for next month

         dom.dates.innerHTML += `<li class="inactive" id="${isHoliday}">${i}</li>`
         
     }


} catch (error) {
    alert("You either put the code wrong or the api doesn't have data for that country")
}

   
 
}

export function navigation() {
    dom.buttons.forEach((button) => button.addEventListener("click", function () {
        /*  if(button.className === "left"){
          currentMonth--
          makeCalender()
         }else{
          currentMonth++
          makeCalender()
         } */
        button.className === "left" ? currentMonth-- : currentMonth++;
        //this question mark operation I found while poking around the operations page in mdn is pretty nifty
        //it makes if else way faster to write
        if (currentMonth < 0) {
            currentMonth = 11
            currentYear--
        } else if (currentMonth > 11) {
            currentMonth = 0
            currentYear++
        }
        makeCalender()
    }))
}