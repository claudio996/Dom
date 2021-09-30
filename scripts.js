//ACCEDIENDO AL DOM.
const contenedor = document.querySelector('.container');
const lista = document.createElement("li");
const texto = document.createTextNode('item-1');
lista.appendChild(texto);
contenedor.appendChild(lista)

const parrafo =   document.querySelector('p');
parrafo.textContent = "parrafo";
parrafo.innerHTML = '<br><p>Hola </p></br>'
parrafo.classList.add('text-danger')

//Agregando en varios elementos.
const listaDos = document.getElementById('lista');
const li = document.createElement('li');
li.textContent = 'items'
listaDos.appendChild(li);

//UTILIZANDO FRAGMENT //memoria-volatil para almacenar.
const fragment = document.createDocumentFragment();
const listaDinamica = document.getElementById('lista-dinamica');
const arrayElementos = ["cocacola", "fanta", "sprite"]

arrayElementos.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = li;
    fragment.appendChild(li); //almacenamiento volatil.
} ) 





