import '../styles/style.css'


const url = `https://www.gov.uk/bank-holidays.json
`


async function getDays(url){
const slop = await fetch(url)
const data = await slop.json()
console.log(data)
}

getDays(url)