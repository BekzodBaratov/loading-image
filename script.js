const loadBtn = document.querySelector(".load");
const imgLoad = document.querySelector(".img_load");
const imgBc = document.querySelector(".img_bc");
let q = 100;
let o = 10;

loadBtn.addEventListener("click", function () {
  imgLoad.style.display = "none";

  setInterval(() => {
    if (q > 0) {
      q--;
      loadBtn.textContent = `${q}%`;
    }
  }, 50);

  setInterval(() => {
    if (o > 0) {
      o--;
    }
    imgBc.style.filter = `blur(${o}px)`;
  }, 500);

  setTimeout(() => {
    loadBtn.style.display = "none";
  }, 5100);
});
