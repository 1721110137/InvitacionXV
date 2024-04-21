function updateCountdown() {
    const eventDate = new Date('2024-07-27');
    const currentDate = new Date();
    const difference = eventDate - currentDate;
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById('countdown').innerHTML = `${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
  }

  function redirectToMisa() {
    window.open('https://www.google.com.mx/maps/place/Parroquia+Sta.+Mar%C3%ADa+Nativitas/@20.0390059,-98.2998181,17z/data=!4m10!1m2!2m1!1siglesia+santa+maria+nativitas+cuautepec+hidalgo!3m6!1s0x85d05a1d2e1dbb11:0xf23eac89f21413fd!8m2!3d20.038454!4d-98.2974964!15sCi9pZ2xlc2lhIHNhbnRhIG1hcmlhIG5hdGl2aXRhcyBjdWF1dGVwZWMgaGlkYWxnb1oxIi9pZ2xlc2lhIHNhbnRhIG1hcmlhIG5hdGl2aXRhcyBjdWF1dGVwZWMgaGlkYWxnb5IBBmNodXJjaJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSSmFtRmxXRGQzUlJBQuABAA!16s%2Fg%2F11c2lcy125?entry=ttu', '_blank');
}

function redirectToEvento() {
    window.open('https://www.google.com.mx/maps/place/Sal%C3%B3n+Diamante/@20.035087,-98.3177474,17z/data=!3m1!4b1!4m6!3m5!1s0x85d050ac1115e1b5:0xc554bc204b751036!8m2!3d20.035082!4d-98.3151725!16s%2Fg%2F1pp2x8_kb?entry=ttu', '_blank');
}


function mostrarFormulario() {
    document.getElementById('formulario').style.display = 'block';
    }

function confirmarAsistencia() {
    var nombre = document.getElementById('nombre').value;
    var asistentes = document.getElementById('asistentes').value;  
    alert('¡Datos confirmados!\n¡No faltes!\nNombre: ' + nombre + '\nNúmero de acompañantes: ' + asistentes);
    return true;
  }
  
  setInterval(updateCountdown, 1000);
  
  updateCountdown();
  