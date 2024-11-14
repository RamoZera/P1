document.addEventListener('DOMContentLoaded', function() {
    const signInButton = document.getElementById('sign-in-btn');
    const loginButton = document.getElementById('login-btn');
    
    if (localStorage.getItem('isLoggedIn') === 'true') {
        if (signInButton) signInButton.style.display = 'none';
        if (loginButton) loginButton.style.display = 'none';
    } else {
        if (signInButton) signInButton.style.display = 'inline-block';
        if (loginButton) loginButton.style.display = 'inline-block';
    }
});
