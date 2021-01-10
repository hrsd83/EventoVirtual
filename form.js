


// Array de todos los datos
let alldata = []

// Se crea la funtion para guardar datos del formulario
function saveData(){
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