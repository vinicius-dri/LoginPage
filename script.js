var eye = document.getElementById("eye");
var eyeslash = document.getElementById("eyeslash");
var field = document.getElementById("field-password");
var email = document.getElementById("field-email");
var loggedIn = document.getElementById("msg-logado");

function showPassword() {
  // ANIMAÇÃO DO OLHO E PREENCHIMENTO DA CAMPO PASSWORD

  if (eye.style.display === "none") {
    eye.style.display = "block";
    eyeslash.style.display = "none";
    field.type = "text";
  } else {
    eye.style.display = "none";
    eyeslash.style.display = "block";
    field.type = "password";
  }
}

document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault(); /* ao clicar no botao a pagina nao será recarregada */

  if (email.value.length == 0) {
    alert('O campo Email está vazio"');
  } else {
    var checkMail = email.value.includes("@"); // gera TRUE ou FALSE

    if (checkMail) {
      if (field.value.length === 0) {
        alert("Digite sua senha!");
      } else {
        if (field.value.length < 5) {
          alert("A senha precisa ter no mínimo 5 caracteres");
          field.value = null;
        } else {
          document.getElementById("msg-logado").innerHTML = "Você está logado!";
        }
      }
    } else {
      alert("Você não digitou um email válido");
    }
  }
});
