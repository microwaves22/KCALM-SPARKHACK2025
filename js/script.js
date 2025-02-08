document.addEventListener("DOMContentLoaded", function () {
    // loads navigation bar
    fetch("components/nav.html")  
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading navigation:", error));
});
