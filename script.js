let current = 0;
const slider = document.querySelector('.slider');
const music = document.getElementById('music');

document.body.addEventListener('click', () => {
  if (music.paused) {
    music.play();
  }

  current = current === 0 ? 1 : 0;
  slider.style.transform = `translateX(-${current * 100}vw)`;
});
