function startGHuntSearch() {
    openPopup();
    const googleAccount = document.getElementById("ghunt-google-account").value;

    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("result").style.display = "block";

        const resultContent = `Results for "${googleAccount}":
- Linked Email: email@example.com
- Google Photos: Found
- YouTube Account: Found`;

        document.getElementById("result-content").innerText = resultContent;
    }, 2000);
}
