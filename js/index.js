const container = document.querySelector('.container');


for (let row = 0; row <= 15; row++) {

    //Aggiungiamo le Righe
    let rowMarkup = `<div class="row row-${row}">`;
    container.innerHTML += rowMarkup;

    
}