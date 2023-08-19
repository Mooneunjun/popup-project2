const button = document.querySelector("button");
const dialog = document.querySelector("dialog");

button.addEventListener("click", () => {
  dialog.showModal();
  setTimeout(() => {
    dialog.style.opacity = 1;
    dialog.style.transform = "translate(-50%, -50%) scale(1)";
  }, 0);
});

dialog.addEventListener("close", () => {
  dialog.style.opacity = 0;
  dialog.style.transform = "translate(-50%, -50%) scale(0)";
  console.log(dialog.returnValue);
});
