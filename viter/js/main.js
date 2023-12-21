import '../styles/style.css'
import { dom } from './dom'
import { holidayWw } from './nextholidaysWw'
 import { makeCalender, navigation  } from './calender' 


navigation()

dom.b.addEventListener("click", function () {
console.log(dom.input.value)
makeCalender()
})
dom.n.addEventListener("click", function () {
    nextHolidays()
})

dom.w.addEventListener("click", function () {
    holidayWw()
})

