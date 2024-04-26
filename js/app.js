function comprar(){

let ingressoEscolhido = document.getElementById("tipo-ingresso").value
let quantidadeComprada = document.getElementById("qtd").value

console.log(quantidadeComprada)
if(quantidadeComprada == ""){
    alert("Por favor informe a quantidade de ingressos que deseja comprar!")
    return  
}
let saldoLugares = parseInt(document.getElementById(`qtd-${ingressoEscolhido}`).textContent)

console.log(saldoLugares)

let novoSaldoLugares = saldoLugares - quantidadeComprada


console.log(novoSaldoLugares)

if(saldoLugares<quantidadeComprada){
    alert("Quantidade de ingressos indisponíveis para comprar!")
    document.getElementById("qtd").value = ""
    return
}

document.getElementById(`qtd-${ingressoEscolhido}`).textContent = novoSaldoLugares

}