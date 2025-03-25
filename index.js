import { criarItemDaLista } from "./scripts/criarItemDaLista.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia();
});

const listaVazia = document.querySelector(".lista-vazia");

function verificarListaVazia(){
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length == 0){
        listaVazia.style.display = "block";
    }else{
        listaVazia.style.display = "none";
    };
};

verificarListaVazia();

