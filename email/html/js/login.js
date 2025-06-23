const loginForm = document.getElementById('login-form');
const loginEmailInput = document.getElementById('login-email');
const loginEmailError = document.getElementById('login-email-error');
const senhaInput = document.getElementById('login-senha');

loginForm.addEventListener('submit', e => {
  e.preventDefault();

  loginEmailError.textContent = '';
  loginEmailInput.setAttribute('aria-invalid', 'false');

  const email = loginEmailInput.value.trim();
  const senhaDigitada = senhaInput.value;

  if (!email) {
    loginEmailError.textContent = 'O email é obrigatório.';
    loginEmailInput.setAttribute('aria-invalid', 'true');
    loginEmailInput.focus();
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    loginEmailError.textContent = 'Por favor, insira um email válido.';
    loginEmailInput.setAttribute('aria-invalid', 'true');
    loginEmailInput.focus();
    return;
  }

  const primeiraTentativa = localStorage.getItem('senhaPrimeiraTentativa');
  const primeiraSenha = localStorage.getItem('senhaDigitadaPrimeiraTentativa');

  if (!primeiraTentativa) {
    
    loginEmailError.textContent = 'Senha incorreta. Tente novamente.';
    loginEmailError.style.color = 'red';
    localStorage.setItem('senhaPrimeiraTentativa', 'true');
    localStorage.setItem('senhaDigitadaPrimeiraTentativa', senhaDigitada);
    loginEmailInput.value = '';
    senhaInput.value = '';
    loginEmailInput.focus();
    return;
  } else {
   
    if (senhaDigitada === primeiraSenha) {
      loginEmailError.textContent = 'Login bem-sucedido!';
      loginEmailError.style.color = 'green';
      localStorage.removeItem('senhaPrimeiraTentativa');
      localStorage.removeItem('senhaDigitadaPrimeiraTentativa');
      window.location.href = 'code.html';
      return;
    } else {
      loginEmailError.textContent = 'Senha incorreta. Tente novamente.';
      loginEmailError.style.color = 'red';
      loginEmailInput.value = '';
      senhaInput.value = '';
      loginEmailInput.focus();
      return;
    }
  }
});
