const shopRowList = document.querySelectorAll(".shop-row");

function scrollLeftRow(e, row) {
  if (window.innerWidth <= 510) {
    row.scrollLeft += -280;
  } else {
    row.scrollLeft += -300;
  }
}

function scrollRightRow(e, row) {
  if (window.innerWidth <= 510) {
    row.scrollLeft += 280;
  } else {
    row.scrollLeft += 300;
  }
}

shopRowList.forEach((row) => {
  row.children[1].addEventListener("click", (e) => {
    scrollLeftRow(e, row.children[2]);
  });
  row.children[3].addEventListener("click", (e) => {
    scrollRightRow(e, row.children[2]);
  });
});
