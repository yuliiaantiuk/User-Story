document.addEventListener("DOMContentLoaded", function() {
    const nameModal = document.getElementById("nameModal");
    const passwordModal = document.getElementById("passwordModal");

const closes = document.querySelectorAll(".close");

document.getElementById("submit-btn").addEventListener("click", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username) {
        nameModal.style.display = "block";
      } else if (username && !password) {
        passwordModal.style.display = "block";
      } else {
        alert("Form submitted successfully!");
      }

});

    closes.forEach(btn => {
      btn.onclick = function() {
        btn.closest(".modal").style.display = "none";
      }
    });

    window.onclick = function(event) {
      if (event.target.classList.contains(".modal")) {
        event.target.style.display = "none";
      }
    }});