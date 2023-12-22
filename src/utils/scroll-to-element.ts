export const scrollToElementById = (id: string): void => {
  const currentElement = document.getElementById(id);

  if (!currentElement) {
    return
  }

  const { top } = currentElement.getBoundingClientRect()

  window.scrollTo({
    top: top + window.pageYOffset,
    behavior: 'smooth'
  });
}
