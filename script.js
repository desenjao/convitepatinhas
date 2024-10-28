function mostrarConfirmacao() {
    if (confirm("Tem certeza que deseja colaborar com o projeto Patinhas Felizes? Ao confirmar, você entrará em um processo de análise.")) {
      // Aqui você pode adicionar o código para redirecionar para o WhatsApp ou realizar outras ações
      alert("Você será redirecionado para o grupo do WhatsApp.");
       window.location.href = "https://chat.whatsapp.com/F1IMc8d2GWFH7s3tpdQXgd"; // Substitua por seu link do WhatsApp
    } else {
      alert("Operação cancelada.");
    }
  }