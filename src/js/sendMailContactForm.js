const $formGeneralContact = document.querySelector("#general-contact");
var type = "viaje";
const sendGeneralForm = event => {
  event.preventDefault();
  const message = {
    name: document.querySelector("#form-email").value,
    message: document.querySelector("#form-message").value,
  };
  smtpJSContact(message);
};

const smtpJSContact = message => {
  try {
    Email.send({
        // Host : "smtp.elasticemail.com",
        Host : "smtp.gmail.com",
        Username : "guerrero.seguros.app@gmail.com",
        Password : "Guerrero2020",
        To : 'caroalvarezsilva@gmail.com',
        From : "guerrero.seguros.app@gmail.com",
        Subject : "Consulta cotización seguros web",
        Body : "<div style='color: #000000;'><h2>Consulta cotización seguro</h2>"
        + "<p>Nombre: " +  message.name + "</p>"
        + "<p>Mensaje: " +  message.message + "<p>"
    }).then(
      message => alert(message)
    );
  } catch (e) {
    alert("No se pudo mandar mail, intentar de nuevo");
  }
};

$formGeneralContact.addEventListener("submit", sendGeneralForm);

document.addEventListener("DOMContentLoaded", function() {
  getUrlParam();
});

function getUrlParam() {
  var url = document.URL;
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  type = queryString.split("=")[1];
}
