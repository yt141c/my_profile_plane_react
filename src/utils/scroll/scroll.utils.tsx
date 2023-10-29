export const disableScroll = (): void => {
  document.body.style.overflow = 'hidden';
  document.addEventListener('wheel', preventDefault, { passive: false });
  document.addEventListener('touchmove', preventDefault, { passive: false });
};

export const enableScroll = (): void => {
  document.body.style.overflow = '';
  document.removeEventListener('wheel', preventDefault);
  document.removeEventListener('touchmove', preventDefault);
};

export const preventDefault = (e: Event): void => {
  e.preventDefault();
};
