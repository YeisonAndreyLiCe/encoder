let outputContainer = document.getElementById("output-container");
let encryptButton = document.getElementById("encrypt");
let decryptButton = document.getElementById("decrypt");
let copyButton = document.getElementById("copy");

const keys = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };

const encryptMessage = () => {
  let output = "";
  let inputMessage = document.getElementById("input-message").value;
  for (let letter of inputMessage) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      output += keys[letter];
    } else {
      output += letter;
    }
  }
  insertOutput(output);
  document.getElementById("input-message").value = "";
};

const decryptMessage = () => {
  let inputMessage = document.getElementById("input-message").value;
  let outputMessage = inputMessage
    .replace(/ai+/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  insertOutput(outputMessage);
  document.getElementById("input-message").value = "";
};

const insertOutput = (message) => {
  outputContainer.innerHTML = "";
  outputContainer.appendChild(document.createElement("p"));
  outputContainer.lastChild.innerHTML = message;
  outputContainer.appendChild(document.createElement("button"));
  outputContainer.lastChild.innerHTML = "Copy";
  outputContainer.lastChild.setAttribute("id", "copy");
  outputContainer.lastChild.setAttribute("class","btn btn-lg flex-fill p-3 bg-white");
  outputContainer.lastChild.addEventListener("click", copyOutput);
};

const copyOutput = () => {
  let output = outputContainer.firstChild.innerHTML;
  navigator.clipboard.writeText(output);
};

encryptButton.addEventListener("click", encryptMessage);
decryptButton.addEventListener("click", decryptMessage);
