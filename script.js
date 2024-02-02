function adicionaItem (){

    const containerPai = document.getElementById("container");
    const novoItem = document.createElement("article");
    const texto = document.createTextNode("Novo Item");
    novoItem.appendChild(texto);    
    novoItem.classList.add("item");
    containerPai.insertAdjacentElement("beforeend", novoItem);

}

function removeItem(event){

    const itemSerRemovido = event.target.remove();

}