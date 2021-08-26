import "./styles/style.scss";

const inputField = document.getElementById("input")! as HTMLInputElement;
const icon = document.getElementById("icon")! as HTMLElement;

const search = () => {
  if (inputField.value !== "") window.location.href = "https://www.google.com/search?q=" + inputField.value;
};

icon.addEventListener("click", () => {
  search();
});

inputField.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") search();
});
