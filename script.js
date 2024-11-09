let i;

function validar() {
    
     i = document.getElementById('bin').value;
    const maximo = 8;

    if(i == "") {
        alert ("Preencha com um número binário");
    }else if(i.length > maximo){
        alert("Preencha até 8 números de 0 a 1");
    }else if(!/^[01]{1,8}$/.test(i)){
        alert("Preencha apenas com 0 ou 1");
    }else{
         calcular();
    }
}

function calcular() {

 let decimal = parseInt(i, 2);
 alert("O número decimal é: "+ decimal);
}
