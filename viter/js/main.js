import '../styles/style.css'
import { dom } from './dom'
import { holidayTF } from './holidayTF'
import { nextHolidays } from './nextholidays'
import { holidayWw } from './nextholidaysWw'
 import { makeCalender, navigation  } from './calender' 


navigation()
makeCalender()


dom.b.addEventListener("click", function () {
    holidayTF()
})
dom.n.addEventListener("click", function () {
    nextHolidays()
})

dom.w.addEventListener("click", function () {
    holidayWw()
})

