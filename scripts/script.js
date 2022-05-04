


const listaOpcoes = document.querySelector(".listaOpcoes")

//para não precisar fazer um eventlistner em cada item da lista, usando a UL 

listaOpcoes.addEventListener("click", identificarClick);

//usando e event.target para saber exatamente o elemento que foi clicado dentro da Ul
function identificarClick(event){

    //identificando onde ocorreu o click
    const elemento = event.target

    if(elemento.tagName == "LI"){
       
        //pegando o id do elemento
        const id = elemento.id
        //selecionando uma div atravez do id do click do elemento na UL
        const escolha = document.querySelector(`div[data-id="${id}"]`);
        //remove a classe antes de mostrar
        removeClass()

        escolha.classList.add("mostrarDiv")
    }
}

//função para remover as classes de todas as divs
function removeClass(){
    const divs= document.querySelectorAll(".divGeral .container .teste")
    
    for(let i = 0; i < divs.length; i++){
        divs[i].classList.remove("mostrarDiv")
    }
}

