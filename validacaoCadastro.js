function validateForm(event) {
    event.preventDefault(); 
  
    const name = document.getElementById("Name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    const isNameValid = name.length >= 6;
    const isEmailValid = validateEmail(email); 
    const isPasswordValid = password.length >= 6;
  
    const validationErrors = []; 
  
    if (!isNameValid) {
      validationErrors.push("Nome deve ter pelo menos 6 caracteres.");
    }
  
    if (!isEmailValid) {
      validationErrors.push("Email inválido.");
    }
  
    if (!isPasswordValid) {
      validationErrors.push("Senha deve ter pelo menos 6 caracteres.");
    }
  
    if (validationErrors.length > 0) {
      alert("Por favor, corrija os seguintes erros:\n" + validationErrors.join("\n"));
      return; 
    }
  
    fetch('/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ name, email, password }) 
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("Cadastro realizado com sucesso!");
      } else {
        alert(data.message || "Ocorreu um erro durante o cadastro. Tente novamente.");
      }
    })
    .catch(error => {
      console.error("Erro ao enviar dados:", error);
      alert("Erro inesperado. Por favor, tente novamente mais tarde.");
    });
  }
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  document.getElementById("Cadastro").addEventListener("submit", validateForm);
