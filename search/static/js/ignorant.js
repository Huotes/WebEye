function startIgnorantSearch() {
    openPopup();
    const term = document.getElementById("ignorant-search-term").value;

    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("result").style.display = "block";

        const resultContent = `Results for "${term}":
- Example Result 1
- Example Result 2
- Example Result 3`;

        document.getElementById("result-content").innerText = resultContent;
    }, 2000);
}
