let listaAlunos = ["Leonardo", "Robson", "Rafael", "Raiane"];

let quantidadeAlunos = 5;

for (let contador = 0; contador < listaAlunos.length; contador++) {
    console.log(contador);

    if (contador == 0) {
        console.log("O número é ZERO")
    } else if ((contador % 2) == 0) {
        console.log(`O aluno ${listaAlunos[contador]} é o número ${contador} PAR`);
    } else if ((contador % 2) == 1) {
        console.log(`O aluno ${listaAlunos[contador]} é o número ${contador} IMPAR`);
    }
}