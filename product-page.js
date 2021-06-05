function frontPic() {
  document.querySelector("#pic-1").classList.remove("product-pic-hidden");
  document.querySelector("#pic-2").classList.add("product-pic-hidden");
  document.querySelector("#pic-3").classList.add("product-pic-hidden");
  document.querySelector("#pic-4").classList.add("product-pic-hidden");

  const showpic1 = document.querySelector("#click-pic-1");

  showpic1.onclick = () => {
    document.querySelector("#pic-1").classList.remove("product-pic-hidden");
    document.querySelector("#pic-2").classList.add("product-pic-hidden");
    document.querySelector("#pic-3").classList.add("product-pic-hidden");
    document.querySelector("#pic-4").classList.add("product-pic-hidden");
  };

  const showpic2 = document.querySelector("#click-pic-2");

  showpic2.onclick = () => {
    document.querySelector("#pic-1").classList.add("product-pic-hidden");
    document.querySelector("#pic-2").classList.remove("product-pic-hidden");
    document.querySelector("#pic-3").classList.add("product-pic-hidden");
    document.querySelector("#pic-4").classList.add("product-pic-hidden");
  };

  const showpic3 = document.querySelector("#click-pic-3");

  showpic3.onclick = () => {
    document.querySelector("#pic-1").classList.add("product-pic-hidden");
    document.querySelector("#pic-2").classList.add("product-pic-hidden");
    document.querySelector("#pic-3").classList.remove("product-pic-hidden");
    document.querySelector("#pic-4").classList.add("product-pic-hidden");
  };

  const showpic4 = document.querySelector("#click-pic-4");

  showpic4.onclick = () => {
    document.querySelector("#pic-1").classList.add("product-pic-hidden");
    document.querySelector("#pic-2").classList.add("product-pic-hidden");
    document.querySelector("#pic-3").classList.add("product-pic-hidden");
    document.querySelector("#pic-4").classList.remove("product-pic-hidden");
  };
}

frontPic();

function clickPicmobile() {
  let mobilepic1 = document.querySelector("#mobile-pic-1");
  let mobilepic2 = document.querySelector("#mobile-pic-2");
  let mobilepic3 = document.querySelector("#mobile-pic-3");
  let mobilepic4 = document.querySelector("#mobile-pic-4");

  let pictures = [mobilepic1, mobilepic2, mobilepic3, mobilepic4];

  let nextButton = document.querySelector(".product-arrow-right");
  let previousButton = document.querySelector(".product-arrow-left");

  nextButton.onclick = () => {
    for (let i = 0; i < pictures.length; i++) {
      if (!pictures[i].classList.contains("product-pic-hidden")) {
        pictures[i].classList.add("product-pic-hidden");

        if (i + 1 === pictures.length) {
          pictures[0].classList.remove("product-pic-hidden");
        } else {
          pictures[i + 1].classList.remove("product-pic-hidden");
        }
        break;
      }
    }
  };

  previousButton.onclick = () => {
    for (let i = 0; i < pictures.length; i++) {
      if (!pictures[i].classList.contains("product-pic-hidden")) {
        pictures[i].classList.add("product-pic-hidden");

        if (i === 0) {
          pictures[pictures.length - 1].classList.remove("product-pic-hidden");
        } else {
          pictures[i - 1].classList.remove("product-pic-hidden");
        }
        break;
      }
    }
  };
}

clickPicmobile();
