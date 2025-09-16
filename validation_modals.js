// Отримуємо елементи
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const submitBtn = document.getElementById("submit-btn");

// Модальні вікна
const nameModal = document.getElementById("nameModal");
const hintNameModal = document.getElementById("hintNameModal");
const passwordModal = document.getElementById("passwordModal");
const confirmPasswordModal = document.getElementById("confirmPasswordModal");
const passwordMismatchModal = document.getElementById("passwordMismatchModal");
const successModal = document.getElementById("successModal");
const invalidPasswordModal = document.getElementById("invalidPasswordModal");

// Valid tooltips
const usernameValidTooltip = document.getElementById("username-valid");
const usernameHintTooltip = document.getElementById("username-hint");
const passwordValidTooltip = document.getElementById("password-valid");
const passwordHintTooltip = document.getElementById("password-hint");

// Закриття модалок
document.querySelectorAll(".modal .close").forEach(span => {
    span.onclick = function() {
        span.closest(".modal").style.display = "none";
    };
});

// Перевірка валідності username
function validateUsername(username) {
    if (usernameInput.value.length < 12) return false;
    const regex = /^[A-Za-z][A-Za-z0-9_-]{11,19}$/;
    return regex.test(username);
}

// Перевірка валідності паролю
function validatePassword(password) {
    if (passwordInput.value.length < 12) return false;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&+=]).{12,}$/;
    return regex.test(password);
}

// Tooltip показ для валідних даних
usernameInput.addEventListener("mouseover", () => {
    if (validateUsername(usernameInput.value)) {
        usernameValidTooltip.style.visibility = "visible";
        usernameHintTooltip.style.visibility = "hidden"; 
    } else {
        usernameValidTooltip.style.visibility = "hidden";
        usernameHintTooltip.style.visibility = "visible";
    }
});

usernameInput.addEventListener("mouseout", () => {
    usernameValidTooltip.style.visibility = "hidden";
    usernameHintTooltip.style.visibility = "hidden"; 
});

passwordInput.addEventListener("mouseover", () => {
    if (validatePassword(passwordInput.value)) {
        passwordValidTooltip.style.visibility = "visible";
        passwordHintTooltip.style.visibility = "hidden"; 
    } else {
        passwordValidTooltip.style.visibility = "hidden";
        passwordHintTooltip.style.visibility = "visible";
    }
});

passwordInput.addEventListener("mouseout", () => {
    passwordValidTooltip.style.visibility = "hidden";
    passwordHintTooltip.style.visibility = "hidden"; 
});

// Обробка кнопки Sign Up
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // Username пустий
    if (!username) {
        nameModal.style.display = "block";
        return;
    }

    // Username неправильний
    if (!validateUsername(username)) {
        hintNameModal.style.display = "block";
        return;
    }

    // Password пустий
    if (!password) {
        passwordModal.style.display = "block";
        return;
    }

    // Password неправильний
    if (!validatePassword(password)) {
        invalidPasswordModal.style.display = "block";
        return;
    }

    // Confirm password пустий
    if (!confirmPassword) {
        confirmPasswordModal.style.display = "block";
        return;
    }

    // Passwords не співпадають
    if (password !== confirmPassword) {
        passwordMismatchModal.style.display = "block";
        return;
    }

    // Успіх
    successModal.style.display = "block";
});
