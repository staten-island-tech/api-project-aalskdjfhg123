import '../styles/style.css'
import { dom } from './dom'
import { holidayTF } from './holidayTF'
import { nextHolidays } from './nextholidays'
import { holidayWw } from './nextholidaysWw'

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

let dayone = new Date(year, month, 1).getDay();
console.log(dayone)

dom.b.addEventListener("click",function(){
    holidayTF()
})
dom.n.addEventListener("click", function(){
    nextHolidays()
})

dom.w.addEventListener("click", function(){
    holidayWw()
})

/* const date = new Date();
const today = date.getMonth()
console.log(today+1) */