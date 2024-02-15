function getCharacters(done) {
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        done(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

getCharacters(data => {
    data.results.forEach(Personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`<article>
        <div class="image-container">
            <img src="${Personaje.image}" alt="Personaje">
        </div>
        <h2>${Personaje.name}</h2>
        <span>${Personaje.status}</span>
    </article>`);
        
    const main = document.querySelector("main");
    main.append(article);
    });
});