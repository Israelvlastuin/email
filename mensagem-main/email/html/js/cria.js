const form = document.getElementById('create-account-form');
const nameInput = form.querySelector('#name');
const emailInput = form.querySelector('#email');
const passwordInput = form.querySelector('#password');
const passwordConfirmInput = form.querySelector('#password-confirm');

const nameError = form.querySelector('#name-error');
const emailError = form.querySelector('#email-error');
const passwordError = form.querySelector('#password-error');
const passwordConfirmError = form.querySelector('#password-confirm-error');

function clearErrors() {
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    passwordConfirmError.textContent = '';
    nameInput.setAttribute('aria-invalid', 'false');
    emailInput.setAttribute('aria-invalid', 'false');
    passwordInput.setAttribute('aria-invalid', 'false');
    passwordConfirmInput.setAttribute('aria-invalid', 'false');
}

form.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors();

    let valid = true;

    if (!nameInput.value.trim()) {
        nameError.textContent = 'O nome é obrigatório.';
        nameInput.setAttribute('aria-invalid', 'true');
        valid = false;
    }

    const emailValue = emailInput.value.trim();
    if (!emailValue) {
        emailError.textContent = 'O email é obrigatório.';
        emailInput.setAttribute('aria-invalid', 'true');
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        emailError.textContent = 'Por favor, insira um email válido.';
        emailInput.setAttribute('aria-invalid', 'true');
        valid = false;
    }

    if (!passwordInput.value.trim()) {
        passwordError.textContent = 'A senha é obrigatória.';
        passwordInput.setAttribute('aria-invalid', 'true');
        valid = false;
    } else if (passwordInput.value.length < 6) {
        passwordError.textContent = 'A senha deve ter no mínimo 6 caracteres.';
        passwordInput.setAttribute('aria-invalid', 'true');
        valid = false;
    }

    if (!passwordConfirmInput.value.trim()) {
        passwordConfirmError.textContent = 'Confirme sua senha.';
        passwordConfirmInput.setAttribute('aria-invalid', 'true');
        valid = false;
    } else if (passwordInput.value !== passwordConfirmInput.value) {
        passwordConfirmError.textContent = 'As senhas não coincidem.';
        passwordConfirmInput.setAttribute('aria-invalid', 'true');
        valid = false;
    }

    if (valid) {
        alert('Conta criada com sucesso! Você será redirecionado.');
        form.reset();
        nameInput.focus();
        window.location.href = 'code.html';
    }
});
