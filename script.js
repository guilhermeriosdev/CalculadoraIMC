
let calcular = document.getElementById('calcular');


function imc(){
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if (nome !== '' && altura !==''&& peso !== ''){
            let valorImc = (peso / ( altura*altura)).toFixed(2) 

            if (valorImc < 18.5){
                classificacao = 'abaixo do peso'
            }
           else if (valorImc < 25){
                classificacao = 'Está com o peso ideal'
            }
            else if (valorImc < 30){
                classificacao = 'Levemente acima do peso'
            }
            else if (valorImc < 35){
                classificacao = 'com obesidade grau 1'
            }
            else if (valorImc < 40){
                classificacao = 'com obesidade grau 2'
            }
            else {
                classificacao = 'com obesidade grau 3, mórbido, gigante, vamo emagrecer se n morre'
            }

            resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}`
    }
    else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener('click', imc);