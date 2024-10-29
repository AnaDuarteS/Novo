function validateForm(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!validateEmail(email)) {
      showError('email-error', 'Por favor, insira um email válido.');
      return;
  }

  if (password === '') {
      showError('password-error', 'A senha não pode ser vazia.');
      return;
  }

  fetch('/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Erro ao fazer login.');
      }
      return response.json();
  })
  .then(data => {
      if (data.success) {
          window.location.href = 'index.html';
      } else {
          showError('password-error', data.message || 'Email ou senha inválidos.');
      }
  })
  .catch(error => {
      console.error('Erro:', error);
      showError('general-error', 'Ocorreu um erro inesperado. Por favor, tente novamente.');
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(elementId, message) {
  const element = document.getElementById(elementId);
  element.textContent = message;
  element.style.display = 'block';
}
