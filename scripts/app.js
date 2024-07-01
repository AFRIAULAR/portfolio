//Activar y desactivar las tabs
const addEventClickTabs = (elements, relatedElements) => {
  elements.forEach((element, index) => {
    element.addEventListener('click', () => {
      elements.forEach(item => item.classList.remove('active'));
      relatedElements.forEach(item => item.classList.remove('active'));
      element.classList.add('active');
      relatedElements[index].classList.add('active');
    });
  });
};

const tabs = document.querySelectorAll('.top-tab');
const fileTabs = document.querySelectorAll('.file-tab');

addEventClickTabs(tabs, fileTabs);
addEventClickTabs(fileTabs, tabs);

// Mostrar el contenido de las tabs
document.addEventListener('DOMContentLoaded', function () {
  const content = document.getElementById('content');

  const tabContentMap = {
    aboutTab: `
      <p class="p-about"><span class="span-about">1</span>Hola, soy Africa Aular, soy programadora full stack con especialidad en front-end.</p>
      <p class="p-about"><span class="span-about">2</span>Actualmente, estoy estudiando la tecnicatura en programación y desarrollo de software de simuladores.</p>
      <p class="p-about"><span class="span-about">3</span>Me encanta crear interfaces que sean tanto bonitas como funcionales.</p>
      <p class="p-about"><span class="span-about">4</span>Siempre estoy explorando nuevas tecnologías para mejorar mis habilidades y crear mejores experiencias en la web.</p>
    `,
    projectsTab: `
      <h2>Proyectos</h2>
      <div class="projects">
        <div class="project-card">
          <h3>Bases de Datos y Consultas Básicas</h3>
          <p>Proyecto que incluye el diseño y manejo de dos bases de datos utilizando SQL, junto con consultas básicas para manipular y extraer datos.</p>
          <p>Tecnologías Utilizadas: SQL</p>
          <a href="https://github.com/AFRIAULAR/DataBaseProject" target="_blank"><i class="bi bi-github" style="color:white"></i></a>
        </div>
        <div class="project-card">
          <h3>Solución Coin</h3>
          <p>Desarrollo colaborativo de un juego de casino utilizando PSeInt, enfocado en la lógica de programación y simulación de juegos</p>
          <p>Tecnologías Utilizadas: PSeInt, programación lógica</p>
          <a href="https://github.com/Solucion202UTN/ProyectoIntegrador1" target="_blank"><i class="bi bi-github" style="color:white"></i></a>
        </div>
        <div class="project-card">
          <h3>Flappy Mario</h3>
          <p>Implementación del  juego Flappy Bird, inspirado en Mario Tanooki utilizando la plataforma de desarrollo Construct 2</p>
          <p>Tecnologías Utilizadas:Construct 2, Desarrollo gráfico</p>
          <a href="https://superflappymario.netlify.app/" target="_blank"><i class="bi bi-link" style="color:white"></i></a>
        </div>
      </div>
    `,
    resourcesTab: `
      <h2>Recursos</h2>
      <p>Acá encontrarás una colección de archivos que abordan diversos temas relacionados con la programación y el desarrollo de software.</p>
      <p>Estos recursos están diseñados para proporcionar información práctica y visualmente atractiva sobre conceptos clave y mejores prácticas en la industria.</p>
      <p>Explora estos recursos para ampliar tus conocimientos y mejorar tus habilidades en programación.</p>
      <div class="resources">
        <p>Documentación de Flappy Mario: <a style="color:white" href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:6950d03f-bbb0-4562-93b8-3ef5c5d2b915" download="nombre-archivo-1.pdf"><br>Descargar PDF</a></p>
        <p>Cómo configurar la clave SSH en GIT <a style="color:white" href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:6950d03f-bbb0-4562-93b8-3ef5c5d2b915" download="nombre-archivo-1.pdf"><br>Descargar PDF</a></p>
        
      </div>
    `,
    contactTab: `
    <h2>Contactame</h2>
    <div class="contact-info">
      <p><a href="mailto:aularafrica@gmail.com" style="color:white">aularafrica@gmail.com</a></p>
      <p><a href="https://www.linkedin.com/in/africaaular/" style="color:white">LinkedIn</a></p>
      <p><a href="https://github.com/AFRIAULAR" style="color:white">GitHub</a></p>
    </div>
  `,
  };

  const tabIds = Object.keys(tabContentMap);

  tabIds.forEach((tabId, index) => {
    const tab = document.getElementById(tabId);
    const topTab = document.querySelector(`.top-tab:nth-child(${index + 1})`);

    if (tab) {
      tab.addEventListener('click', () => {
        content.innerHTML = tabContentMap[tabId];
      });
    }

    if (topTab) {
      topTab.addEventListener('click', () => {
        content.innerHTML = tabContentMap[tabId];
      });
    }
  });
});
