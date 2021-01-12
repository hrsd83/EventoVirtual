// const paragraph
const titleWebinar = document.getElementById('webinar');
const humanizar = document.querySelector('.humanizar');
const latam = document.querySelector('.latam');
const day = document.querySelector('.day');
const articleOne = document.querySelector('.article-one');
const articleTwo = document.querySelector('.article-two');
const articleThree = document.querySelector('.article-three');
const articleFour = document.querySelector('.article-four');
const articleFive = document.querySelector('.article-five');



// funtion paragraph
function paragraph(){
  titleWebinar.textContent = 'WEBINAR';
  humanizar.textContent = 'El reto de humanizar el CX financieron en 2021';
  latam.textContent = 'La experiencia de un Unicornio de LATAM';
  day.textContent = 'MIERCOLES 16 DE DICIEMBRE|17 HS (HORARIO DE QUITO)';
  articleOne.textContent = 'Te invitan este webinar, donde trataremos la tematica de como humanizar la experiencia del cliente de Banca y Seguros en el nuevo entorno digital.';
  articleTwo.textContent = 'Ademas podremos conocer las estrategias que aplico LOREM para generar una experiencia memorable para sus clientes, mientras se convertia en el gran Unicornio de Latam';
  articleThree.textContent = 'Escucha de primera mano la voz de nuestros especialistas:';
  articleFour.textContent = 'Participa  e inspírate  para innovar y mejorar la interacción entre clientes y marcas con historias de éxito de empresas del ámbito financiero en América Latina.';
  articleFive.textContent = '¡Te esperamos!';
}
paragraph()
