const passwordInput = document.getElementById('password');
const toggleBtn = document.getElementById('toggleBtn');
const displayText = document.getElementById('strength-text');
const strengthBar = document.getElementById('strength-bar');

// Toggle show/hide password
toggleBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        toggleBtn.textContent = "Show";
    }
});

// Check password strength live
passwordInput.addEventListener('input', function () {
    const password = passwordInput.value;
    let strength = 0;

    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++; // special chars

    // Visual and Text Feedback
    if (strength <= 2) {
        strengthBar.style.width = "33%";
        strengthBar.style.backgroundColor = "red";
        displayText.textContent = "Strength: Weak";
    } else if (strength === 3 || strength === 4) {
        strengthBar.style.width = "66%";
        strengthBar.style.backgroundColor = "orange";
        displayText.textContent = "Strength: Medium";
    } else {
        strengthBar.style.width = "100%";
        strengthBar.style.backgroundColor = "green";
        displayText.textContent = "Strength: Strong";
    }
});
