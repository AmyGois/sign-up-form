
/* Compare chosen password with the guidelines to validate it */

const passwordInput = document.getElementById('user-password');

passwordInput.addEventListener('input', verifyPassword);

function verifyPassword() {
    const chosenPassword = passwordInput.value;
    const passwordGuideline1 = document.getElementById('password-guideline-1');
    const passwordGuideline2 = document.getElementById('password-guideline-2');
    const passwordGuideline3 = document.getElementById('password-guideline-3');
    const passwordGuideline4 = document.getElementById('password-guideline-4');

    /* Check length of password */
    if(chosenPassword.length >= passwordInput.getAttribute('minlength')) {
        
        passwordGuideline1.classList.remove('form-password-guideline-invalid');
        passwordGuideline1.classList.add('form-password-guideline-valid');

    } else if(passwordGuideline1.className === 'form-password-guideline-valid'){
        passwordGuideline1.classList.remove('form-password-guideline-valid');
        passwordGuideline1.classList.add('form-password-guideline-invalid');
    }

    /* Check for uppercase character in password */

    if(/[A-Z]/.test(chosenPassword)) {
        passwordGuideline2.classList.remove('form-password-guideline-invalid');
        passwordGuideline2.classList.add('form-password-guideline-valid');

    } else if(passwordGuideline2.className === 'form-password-guideline-valid'){
        passwordGuideline2.classList.remove('form-password-guideline-valid');
        passwordGuideline2.classList.add('form-password-guideline-invalid');
    }

    /* Check for lowercase character in password */

    if(/[a-z]/.test(chosenPassword)) {
        passwordGuideline3.classList.remove('form-password-guideline-invalid');
        passwordGuideline3.classList.add('form-password-guideline-valid');

    } else if(passwordGuideline3.className === 'form-password-guideline-valid'){
        passwordGuideline3.classList.remove('form-password-guideline-valid');
        passwordGuideline3.classList.add('form-password-guideline-invalid');
    }

    /* Check for lowercase character in password */

    if(/\d/.test(chosenPassword)) {
        passwordGuideline4.classList.remove('form-password-guideline-invalid');
        passwordGuideline4.classList.add('form-password-guideline-valid');

    } else if(passwordGuideline4.className === 'form-password-guideline-valid'){
        passwordGuideline4.classList.remove('form-password-guideline-valid');
        passwordGuideline4.classList.add('form-password-guideline-invalid');
    }

    /* Check that all parameters are met for a valid password */

    if(chosenPassword.length >= passwordInput.getAttribute('minlength') && /[A-Z]/.test(chosenPassword) && /[a-z]/.test(chosenPassword) && /\d/.test(chosenPassword)) {
        passwordInput.classList.remove('password-error');
        
    } else if(passwordInput.className !== 'password-error') {
        passwordInput.classList.add('password-error');
    }
}

/* Check if both passwords are the same */

const passwordConfirmInput = document.getElementById('user-password-confirm');

passwordConfirmInput.addEventListener('input', checkPasswordMatch);

function checkPasswordMatch() {
    const passwordsMatchmsg = document.getElementById('passwords-matchmsg');

    /* When both passwords match */

    if(passwordConfirmInput.value === passwordInput.value) {
        if(passwordConfirmInput.className === 'password-error') {
            passwordConfirmInput.classList.remove('password-error');
        }

        if(passwordsMatchmsg.className === 'form-passwords-match-false') {
            passwordsMatchmsg.classList.remove('form-passwords-match-false');
            passwordsMatchmsg.classList.add('form-passwords-match-true');
        }

        /* When both passwords don't match */
    } else {
        if(passwordConfirmInput.className !== 'password-error') {
            passwordConfirmInput.classList.add('password-error');
        }

        if(passwordsMatchmsg.className === 'form-passwords-match-true') {
            passwordsMatchmsg.classList.remove('form-passwords-match-true');
            passwordsMatchmsg.classList.add('form-passwords-match-false');
        }
    }
}
