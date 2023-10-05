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
    thElements.forEach((th, index) => {
      if (index !== 0) {
        th.style.width = "200px";
        th.style.backgroundColor = "steelblue";
        th.style.color = "white";
      } else {
        th.style.width = "30px";
      }
    });

    // Create an input element for setting the width
    const widthInput = document.createElement("input");
    widthInput.type = "number";
    widthInput.placeholder = "Enter Width";
    widthInput.style.margin = "10px";
    widthInput.style.padding = "0 10px";
    widthInput.addEventListener("input", () => {
      const newWidth = widthInput.value + "px";
      thElements.forEach((th, index) => {
        if (index !== 0) {
          th.style.width = newWidth;
        }
      });
    });

    // Append the input element to the page
    containerDiv.insertBefore(widthInput, table[0]);

    // Enter your code here
    return event;
  });
})();
