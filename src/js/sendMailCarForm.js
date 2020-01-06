const $formContact = document.querySelector("#contact");
var type = "autos";
const sendForm = event => {
  event.preventDefault();
  const message = {
    brand: document.querySelector("#form-brand").value,
    model: document.querySelector("#form-model").value,
    year: document.querySelector("#form-year").value,
    coverage: document.querySelector("#form-coverage").value,
    department: document.querySelector("#form-department").value,
    usage: document.querySelector("#form-usage").value,
    name: document.querySelector("#form-name").value,
    lastname: document.querySelector("#form-lastname").value,
    cellphone: document.querySelector("#form-cellphone").value,
    email: document.querySelector("#form-email").value,
    ci: document.querySelector("#form-ci").value,

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
        To : 'caroalvarezsilva@gmail.com',
        From : "guerrero.seguros.app@gmail.com",
        Subject : "Consulta cotización seguros web",
        Body : "<div style='color: #000000;'><h2>Tipo de seguro solicitado: "+ getTypeTranslation(type) + "</h2>"
        + "<h3>Datos del auto</h3>"
        + "<p>Marca: " +  message.brand + "</p>"
        + "<p>Modelo: " +  message.model + "</p>"
        + "<p>Cobertura: " +  message.coverage + "</p>"
        + "<p>Zona de circulaci&oacute;n: " +  message.department + "</p>"
        + "<p>Tipo de uso: "+ message.usage + "</p>"
        + "<p>&nbsp;</p>"
        + "<h3>Datos personales</h3>"
        + "<p>Nombre: " +  message.name + "</p>"
        + "<p>Apellido: " +  message.lastname + "<p>"
        + "<p>Celular: " +  message.cellphone + "</p>"
        + "<p>Email: " +  message.email + "</p>"
        + "<p>C&eacute;dula de identidad: "+  message.ci + "</p></div>"
    }).then(
      message => alert(message)
    );
  } catch (e) {
    alert("No se pudo mandar mail, intentar de nuevo");
  }
};

$formContact.addEventListener("submit", sendForm);

document.addEventListener("DOMContentLoaded", function() {
  getUrlParam();
});
function getUrlParam() {
  var url = document.URL;
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  type = queryString.split("=")[1];
}

function getTypeTranslation(type) {
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
