const photos = document.querySelectorAll('.photo');
const page1 = document.querySelector('.page-1');
const page2 = document.querySelector('.page-2');
const music = document.getElementById('music');
const btn = document.getElementById('musicBtn');

let photoIndex = 0;
let flipped = false;

/* FOTO BERGANTI */
setInterval(() => {
  photos[photoIndex].classList.remove('active');
  photoIndex = (photoIndex + 1) % photos.length;
  photos[photoIndex].classList.add('active');
}, 4000);

/* FLIP HALAMAN */
document.body.addEventListener('click', () => {
  if (!flipped) {
    page1.style.transform = 'rotateY(-180deg)';
    page2.style.transform = 'rotateY(0deg)';
    flipped = true;
  }
});

/* TOMBOL MUSIK */
btn.addEventListener('click', (e) => {
  e.stopPropagation();

  if (music.paused) {
    music.play();
    btn.textContent = '🔊';
  } else {
    music.pause();
    btn.textContent = '🔇';
  }
});
