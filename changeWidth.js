(function () {
  "use strict";
  kintone.events.on("app.record.index.show", (event) => {
    const records = event.records;
    const containerDiv = document.getElementById("view-list-data-gaia");
    const table = containerDiv.querySelectorAll("table");
    const tHead = table[0].querySelector("thead");
    const thElements = tHead.querySelectorAll("th");

    // Remove the previous input element (if it exists)
    const existingInput = containerDiv.querySelector("input[type='number']");
    if (existingInput) {
      existingInput.remove();
    }

    // Set the default width for th elements to "200px"
    thElements.forEach((th) => {
      th.style.width = "200px";
    });

    // Create an input element for setting the width
    const widthInput = document.createElement("input");
    widthInput.type = "number";
    widthInput.placeholder = "Enter width";
    widthInput.style.marginLeft = "20px";
    widthInput.addEventListener("input", () => {
      const newWidth = widthInput.value + "px";
      thElements.forEach((th) => {
        th.style.width = newWidth;
      });
    });

    // Append the input element to the page
    containerDiv.insertBefore(widthInput, table[0]);

    // Enter your code here
    return event;
  });
})();