console.log('JavaScript betöltődött');

function loadHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data);
}

window.onload = () => {
    loadHTML("header", "header.html");  // Betölti a header-t
    loadHTML("footer", "footer.html");  // Betölti a footer-t
};
