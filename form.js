
const btnSend = document.querySelector('#btn-send');

// Array de todos los datos
let alldata = []

// Se crea la funtion para guardar datos del formulario
function saveData(){
  // Validamos
  validate()
  // array de datos
  data= [];

  // se agregan valores al array
    data.push(document.getElementById('name').value);
    data.push(document.getElementById('last_name').value);
    data.push(document.getElementById('mail').value);
    data.push(document.getElementById('countries').value);
    data.push(document.getElementById('phone').value);
    data.push(document.getElementById('work').value);

  // Se almacena el array dentro de allDatos
    alldata.push(data);

  // Convertimos el array alldata a un JSON
    arjson = JSON.stringify(alldata);
    
  // Almacenamos los datos en la BD Local
    localStorage.setItem('frm',arjson );

  // Borramos los campos del formulario
    borrarCampos();
}


// Validar todos los campos
function validate(){
  // todos los campos
  name = document.getElementById('name').value;
  lastName = document.getElementById('last_name').value;
  mail = document.getElementById('mail').value;
  countries = document.getElementById('countries').value;
  phone = document.getElementById('phone').value;
  work = document.getElementById('work').value;

  // Validamos el nombre
  if(name.length < 2){
    Swal.fire({
      icon: 'error',
      title: 'Disculpa...',
      text: 'Completa el nombre!'
    })
    return false;
  }
  // Validamos el apellido
  if(lastName.length < 2){
    Swal.fire({
      icon: 'error',
      title: 'Disculpa...',
      text: 'Completar el apellido!'
      
    })
    return false;
  }
  // Validamos el email
  if(mail.length < 10){
    Swal.fire({
      icon: 'error',
      title: 'Disculpa...',
      text: 'Completar el email!'
    })
    return false;
  }
  // Validamos el pais
  if(countries.length < 1){
    Swal.fire({
      icon: 'error',
      title: 'Disculpa...',
      text: 'Completar el pais!'
    })
    return false;
  }
  // Validamos el telefono
  if(phone.length < 1){
    Swal.fire({
      icon: 'error',
      title: 'Disculpa...',
      text: 'Completar el teléfono!'
    })
    return false;
  }
    // Validamos el trabajo
    if(work.length < 1){
      Swal.fire({
        icon: 'error',
        title: 'Disculpa...',
        text: 'Completar el trabajo!'
      })
      return true
    }
}

// Funcion para borrar los campos

function borrarCampos(){
  // Se colocan los campos vacios
  name.value = '';
  lastName.value = '';
  mail.value = '';
  countries.value = '';
  phone.value = '';
  work.value = '';
}
btnSend.addEventListener('click',validate);

