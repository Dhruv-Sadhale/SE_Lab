document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    // Clear any previous error message
    errorMessage.textContent = '';

    // Simple front-end validation
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return;
    }

    // Fake registration success
    alert(`Registration successful! \nUsername: ${username} \nEmail: ${email}`);
    document.getElementById('registrationForm').reset();
});
