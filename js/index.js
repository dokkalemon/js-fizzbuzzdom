const container = document.querySelector('.box-container');




for (let boxCount = 1; boxCount <= 100; boxCount++) {

    //Aggiungiamo i box
    let boxNormalMarkup = `<div class="box box-${boxCount}">`;


    container.innerHTML += `${boxNormalMarkup}${boxCount}`;
}