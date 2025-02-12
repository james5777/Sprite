
const fondoUno = document.querySelector('.fondo_green');
const fondoDos = document.querySelector('.fondo_orange');

//Hojas

const hojaUno = document.querySelector('.hoja_1');
const hojaDos = document.querySelector('.hoja_2');
const hojaTres = document.querySelector('.hoja_3');
const hojaCuatro = document.querySelector('.hoja_4');

let nextOne = document.querySelector('.circulo_1');
let next = document.querySelector('.circulo_2');

next.addEventListener('click', ()=>{
    fondoUno.classList.add('move');
    fondoDos.classList.add('activo');

    hojaUno.classList.add('dinamic');
    hojaDos.classList.add('dinamicDos');
    hojaTres.classList.add('dinamicTres');
    hojaCuatro.classList.add('dinamicCuatro');

})

nextOne.addEventListener('click', ()=>{
    fondoUno.classList.remove('move');
    fondoDos.classList.remove('activo');

    hojaUno.classList.remove('dinamic');
    hojaDos.classList.remove('dinamicDos');
    hojaTres.classList.remove('dinamicTres');
    hojaCuatro.classList.remove('dinamicCuatro');
})

