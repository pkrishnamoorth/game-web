document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        // This example uses a simple client-side authentication for demonstration purposes.
        // In a real application, you should send the credentials to a backend for verification.
        const user = {
            username: 'admin',
            password: 'password123'
        };

        if (username === user.username && password === user.password) {
            sessionStorage.setItem('isLoggedIn', 'true');
            loginMessage.textContent = 'Login successful!';
            loginMessage.style.color = 'green';
            // Redirect to the home page
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            loginMessage.textContent = 'Invalid username or password';
            loginMessage.style.color = 'red';
        }
    });
});
