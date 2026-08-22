function handleYes() {
  const music = document.getElementById('bg-music');
  if (music) music.play().catch(err => console.log(err));

  const responseArea = document.getElementById('response-area');
  responseArea.innerHTML = '<p class="feedback-msg" style="color: #ff4d6d;">YAY 🥺😛</p>';

  setTimeout(() => {
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
  }, 1500);
}

function handleNo() {
  const responseArea = document.getElementById('response-area');
  responseArea.innerHTML = '<p class="feedback-msg" style="color: #4a4a4a;">try again my love 💔😭</p>';
}
