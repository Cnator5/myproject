const phoneContainer = document.querySelector('.spinning-phones > div:last-child');
const phoneImages = document.querySelectorAll('.spinning-phones img');

function clonePhoneImages() {
  phoneImages.forEach(img => {
    const clone = img.cloneNode(true);
    phoneContainer.appendChild(clone);
  });
}

function resetPhonePosition() {
  phoneContainer.style.transform = 'translateX(0)';
}

setInterval(() => {
  phoneContainer.style.transform = 'translateX(-100%)';
  setTimeout(resetPhonePosition, 20000);
}, 20000);

clonePhoneImages();
 