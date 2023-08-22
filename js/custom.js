document.body.onload = () => {
  const slider = document.querySelector(".slider");
  let scroll = 700;
  let maxScroll = 4000;

  function scrollY() {
    if (scrollChecker()) {
      slider.scrollLeft += scroll;
    } else {
      slider.scrollLeft = 0;
    }
  }

  function scrollChecker() {
    if (slider.scrollLeft + scroll > maxScroll) {
      return false;
    }
    return true;
  }

  setInterval(() => {
    scrollY();
  }, 3000);

  if (window.innerWidth > 760) {
    return;
  } else if (window.innerWidth <= 760 && window.innerWidth > 430) {
    scroll = 400;
    maxScroll = 2300;
  } else if (window.innerWidth <= 430) {
    scroll = 300;
    maxScroll = 1700;
  }
};

let listRowCards = document.querySelectorAll(".card-container");

listRowCards.forEach((row) => {
  row.addEventListener("wheel", (e) => {
    e.preventDefault();
    console.log(e.deltaY);
    row.scrollLeft += e.deltaY * 2;
  });
});
