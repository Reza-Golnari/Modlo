document.body.onload = () => {
  const slider = document.querySelector(".slider");

  function scrollY() {
    if (scrollChecker()) {
      slider.scrollLeft += 700;
    } else {
      slider.scrollLeft = 0;
    }
  }

  function scrollChecker() {
    if (slider.scrollLeft + 700 > 4000) {
      return false;
    }
    return true;
  }

  setInterval(() => {
    scrollY();
  }, 3000);
};
