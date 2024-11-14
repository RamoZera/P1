document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    localStorage.setItem('isLoggedIn', 'true');  

    window.location.href = 'user.html'; 
});
