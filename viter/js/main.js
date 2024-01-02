import '../styles/style.css'
import { dom } from './dom'
import { holidayWw } from './nextholidaysWw'
 import { makeCalender, navigation  } from './calender' 
 import { card } from './card'
 dom.input.value = "US"

navigation()
makeCalender()
card()

dom.b.addEventListener("click", function () {
console.log(dom.input.value)
makeCalender()
card()
document.querySelector("h1").innerHTML = ""
})

dom.w.addEventListener("click", function () {
    holidayWw()
})
