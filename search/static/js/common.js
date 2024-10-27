document.addEventListener("DOMContentLoaded", function() {
    // Função para abrir o popup (chamada apenas pelas funções de busca)
    function openPopup() {
        document.getElementById("popup").style.display = "flex";
    }

    // Função para fechar o popup e redefinir o estado
    function closePopup() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("loading").style.display = "flex";
        document.getElementById("result").style.display = "none";
    }

    // Função para copiar o conteúdo para a área de transferência
    function copyToClipboard() {
        const resultContent = document.getElementById("result-content").innerText;
        navigator.clipboard.writeText(resultContent).then(() => {
            alert("Results copied to clipboard!");
        });
    }

    // Exponha as funções para uso global
    window.openPopup = openPopup;
    window.closePopup = closePopup;
    window.copyToClipboard = copyToClipboard;
});
