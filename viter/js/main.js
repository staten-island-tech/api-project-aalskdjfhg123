import '../styles/style.css'
import { dom } from './dom'
import { holidayTF } from './holidayTF'
import { nextHolidays } from './nextholidays'
import { holidayWw } from './nextholidaysWw'
import { months } from './months'



let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

let dayone = new Date(year, month, 1).getDay();
let dayend = new Date(year, month + 1, 0).getDay();

console.log(dayend)
console.log(months)
dom.monthYear.innerHTML =`${months[month]}  ${year}`





dom.b.addEventListener("click",function(){
    holidayTF()
})
dom.n.addEventListener("click", function(){
    nextHolidays()
})

dom.w.addEventListener("click", function(){
    holidayWw()
})

