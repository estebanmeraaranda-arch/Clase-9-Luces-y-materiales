const icons = document.querySelectorAll(".model-icon");
const models = document.querySelectorAll(".model-viewer");

icons.forEach(icon => {
  icon.addEventListener("click", () => {
    const target = icon.getAttribute("data-target");

    // Resetear iconos
    icons.forEach(i => i.classList.remove("active", "inactive"));
    icons.forEach(i => i !== icon && i.classList.add("inactive"));
    icon.classList.add("active");

    // Resetear modelos
    models.forEach(m => {
      if (m.id === target) {
        m.classList.add("active");
        m.classList.remove("inactive");
      } else {
        m.classList.remove("active");
        m.classList.add("inactive");
      }
    });
  });
});

// Selección inicial (primer icono)
icons[0].click();
