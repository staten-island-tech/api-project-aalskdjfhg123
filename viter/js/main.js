import '../styles/style.css'
import { dom } from '../../vite/js/dom'

const url = `https://www.gov.uk/bank-holidays.json`


async function getDays(url){
const slop = await fetch(url);
const json = await slop.json();

console.log(json.scotland.events);
json.scotland.forEach((thing)=>console.log(thing))
}
dom.b.addEventListener("click",function(){
    getDays(url)
})
