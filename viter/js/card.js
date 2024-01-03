import { dom } from "./dom"

export async function card() {

    let input = document.querySelector('.input')
    const slop = await fetch(`https://date.nager.at/api/v3/NextPublicHolidays/${input.value}`)
    const data = await slop.json()
    dom.desc.innerHTML = ""
    dom.cardTitleL.innerHTML = data[0].localName
    dom.cardTitleT.innerHTML = data[0].name
    if(data[0].localName === data[0].name){
        dom.desc.innerHTML = "uhhh it's already english?"
    }
}