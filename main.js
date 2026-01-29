let auto = false;
let autoInterval;

function createFlower(x, y) {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.innerHTML = "🌸";

  flower.style.left = x + "px";
  flower.style.top = y + "px";

  document.body.appendChild(flower);

  // bloom animation
  flower.animate([
    { transform: "scale(0)", opacity: 0 },
    { transform: "scale(1.4)", opacity: 1 },
    { transform: "scale(1)", opacity: 1 }
  ], {
    duration: 800,
    easing: "ease-out"
  });
}

document.addEventListener("click", function (e) {
  createFlower(e.clientX, e.clientY);

  // play bgm on first click (mobile rule)
  document.getElementById("bgm").play();
});

function clearFlowers() {
  document.querySelectorAll(".flower").forEach(f => f.remove());
}

function toggleAuto() {
  auto = !auto;

  if (auto) {
    autoInterval = setInterval(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      createFlower(x, y);
    }, 400);
  } else {
    clearInterval(autoInterval);
  }
}
