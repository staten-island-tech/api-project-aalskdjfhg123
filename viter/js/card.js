import { choice } from "./buttons"
import { dom } from "./dom"

export async function card() {

    let input = document.querySelector('.input')
    const slop = await fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${input.value}`)
    const data = await slop.json()
    dom.desc.innerHTML = `${data[choice].date}
    <p>Click for translation</p>`
    dom.cardTitleL.innerHTML = data[choice].localName
    dom.cardTitleT.innerHTML = data[choice].name
}

export function cardFlip(card){
    card.addEventListener("click", function () {
        if (card.classList != "click") {
            card.classList.add("click")
        } else {
            card.classList.remove("click")
        }
    })
}