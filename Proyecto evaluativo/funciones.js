const options = ["piedra", "papel", "tijera"];

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Empate";
    } else if (
        (playerSelection === "piedra" && computerSelection === "tijera") ||
        (playerSelection === "papel" && computerSelection === "piedra") ||
        (playerSelection === "tijera" && computerSelection === "papel")
    ) {
        return "Ganaste";
    } else {
        return "Perdiste";
    }
}

const buttons = document.querySelectorAll(".button-container button");
const resultContainer = document.getElementById("result-container"); // Obtén el contenedor de resultado

buttons.forEach(button => {
    button.addEventListener("click", function() {
        const playerChoice = this.id;
        const computerChoice = computerPlay();
        const result = playRound(playerChoice, computerChoice);
        
        // Actualiza el contenido del contenedor de resultado
        resultContainer.textContent = `Tú elegiste: ${playerChoice}\nLa computadora eligió: ${computerChoice}\nResultado: ${result}`;
    });
});
