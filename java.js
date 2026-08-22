function handleYes() {
  document.getElementById("question-screen").classList.add("hidden");
  document.getElementById("main-content").classList.remove("hidden");
}

function handleNo() {
  const noBtn = document.getElementById("no-btn");
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
  noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
}
