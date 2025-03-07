// Array para armazenar as alturas
let alturas = [];

// Função para coletar e validar as alturas
function coletarAlturas() {
    for (let i = 1; i <= 15; i++) {
        let altura = parseFloat(prompt(`Digite a altura da pessoa ${i} em metros:`));
        if (isNaN(altura) || altura <= 0) {
            alert("Altura inválida. Tente novamente.");
            i--; // Repete a iteração para entrada inválida
        } else {
            alturas.push(altura);
        }
    }
}

// Função principal
function main() {
    coletarAlturas();

    let maiorAltura = Math.max(...alturas);
    let menorAltura = Math.min(...alturas);

    console.log(`Maior altura: ${maiorAltura.toFixed(2)} m`);
    console.log(`Menor altura: ${menorAltura.toFixed(2)} m`);
}

// Executa o programa
main();
