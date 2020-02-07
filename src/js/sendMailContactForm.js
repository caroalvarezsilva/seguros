const $formGeneralContact = document.querySelector("#general-contact");
const sendGeneralForm = event => {
  event.preventDefault();
  const message = {
    name: document.querySelector("#form-email").value,
    message: document.querySelector("#form-message").value,
  };
  smtpJSContact(message);
};

const smtpJSContact = message => {
  var spinner = document.querySelector("#spinner");
  //spinner.classList.remove("visibility-hidden");
  spinner.classList.add("visibility-show");
  try {
    Email.send({
        // Host : "smtp.elasticemail.com",
        Host : "smtp.gmail.com",
        Username : "guerrero.seguros.app@gmail.com",
        Password : "Guerrero2020",
        To : ['victorguerrerosilva@hotmail.com','caroalvarezsilva@gmail.com'],
        From : "guerrero.seguros.app@gmail.com",
        Subject : "Consulta cotización seguros web",
        Body : "<div style='color: #000000;'><h2>Consulta cotización seguro</h2>"
        + "<p>Nombre: " +  message.name + "</p>"
        + "<p>Mensaje: " +  message.message + "<p>"
    }).then(
      message => {
      spinner.classList.add("visibility-no-show");
      var mailMessage = document.querySelector("#sendContactMailOk");
      spinner.classList.add("visibility-hidden");
      document.querySelector("#general-contact").reset();
      mailMessage.classList.add("mail-sent-ok");
      }
    );
  } catch (e) {
    alert("No se pudo mandar mail, intentar de nuevo");
  }
};

$formGeneralContact.addEventListener("submit", sendGeneralForm);
