function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;  
    
    if(tipoIngresso == 'pista'){
        comprarPista(quantidade);     
    } else if (tipoIngresso == 'superior'){
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
}
function comprarPista(quantidade){
    let pistaDisp = parseInt(document.getElementById('qtd-pista').textContent); 
    if (quantidade>pistaDisp){
        alert('Quantidade indisponivel');
    } else if (quantidade < 0) {
        alert('ERRO! Insira um número positivo!');       
    }else {
        if (confirm(`Deseja comprar ${quantidade} ingressos? `) == true){ 
            pistaDisp = pistaDisp - quantidade;
            document.getElementById('qtd-pista').textContent = pistaDisp;
            alert(`${quantidade} ingressos comprados para o setor Pista!`)
        } else {
            alert('Operação cancelada!')
            return;
        }        
    }
}

function comprarSuperior(quantidade){
    let superiorDisp = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade>superiorDisp){
        alert('Quantidade indisponivel')
    } else if (quantidade < 0) {
        alert('ERRO! Insira um número positivo!');      
    } else {
        if (confirm(`Deseja comprar ${quantidade} ingressos? `) == true){ 
            superiorDisp = superiorDisp - quantidade;
            document.getElementById('qtd-superior').textContent = superiorDisp;
            alert(`${quantidade} ingressos comprados para o setor Superior!`)
        } else {
            alert('Operação cancelada!')
            return;
        }        
        
    }
}

function comprarInferior(quantidade){
    let inferiorDisp = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > inferiorDisp) {
        alert('Quantidade indisponivel');
    } else if (quantidade < 0) {
        alert('ERRO! Insira um número positivo!');
    } else {
        if (confirm(`Deseja comprar ${quantidade} ingressos? `) == true){ 
            inferiorDisp = inferiorDisp - quantidade;
            document.getElementById('qtd-inferior').textContent = inferiorDisp;
            alert(`${quantidade} ingressos comprados para o setor Inferior!`)
        } else {
            alert('Operação cancelada!')
            return;        
        }        
    }
}
