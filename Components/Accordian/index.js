const accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) => {
  const accordionItems = accordion.querySelectorAll(".accordion__item");
  accordionItems.forEach((accordionItem) => {
    accordionItem.addEventListener("click", () => {
      console.log("clicked");
      const accordionCollapse = accordionItem.querySelector(
        ".accordion__collapse"
      );
      accordionCollapse.classList.toggle("accordion__collapse__expanded");

      const showHide = accordionItem.querySelector(".show__hide");
      if (showHide.textContent === "-") showHide.textContent = "+";
      else if (showHide.textContent === "+") showHide.textContent = "-";
    });
  });
});
