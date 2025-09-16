const modal = document.getElementById("exportModal");
const btn = document.getElementById("exportBtn");
const span = document.querySelector(".modal .close");

// Open modal on button click
btn.onclick = function() {
    modal.style.display = "block";
}

// Close modal on (x) click
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}