const mainBody = document.getElementById("main-body");
const afterClose = document.getElementById("after-close");
const modal = document.getElementById("myModal");
document.getElementById("yesButton").addEventListener("click", function () {
  modal.classList.remove("hidden"); // Show the modal
  mainBody.classList.add("hidden");
});

document.getElementById("closeModal").addEventListener("click", function () {
  modal.classList.add("hidden"); // Hide the modal
  afterClose.classList.remove("hidden");
  mainBody.classList.add("hidden");
  setTimeout(function () {
    location.reload(); // Reload the page
  }, 2000);
});

const noButton = document.getElementById("noButton");

noButton.addEventListener("mouseover", function () {
  const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = "absolute";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
});
