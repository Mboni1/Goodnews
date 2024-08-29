document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.getElementById('signInForm');
    const registerForm = document.getElementById('registerForm');
    const signInBtn = document.getElementById('signInBtn');
    const registerBtn = document.getElementById('registerBtn');

    signInBtn.addEventListener('click', function() {
        signInForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        signInBtn.style.backgroundColor = '#0056b3';
        registerBtn.style.backgroundColor = '#007BFF';
    });

    registerBtn.addEventListener('click', function() {
        registerForm.classList.remove('hidden');
        signInForm.classList.add('hidden');
        registerBtn.style.backgroundColor = '#0056b3';
        signInBtn.style.backgroundColor = '#007BFF';
    });
});