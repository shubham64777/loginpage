let currentImage = 0;
const images = [
  'url(image/naruto.jpg)',
  'url(image/sea-of-clouds-6994730_1920.jpg)',
  'url(image/pexels-felixmittermeier-956981.jpg)',
  'url(image/pexels-iriser-1379636.jpg)',
  'url(image/pexels-chevanon-325044.jpg)',
];

document.getElementById('btn_changebg').addEventListener('click', function() {
  currentImage = (currentImage + 1) % images.length;
  document.body.style.backgroundImage = images[currentImage];
});