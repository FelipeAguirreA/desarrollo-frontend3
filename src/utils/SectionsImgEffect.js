export function addColorShadowEffect(imgElement) {
  if (!imgElement) return;
  imgElement.classList.add('color-shadow-effect');
  imgElement.addEventListener('animationend', () => {
    imgElement.classList.remove('color-shadow-effect');
  }, { once: true });
}