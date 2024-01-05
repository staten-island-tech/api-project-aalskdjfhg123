import '../styles/style.css'
import { dom } from './dom'
import { holidayWw } from './nextholidaysWw'
import { makeCalender, navigation } from './calender'
import { card, cardFlip } from './card'
import { buttons, choice } from './buttons'

dom.input.value = "US"

navigation()
makeCalender()
card()
cardFlip(dom.card)
buttons(dom[1],dom[2],dom[3])

dom.b.addEventListener("click", function () {
    makeCalender()
    card()
    document.querySelector("h1").innerHTML = ""
})

