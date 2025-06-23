document.getElementById("compose-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede envio imediato
  
    const form = this;
  
    // Aguarda 2 segundos para enviar
    setTimeout(() => {
      form.submit(); // Envia o formulário após o delay
    }, 2000); // tempo em milissegundos (2000ms = 2s)
  });
  