export const scrollToElementById = (id: string): void => {
  const currentElement = document.getElementById(id);

  if (!currentElement) {
    return
  }

  const { top } = currentElement.getBoundingClientRect()
  const topWithOffset = top + window.pageYOffset

  window.scrollTo({
    top: top > 0 ? topWithOffset + 80 : topWithOffset,
    behavior: 'smooth'
  });
}
