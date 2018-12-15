// Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();
    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://newsapi.org/v2/everything?q=animals&apiKey=58a93e613ec8490fbec0142ffa127db1', true);
    request.onload = function () {
    
        console.log(this.response);
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        var espacoNoticias = document.getElementById('noticias');
        data.articles.forEach(element => {
            
            const card = document.createElement('div');
            card.setAttribute('class', 'card-noticia');
            var titulo = document.createElement('h1');
            titulo.textContent = element.title;
            const p = document.createElement('p');
            element.description = element.description.substring(0, 300);
            p.textContent = `${element.description}...`;
            var linkParaProvedor = document.createElement('a');
            linkParaProvedor.href = element.url;
            linkParaProvedor.setAttribute('class', 'link-noticia');
            espacoNoticias.appendChild(linkParaProvedor);
            linkParaProvedor.appendChild(card);
            var img = document.createElement('img');
            img.src = element.urlToImage;
            card.appendChild(img);
            card.appendChild(titulo);
            card.appendChild(p);
        });
    }
    // Send request
    request.send();