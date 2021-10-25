const container = document.querySelector('.box-container');




for (let boxCount = 1; boxCount <= 100; boxCount++) {

    //Aggiungiamo i box
    if (boxCount % 3 === 0 && boxCount % 5 === 0)  {
        container.innerHTML += `<div class="box boxFizzBuzz box-${boxCount}">fizzbuzz`;
    } else if (boxCount % 5 === 0) {
        container.innerHTML += `<div class="box boxBuzz box-${boxCount}">buzz`;
    } else if (boxCount % 3 === 0) {
        container.innerHTML += `<div class="box boxFizz box-${boxCount}">fizz`;
    } else {
        container.innerHTML += `<div class="box box-${boxCount}">${boxCount}`;
    }

}