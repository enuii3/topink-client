export const fadeStyle = (index: number) => {
  return index % 2 === 0 ? "fade-left" : "fade-right";
};

export const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  const yOffset = -140;
  let y = 0;
  if (element) {
    y = element.getBoundingClientRect().top + window.scrollY + yOffset;
  }

  window.scrollTo({ top: y, behavior: "smooth" });
};
