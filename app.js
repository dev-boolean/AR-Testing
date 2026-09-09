document.querySelectorAll('model-viewer').forEach((mv) => {
  const fill = mv.querySelector('.progress-bar-fill');
  mv.addEventListener('progress', (event) => {
    if (fill) fill.style.width = `${event.detail.totalProgress * 100}%`;
  });
  mv.addEventListener('load', () => {
    mv.setAttribute('loaded', '');
  });
});

document.querySelectorAll('details.dish').forEach((details) => {
  details.addEventListener('toggle', () => {
    if (details.open) {
      details.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
