import './style.css'

const input = document.querySelector('.input')



async function getNeko() {
    try {
        const response = await fetch(`https://nekos.best/api/v2/${input.value}`)
        if(response.status != 200){
            throw new Error(response.statusText)
        }
    const json = await response.json()
    const artist = json.results[0].artist_href
    document.querySelector('h1').insertAdjacentHTML('beforeend',
        `<img src="${json.results[0].url}" class="img" alt=""> <p><a href="${artist}">artist:${artist}</a></p>
        <img src="https://c.tenor.com/sWQu_pBYT1kAAAAi/pointing-wojak.gif" class="point" alt="">
`)
    } 
    
    catch (error) {
        document.querySelector('h1').textContent = error
    }

    
}

document.querySelector(".b").addEventListener("click", function () {
    document.querySelector('h1').innerHTML = ""
    getNeko()
    
})

// https://nekos.best/api/v2/neko/XXXXXX-XXXXX.png
