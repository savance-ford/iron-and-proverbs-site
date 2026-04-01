export function navigateToHash(hash: string): void {
  const element = document.querySelector(hash);

  if (element instanceof HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  window.location.hash = hash;
}
