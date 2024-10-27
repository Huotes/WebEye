function startSherlockSearch() {
    const username = document.getElementById("sherlock-username").value;

    if (username.trim() === "") {
        alert("Please enter a username to search.");
        return;
    }

    // Apenas abra o popup ao clicar em "Search"
    openPopup();

    // Simulação de uma requisição de busca do Sherlock
    setTimeout(() => {
        // Ocultar o loading e mostrar o resultado
        document.getElementById("loading").style.display = "none";
        document.getElementById("result").style.display = "block";

        // Exemplo de resultado fictício
        const resultContent = `Results for "${username}":
- Twitter: twitter.com/${username}
- GitHub: github.com/${username}
- Instagram: instagram.com/${username}`;

        document.getElementById("result-content").innerText = resultContent;
    }, 2000); // Simula um delay de 2 segundos
}
