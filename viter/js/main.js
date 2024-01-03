import '../styles/style.css'
import { dom } from './dom'
import { holidayWw } from './nextholidaysWw'
import { makeCalender, navigation } from './calender'
import { card } from './card'
dom.input.value = "US"

dom.card.addEventListener("click", function () {
    if (dom.card.classList != "click") {
        dom.card.classList.add("click")
    } else {
        dom.card.classList.remove("click")
    }
})

console.log(dom.card.classList)

navigation()
makeCalender()
card()

dom.b.addEventListener("click", function () {
    makeCalender()
    card()
    document.querySelector("h1").innerHTML = ""
})

dom.w.addEventListener("click", function () {
    holidayWw()
})
