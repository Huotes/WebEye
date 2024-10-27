function startHoleheSearch() {
    openPopup();
    const email = document.getElementById("holehe-email").value;

    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("result").style.display = "block";

        const resultContent = `Results for "${email}":
- Service 1: Found
- Service 2: Not Found
- Service 3: Found`;

        document.getElementById("result-content").innerText = resultContent;
    }, 2000);
}
