// Array para armazenar os gêneros
let generos = [];

// Função para coletar e validar os gêneros
function coletarGeneros() {
    for (let i = 1; i <= 15; i++) {
        let genero = prompt(`Digite o gênero da pessoa ${i} (M para masculino, F para feminino):`).trim().toUpperCase();
        if (genero === "M" || genero === "F") {
            generos.push(genero);
        } else {
            alert("Gênero inválido. Tente novamente.");
            i--; // Repete a iteração para entrada inválida
        }
    }
}

// Função principal
function main() {
    coletarGeneros();

    // Filtra o array para contar apenas as entradas 'F'
    let numeroFeminino = generos.filter(genero => genero === "F").length;

    console.log(`Número de pessoas do gênero feminino: ${numeroFeminino}`);
}

// Executa o programa
main();
