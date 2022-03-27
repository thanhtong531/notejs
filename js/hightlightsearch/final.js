window.addEventListener("load", function () {
  const input = document.querySelector(".input_search");
  const items = document.querySelectorAll(".dropdown-item");
  input.addEventListener("input", handleHightLightText);
  function handleHightLightText(e) {
    let filter = e.target.value;
    filter = filter.toLowerCase();
    [...items].forEach((item) => {
      const text = item.textContent;
      let index = text.toLowerCase().indexOf(filter);
      if (index >= 0 && text.toLowerCase().includes(filter)) {
        item.innerHTML = `
          ${text.substring(0, index)}<span class="primary">${text.substring(
          index,
          index + filter.length
        )}</span>${text.substring(index + filter.length)}
          `;
      }
    });
  }
});
