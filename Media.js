// Variáveis para armazenar a soma das alturas e a contagem de pessoas por gênero
let somaAlturasMasculino = 0;
let contadorMasculino = 0;
let somaAlturasFeminino = 0;
let contadorFeminino = 0;

// Função para coletar e validar dados
function coletarDados() {
    for (let i = 1; i <= 15; i++) {
        let altura = parseFloat(prompt(`Digite a altura da pessoa ${i} em metros:`));
        if (isNaN(altura) || altura <= 0) {
            alert("Altura inválida. Tente novamente.");
            i--; // Repete a iteração para entrada inválida
            continue;
        }

        let genero = prompt("Digite o gênero (M para masculino, F para feminino):").trim().toUpperCase();
        if (genero === "M") {
            somaAlturasMasculino += altura;
            contadorMasculino++;
        } else if (genero === "F") {
            somaAlturasFeminino += altura;
            contadorFeminino++;
        } else {
            alert("Gênero inválido. Tente novamente.");
            i--; // Repete a iteração para entrada inválida
        }
    }
}

// Função principal
function main() {
    coletarDados();

    if (contadorMasculino > 0) {
        let mediaMasculino = somaAlturasMasculino / contadorMasculino;
        console.log(`Média de altura masculina: ${mediaMasculino.toFixed(2)} m`);
    } else {
        console.log("Nenhuma altura masculina registrada.");
    }

    if (contadorFeminino > 0) {
        let mediaFeminino = somaAlturasFeminino / contadorFeminino;
        console.log(`Média de altura feminina: ${mediaFeminino.toFixed(2)} m`);
    } else {
        console.log("Nenhuma altura feminina registrada.");
    }
}

// Executa o programa
main();
