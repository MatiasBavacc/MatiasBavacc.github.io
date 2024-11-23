document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const sections = document.querySelectorAll(".section");
  const counterDisplay = document.getElementById("counter");

  let cucumberCount = 0;
  let currentImage = "url('')";

  // Alternar menú desplegable
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.add("oculto");
    sidebar.classList.add("open");
    if (sidebar.classList.contains("open")) {
      sidebar.style.transform = "translateX(0)";
    } else {
      sidebar.style.transform = "translateX(-100%)";
    }
  });

  // Resaltar sección seleccionada
  sections.forEach((section) => {
    section.addEventListener("click", () => {
      sections.forEach((s) => s.classList.remove("active"));
      section.classList.add("active");

      switch (section.id) {
        case "music":
          currentImage = "url('img/pepinom.png')";
          break;
        case "philosophy":
          currentImage = "url('img/pepinof.png')";
          break;
        case "cats":
          currentImage = "url('img/pepinoc.png')";
          break;
      }
    });
  });

  // Crear y manejar pepinos
  function createCucumber() {
    const cucumber = document.createElement("div");
    cucumber.classList.add("cucumber");
    cucumber.style.left = Math.random() * 90 + "vw";
    cucumber.style.top = Math.random() * 80 + "vh";

    cucumber.addEventListener("click", () => {
      cucumberCount++;
      counterDisplay.textContent = cucumberCount;
      cucumber.style.backgroundImage = currentImage;
      setTimeout(() => cucumber.remove(), 800);
    });

    document.body.appendChild(cucumber);

    setTimeout(() => cucumber.remove(), 5000);
  }

  setInterval(createCucumber, 1000);

  // Reiniciar contador tras 30 segundos
  setTimeout(() => {
    alert(`Tocaste ${cucumberCount} pepinos en 30 segundos.`);
    cucumberCount = 0;
    counterDisplay.textContent = cucumberCount;
  }, 30000);

  sidebar.addEventListener("click", () => {
    if (sidebar.classList.contains("open") && menuToggle.classList.contains("oculto")) {
      menuToggle.classList.remove("oculto");
      sidebar.classList.remove("open");
    }
  });
});
