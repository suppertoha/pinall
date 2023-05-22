window.addEventListener('load', function () {


  //! accordion

  document.querySelectorAll(".accordion-start-js_first").forEach((el) => {
    el.classList.remove("open"); // Удаляем класс "open" у всех элементов с классом "accordion-start-js"
    
    el.addEventListener("click", () => {
      const content = el.nextElementSibling;
      let nextAccordion = el.nextElementSibling;
      
      while (nextAccordion && !nextAccordion.classList.contains("accordion-start-js_first")) {
        nextAccordion = nextAccordion.nextElementSibling;
      }
      
      document.querySelectorAll(".accordion-start-js_first").forEach((accordion) => {
        if (accordion !== el) {
          accordion.classList.remove("open"); // Удаляем класс "open" у всех элементов, кроме текущего аккордеона
          accordion.nextElementSibling.classList.remove("open"); // Удаляем класс "open" у всех элементов с классом "accordion-content-js", кроме текущего
        }
      });
      
      el.classList.toggle("open");
      content.classList.toggle("open");
      
      if (nextAccordion && nextAccordion.classList.contains("accordion-content-js_first")) {
        nextAccordion.classList.remove("open");
      }
    });
  });

  document.querySelectorAll(".accordion-start-js").forEach((el) => {
    el.addEventListener("click", () => {
      const content = el.nextElementSibling;
      let nextAccordion = el.nextElementSibling;
      
      while (nextAccordion && !nextAccordion.classList.contains("accordion-start-js")) {
        nextAccordion = nextAccordion.nextElementSibling;
      }
      
      el.classList.toggle("open");
      content.classList.toggle("open");
      
      if (nextAccordion && nextAccordion.classList.contains("accordion-content-js")) {
        nextAccordion.classList.remove("open");
      }
    });
  });

});

