// Screen Switcher
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

// 1. Polaroid Lightbox Gallery
function openLightbox(element) {
  const imgSrc = element.querySelector("img").src;
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = imgSrc;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// 2. Envelope Opening & Typing Effect
// EDIT YOUR LETTER CONTENT BETWEEN THE QUOTES BELOW:
const letterText = "From the moment you entered my life, everything changed for the better. I can remember every detail of the days when I first felt the spark between us, it is way out of this world.
          Every time I am with you it's like I have found the missing piece ofmy soul. It is never a dull moment around you. You are the moonlight to my darkest nights, and the sunshine to my rightest days. You are my warmth in the cold, my comfort in the pain, my joy in the sorrow, and my hope in the despair.
          You always make sure there is a smile on me, andI always make sure to see you smile. I love seeing you happy, you are my baby after all.
          I can't tell you how much I love you more than I can ever get to explain. No enough words can.
          I love every little bit about you, your smile, your eyes(it's like they can see right through me. They make it hard to maintain my composure and eye contact with you.), fuuuuuck and your voice too.
          I love the taste of your lips and your skin, and I love holding you close to me.
          Keep in your beautiful heart and mind that I will ALWAYS be here for you, through the good and the bad. I will always stand with you through every chapter of your life, and I promise to always support you, I will be your pillar.
          I LOVEE YOUU SO MUCH.........";

function openEnvelope() {
  const wrapper = document.querySelector(".envelope-wrapper");
  const letter = document.getElementById("letter-content");
  
  if (wrapper) wrapper.style.display = "none";
  if (letter) {
    letter.style.display = "block";
    letter.classList.remove("hidden-letter");
  }

  let index = 0;
  const typedContainer = document.getElementById("typed-text");
  if (!typedContainer) return;
  typedContainer.textContent = "";

  function typeWriter() {
    if (index < letterText.length) {
      typedContainer.textContent += letterText.charAt(index);
      index++;
      setTimeout(typeWriter, 35);
    }
  }
  typeWriter();
}

// 3. Floating Hearts Particle Canvas
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
let hearts = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: Math.random() * 15 + 10,
    speed: Math.random() * 2 + 1,
    opacity: Math.random() * 0.7 + 0.3
  };
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (hearts.length < 25) hearts.push(createHeart());

  hearts.forEach((h, index) => {
    ctx.globalAlpha = h.opacity;
    ctx.font = ${h.size}px serif;
    ctx.fillText("❤️", h.x, h.y);
    h.y -= h.speed;

    if (h.y < -20) hearts.splice(index, 1);
  });
  requestAnimationFrame(drawHearts);
}
drawHearts();
