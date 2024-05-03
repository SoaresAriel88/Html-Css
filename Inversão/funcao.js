function reverse(){
    const reverso = document.getElementById('caixa').value;
    const some = reverso.split('').reverse().join('');
    document.getElementById('result').value = some;
}
