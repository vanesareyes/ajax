window.onload = function() {
    let numero = prompt('Cantidad de gifs')
    document
        .querySelector('button#refresh')
        .addEventListener('click', getRamdomGif)

    getRamdomGif()
    getTrendingGif()

    function getTrendingGif() {
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=lD71ZbDlqkCrIx19XB8DON4vUkmS69fA&limit=${numero}&rating=G')
            .then(response => response.json())
            .then(json => {
                let images = json.data
                let gifs = document.querySelector('div#gifs')
                for (let i = 0; i < images.length; i++) {
                    gifs.innerHTML += `<img width="50px" src="${images[i].images.original.url}"/>`
                }
            })
    }

    function getRamdomGif() {

        fetch('https://api.giphy.com/v1/gifs/random?api_key=lD71ZbDlqkCrIx19XB8DON4vUkmS69fA&tag=&rating=G')
            .then(response => response.json())
            .then(function(info) {
                console.log(info.data)
                let { image_url, title } = info.data // destructuracion, extraigo directamente las propiedades del json con el mimso nombre

                //let nombre = info.data.title
                //let url = info.data.url
                document.querySelector('h1#title').innerHTML = title
                document.querySelector('img#url').src = image_url



            })
    }

}