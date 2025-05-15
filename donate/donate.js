const copyText = document.getElementById('copyText');
const popupOverlay = document.getElementById('popup-overlay');
const popupContent = document.getElementById('popup-content');
const closeButton = document.querySelector('.close-button');
const openPopupBtn = document.getElementById('donate_toss-button');

copyText.addEventListener('click', () => {
    navigator.clipboard.writeText(copyText.textContent);
    alert('요즘 세상이 너무 무서워.');
  });

function openPopup() {
  popupOverlay.style.display = 'block';
}

function closePopup() {
  popupOverlay.style.display = 'none';
}

openPopupBtn.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

window.addEventListener('click', (event) => {
  if (event.target == popupOverlay) {
    closePopup();
  }
});