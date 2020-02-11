window.onload = function() {

        let form = document.querySelector('form#search')

        form.addEventListener('submit', function(e) {
                e.preventDefault() //para que no envie el formulario al apretar el boton Buscar

                let busqueda = this.querySelector('input[name=search]').value //leo lo que ingresa el usuario
                let cantidad = this.querySelector('input[name=number]').value

                document.querySelector('p').innerHTML = `Resultado de busqueda para: <b>${busqueda}</b>`

                let url = `https://api.giphy.com/v1/gifs/search?api_key=lD71ZbDlqkCrIx19XB8DON4vUkmS69fA&q=${busqueda}&limit=${cantidad}&offset=0&rating=G&lang=en`

                fetch(url)
                    .then(response => response.json())
                    .then(json => {
                        let images = json.data
                        let gifs = document.querySelector('div#gifs')
                        gifs.innerHTML += ""
                        for (let i = 0; i < images.length; i++) {
                            gifs.innerHTML = title[i]
                            document.querySelector('img#url').src = images[i].images.original.url
                        }
                    })
            }


        }