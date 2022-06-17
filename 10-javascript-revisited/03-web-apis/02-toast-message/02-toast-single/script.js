document.querySelector("button").addEventListener("click", () => {
  nativeToast({
    message: "Siemanko - Jestes AWESOME !",
    position: "center",
    rounded: true,
    timeout: false,
    type: "success",
    closeOnClick: false,
    elements: [createElement()]
  });
});

function createElement() {
  const element = document.createElement("div");
  const child = document.createElement("form");
    const input = document.createElement("input");
    const button = document.createElement("button");
    button.innerText = "Send";
    button.addEventListener("click", () => {
        nativeToast({
            message: input.value,
            position: "center",
            rounded: true,
            timeout: false,
            type: "success",
            closeOnClick: true,
            elements: [createElement()]
        });
    });
    input.placeholder = "Wpisz coś...";
    input.type = "text";
    child.appendChild(input);
    child.appendChild(button);
    element.appendChild(child);

  return element;
}
