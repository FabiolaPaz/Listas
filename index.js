function listaDeObjet(){
   return console.log(doritos.sabor,doritos.preco,doritos.codigoDeBarra)
}

function imprimirLista(){
   return console.log(lista)
}

class salgadinho {

    constructor(sabor, preco, codigoDeBarra) {
        this.sabor = sabor;
        this.preco = preco;
        this.codigoDeBarra = codigoDeBarra;
    }
}

const doritos = new salgadinho('queijo',2.50,5566)

let lista = [doritos.sabor,doritos.preco,doritos.codigoDeBarra]

listaDeObjet()
imprimirLista()