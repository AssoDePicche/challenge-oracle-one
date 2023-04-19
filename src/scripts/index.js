import encrypt from "./modules/encrypt.js";
import decrypt from "./modules/decrypt.js";

const copyToClipboard = document.getElementById("clipboard");

const output = document.getElementById("output");

const outputPlaceholder = document.querySelector(".output--empty");

const buttons = document.querySelectorAll("button");

function setOutput(message) {
  copyToClipboard.style.display = "block";

  output.style.display = "block";

  outputPlaceholder.style.display = "none";

  output.innerHTML = "";

  output.append(message);
}

buttons.forEach((button) => button.addEventListener("click", () => {
  const id = button.id;

  if ((id !== "encrypt") && (id !== "decrypt")) {
    return;
  }

  let message = document.getElementById("message").value;

  let result = (id === "encrypt") ? encrypt(message) : decrypt(message);

  setOutput(result);
}));

copyToClipboard.addEventListener("click", () => {
  navigator.clipboard.writeText(output.innerHTML);
});
