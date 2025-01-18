document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});
