const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe'); //2 Seleccionamos todas la imagenes de zapatos
const gradients = document.querySelectorAll('.gradient');

let prevColor ="blue";

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color'); //1 Nos devuelve  el atributo del color seleccionado
    let shoe = document.querySelector(`.shoe[color="${color}"]`); // 4 Seleccionamos el zapato con el atributo color que su valor sea al color que estamos seleccionando de los circulitos 
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);


    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary',primary);

    shoes.forEach(s => s.classList.remove('show')); // 3 Removemos la clase show de todas la imagenes de zapatos
    shoe.classList.add('show'); //5 A ese sabato con el color seleccionado le añadimos "show"

    //Cambiar el color del gradiente de fondo
    gradients.forEach(g => g.classList.remove('first','second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    
}

sizes.forEach(size => size.addEventListener('click',changeSize));
colors.forEach(c => c.addEventListener('click',changeColor));