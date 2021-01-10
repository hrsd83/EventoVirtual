


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
    localStorage.setItem('frm',arjson ) 
}


// Validar todos los campos
function validate(){
  // todos los campos
  let name = document.getElementById('name').value;
  let lastName = document.getElementById('last_name').value;
  let mail = document.getElementById('mail').value;
  let countries = document.getElementById('countries').value;
  let phone = document.getElementById('phone').value;
  let work = document.getElementById('work').value;

  // Validamos el nombre
  if(name.length < 2){
    alert('Falta el nombre');
    return false;
  }
  // Validamos el apellido
  if(lastName.length < 2){
    alert('Falta el apellido');
    return false;
  }
  // Validamos el email
  if(mail.length < 10){
    alert('Falta el email');
    return false;
  }
  // Validamos el pais
  if(paises.length < 5){
    alert('Falta el pais');
    return false;
  }
  // Validamos el telefono
  if(phone.length < 1){
    alert('Falta el pais');
    return false;
  }
    // Validamos el trabajo
    if(work.length < 1){
      alert('Falta el puesto de trabajo');
      return true
    }

}
