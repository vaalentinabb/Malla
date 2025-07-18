document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  function actualizarBloqueos() {
    ramos.forEach(ramo => {
      const prereq = ramo.dataset.prereq;
      if (prereq && !localStorage.getItem(`ramo-${prereq}`)) {
        ramo.classList.add("bloqueado");
      } else {
        ramo.classList.remove("bloqueado");
      }
    });
  }

  actualizarBloqueos();

  ramos.forEach(ramo => {
    const id = ramo.dataset.id;
    if (localStorage.getItem(`ramo-${id}`)) {
      ramo.classList.add("aprobado");
    }

    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("bloqueado")) return;
      ramo.classList.toggle("aprobado");
      if (ramo.classList.contains("aprobado")) {
        localStorage.setItem(`ramo-${id}`, "aprobado");
      } else {
        localStorage.removeItem(`ramo-${id}`);
      }
      actualizarBloqueos();
    });
  });
});
