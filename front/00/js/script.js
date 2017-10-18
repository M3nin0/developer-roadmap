// var resp = confirm("Você deseja continuar ?");
//
// if (resp === true)
//   console.log('Ele quer excluir');
// else
//   console.log('Melhor deixar, ele não quer excluir');

// var a = 20;
// var b = 10;
//
// console.log(a + b);
//
// b = a; a = 50;
//
// console.log('Resposta = ' + (a + b));

function soma(a, b){
  return parseInt(a) + parseInt(b);
}

document.querySelector("#calcular").addEventListener("click", function(){

  // Defino que as variaveis apenas vão existir dentro do escopo
  let valorA = document.querySelector('#valorA').value;
  let valorB = document.querySelector('#valorB').value;

  if (valorA.length > 0 && valorB.length > 0){
    document.querySelector('.resultado').value = soma(valorA, valorB);
  } else {
    alert('Nem todos os campos forma preenchidos');
  }
}); // # -> Utilizado para definir que é um id
