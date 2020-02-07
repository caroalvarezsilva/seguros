const $formContact = document.querySelector("#contact");
var type = "viaje";
const sendForm = event => {
  event.preventDefault();
  const message = {
    name: document.querySelector("#form-name").value,
    lastname: document.querySelector("#form-lastname").value,
    age: document.querySelector("#form-age").value,
    cellphone: document.querySelector("#form-cellphone").value,
    email: document.querySelector("#form-email").value,
    days: document.querySelector("#form-days").value,

  };
  smtpJS(message);
};

const smtpJS = message => {
  try {
    Email.send({
        // Host : "smtp.elasticemail.com",
        Host : "smtp.gmail.com",
        Username : "guerrero.seguros.app@gmail.com",
        Password : "Guerrero2020",
        To : ['victorguerrerosilva@hotmail.com','caroalvarezsilva@gmail.com'],
        From : "guerrero.seguros.app@gmail.com",
        Subject : "Consulta cotización seguros web",
        Body : "<div style='color: #000000;'><h2>Tipo de seguro solicitado: "+ getTypeTranslation(type) + "</h2>"
        + "<h3>Datos personales</h3>"
        + "<p>Nombre: " +  message.name + "</p>"
        + "<p>Apellido: " +  message.lastname + "<p>"
        + "<p>Edad: " +  message.age + "<p>"
        + "<p>Celular: " +  message.cellphone + "</p>"
        + "<p>Email: " +  message.email + "</p>"
        + "<p>Cantidad de días: " +  message.days + "</p>"
    }).then(
      message => {
        var mailMessage = document.querySelector("#sendFormOk");
        mailMessage.classList.add("mail-sent-ok");
        document.querySelector("#contact").reset();
      }
    );
  } catch (e) {
    alert("No se pudo mandar mail, intentar de nuevo");
  }
};

$formContact.addEventListener("submit", sendForm);

function getTypeTranslation(type) {
  var url = document.URL;
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  type = queryString.split("=")[1];
  var translationType;
  switch (type) {
    case "car":
      translationType = "Autos"
      break;
    case "travel":
      translationType = "Viajes"
      break;
    case "home":
      translationType = "Hogar"
      break;
    case "rent":
      translationType = "Garantía de alquiler"
      break;
    case "heart":
      translationType = "Vida, accidentes personales y salud"
      break;
    case "boat":
      translationType = "Marítimos, embarcaciones"
      break;
    case "business":
      translationType = "Empresariales"
      break;
    case "transport":
      translationType = "Transporte"
      break;
    case "agro":
      translationType = "Agro"
      break;
    case "motobike":
      translationType = "Motos"
      break;
    case "bike":
      translationType = "Bicicletas"
      break;
    case "jetBoat":
      translationType = "Motos de agua"
      break;
    case "workHurt":
      translationType = "Accidentes de trabajo"
      break;
    case "cristals":
      translationType = "Cristales"
      break;
    case "apps":
      translationType = "Vehículos Uber y/o otras aplicaciones"
      break;
    default:
      translationType = "General"

  }
  return translationType;
}
