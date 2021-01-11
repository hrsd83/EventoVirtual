'use strict'
// Se crea la const de btn-send
const btnSend = document.querySelector('#btn-send');
// Se crea las const para los inputs
const firtsName = document.querySelector('#name');
const lastName = document.querySelector('#last_name');
const mail= document.querySelector('#mail');
const countries = document.querySelector('#countries');
const phone = document.querySelector('#phone');
const work = document.querySelector('#work');


// Array de todos los datos
let alldata = [];

// Se crea la funtion para guardar datos del formulario
function saveData(){
  // Validamos
  validate()

  // Obtener datos
  obtenerDatos()

  // array de datos
  let data= [];

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
    let arjson = JSON.stringify(alldata);
    
  // Almacenamos los datos en la BD Local
    localStorage.setItem('frm',arjson );
}
 
// Se realiza la funcion para validar error
let validate = () => {
    let inputsRequired = document.querySelectorAll('#frm-register [required]');
    let error = false;

    for(let i = 0; i < inputsRequired.length; i++ ){
      if(inputsRequired[i].value == '') {
          inputsRequired[i].classList.add('input-error');
          error = true;
      }else{
          inputsRequired[i].classList.remove('input-error');
      }
    }
    return error;
};
// Funcion para limpiar el formulario
  let clean =()=>{
  firtsName.value = '';
  lastName.value = '';
  mail.value = '';
  countries.value = '';
  phone.value = '';
  work.value = '';
}
// Se crea funcion para obtener datos
let obtenerDatos = () =>{
  let error = validate();
  
    if (error) {
      Swal.fire({
        title:'Sus datos no se pudieron enviar',
        text:'Por favor revise los campos resaltados',
        icon: 'warning' 
      });
    }   else {
      Swal.fire({
        title:'Proceso realizado con exito',
        text:'Sus datos se enviaron satisfactoriamente',
        icon: 'success' 
      }).then(() => {
        clean();
      }); 
  }
};

btnSend.addEventListener('click', saveData);
