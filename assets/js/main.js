const button = document.querySelector("button");
const dialog = document.querySelector("dialog");
const popup = document.querySelector(".popup-box");

button.addEventListener("click", () => {
  dialog.showModal();
  dialog.style.transform = "translate(-50%, -50%)";
  setTimeout(() => {
    dialog.style.opacity = 1;
    dialog.style.transform += "scale(1)";
    dialog.style.left = "50%";
    dialog.style.top = "50%";
  }, 0);
});

dialog.addEventListener("close", () => {
  dialog.style.opacity = 0;
  dialog.style.transform = "translate(-50%, -50%) scale(0)";
  console.log(dialog.returnValue);
});

var isDragging = false;
var offsetX, offsetY;

popup.addEventListener("mousedown", function (e) {
  isDragging = true;
  offsetX = e.clientX - dialog.getBoundingClientRect().left;
  offsetY = e.clientY - dialog.getBoundingClientRect().top;
});

document.addEventListener("mousemove", function (e) {
  if (isDragging) {
    dialog.style.transform = "translate(0%, 0%) scale(1)";
    dialog.style.left = e.clientX - offsetX + "px";
    dialog.style.top = e.clientY - offsetY + "px";
    dialog.style.transition = "none";
  }
});

document.addEventListener("mouseup", function () {
  isDragging = false;
  dialog.style.transition = "opacity 0.4s ease, transform 0.4s ease";
});
