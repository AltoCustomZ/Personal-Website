const panel = document.querySelectorAll( '[data-animate]' );
function inViewport(element, strict, options = {}) {
    const rect = element.getBoundingClientRect();
    const height = window.innerHeight || document.documentElement.clientHeight;
    const width = window.innerWidth || document.documentElement.clientWidth;
    const offset = { left: 0, right: 0, top: 0, bottom: 0, ...options };
    if (strict) {
        return (
          rect.top >= -offset.top &&
          rect.left >= -offset.left &&
          rect.bottom <= height + offset.bottom &&
          rect.right <= width + offset.right
        );
      }
      return (
        rect.right >= -offset.left &&
        rect.bottom >= -offset.top &&
        rect.left <= width + offset.right &&
        rect.top <= height + offset.bottom
      );
    }
  
const handleAnimation = () => {
    panel.forEach(element => {
        if (inViewport(element)) {
          element.classList.add("animate");
        } else element.classList.remove ("animate");
    }
    );
}
window.addEventListener('scroll', handleAnimation, false);
window.addEventListener('load', handleAnimation, false);