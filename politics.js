const menu=document.querySelector('#mobile-menu');
const menuLinks=document.querySelector('.navbar__menu');
//Display Mobile Menu
const mobileMenu = () => {
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');
};
menu.addEventListener('click',mobileMenu);
// Elements
const signUpBtn = document.getElementById('signUpBtn');
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');
const showSignIn = document.getElementById('showSignIn');
const showSignUp = document.getElementById('showSignUp');

// Show Sign Up Form
signUpBtn.addEventListener('click', () => {
    signUpForm.classList.remove('hidden');
    signInForm.classList.add('hidden');
});

// Switch to Sign In Form
showSignIn.addEventListener('click', (e) => {
    e.preventDefault();
    signInForm.classList.remove('hidden');
    signUpForm.classList.add('hidden');
});

// Switch to Sign Up Form
showSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    signUpForm.classList.remove('hidden');
    signInForm.classList.add('hidden');
});