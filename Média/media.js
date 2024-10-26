function media(){
    const valor = parseInt(document.getElementById("caixa").value);
    var numeros = new Array(valor);
    for (var i=0;  numeros.length > i; i++){
        numeros[i] = parseFloat (prompt("Digite um valor: "))
}
    var soma = numeros.reduce((total, atual ) => total + atual, 0)
    const media = soma / valor;
    
    document.getElementById("resultado").value = media;
    document.getElementById("soma").value = soma
}
    
    
   

