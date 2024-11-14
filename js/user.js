document.getElementById('logout-btn').addEventListener('click', function() {

    localStorage.removeItem('isLoggedIn');

    window.location.href = 'index.html'; 
});
