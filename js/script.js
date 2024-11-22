document.addEventListener("DOMContentLoaded", () => {
  // Alternar menú desplegable
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.add("oculto");
    sidebar.classList.add("open");
    if (sidebar.classList.contains("open")) {
      sidebar.style.transform = "translateX(0)";
    } else {
      sidebar.style.transform = "translateX(-100%)";
    }
  });

  // Animación del texto principal
  const text = "Dot Dager";
  let index = 0;
  const programmingText = document.getElementById("programming-text");

  function typeText() {
    if (index < text.length) {
      programmingText.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 300);
    }
  }
  typeText();

  // Animaciones de pepinos
  const cucumberContainer = document.getElementById("cucumber-container");

  // Función para crear pepinos animados
  function createCucumber() {
    const cucumber = document.createElement("div");
    cucumber.classList.add("cucumber");

    // Posición aleatoria
    cucumber.style.left = Math.random() * 100 + "vw";
    cucumber.style.top = Math.random() * 100 + "vh";

    cucumberContainer.appendChild(cucumber);

    // Elimina el pepino después de 6 segundos
    setTimeout(() => {
      cucumber.remove();
    }, 7000);
  }

  sidebar.addEventListener("click", () => {
    if (sidebar.classList.contains("open") && menuToggle.classList.contains("oculto")) {
      menuToggle.classList.remove("oculto");
      sidebar.classList.remove("open");
    }
  });

  // Genera pepinos periódicamente
  setInterval(createCucumber, 1000);

});