import '../styles/style.css'

async function getNeko() {
    const response = await fetch('https://nekos.best/api/v2/neko')
    const json = await response.json()
    console.log(json.results[0].url)
}

await getNeko()




 const input = document.querySelector('.input')



async function getNeko() {
    try {
        const response = await fetch(`https://nekos.best/api/v2/${input.value}`)
        if(response.status != 200){
            throw new Error(response.statusText)
        }
    const json = await response.json()
    const artist = json.results[0].artist_href
    document.querySelector('.container').insertAdjacentHTML('beforeend',
        `<img src="${json.results[0].url}" class="img" alt=""> <p><a href="${artist}">artist:${artist}</a></p>
        <img src="https://c.tenor.com/sWQu_pBYT1kAAAAi/pointing-wojak.gif" class="point" alt="">
`)
    } 
    
    catch (error) {
        document.querySelector('.container').textContent = error
    }

    
}

document.querySelector(".b").addEventListener("click", function () {
    document.querySelector('.container').innerHTML = ""
    getNeko()
    
})


document.querySelector(".c").addEventListener("click",function(){
    document.querySelector("body").innerHTML = "";
    document.querySelector("body").classList.add("cringe");
    document.querySelector("body").innerHTML("heloo");
})
 


// https://nekos.best/api/v2/neko/XXXXXX-XXXXX.png
