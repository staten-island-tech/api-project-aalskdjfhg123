import { dom } from "./dom";
import { months } from "./months";


let currentDate = new Date();

let currentYear = currentDate.getFullYear();

let currentMonth = currentDate.getMonth();

export function makeCalender() {
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
    }


    for (let i = 1; i <= dateEnd; i++) {
        let today = "";
        if (i === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
            today = "active"
        }
        dom.dates.innerHTML += `<li class="${today}">${i}</li>`

    }

    for (let i = 1; i <= 6 - dayEnd; i++) {
        dom.dates.innerHTML += `<li class="inactive">${i}</li>`
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