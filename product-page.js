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

// function frontPic-mobile() {
//     document.querySelector("#mobile-pic-1").classList.remove("product-pic-hidden");
//     document.querySelector("#mobile-pic-2").classList.add("product-pic-hidden");
//     document.querySelector("#mobile-pic-3").classList.add("product-pic-hidden");
//     document.querySelector("#mobile-pic-4").classList.add("product-pic-hidden");

//     const showpic1 = document.querySelector("#click-pic-1");

//     showpic1.onclick = () => {
//       document.querySelector("#mobile-pic-1").classList.remove("product-pic-hidden");
//       document.querySelector("#mobile-pic-2").classList.add("product-pic-hidden");
//       document.querySelector("#mobile-pic-3").classList.add("product-pic-hidden");
//       document.querySelector("#mobile-pic-4").classList.add("product-pic-hidden");
//     };

//     const showpic2 = document.querySelector("#click-pic-2");

//     showpic2.onclick = () => {
//       document.querySelector("#mobile-pic-1").classList.add("product-pic-hidden");
//       document.querySelector("#mobile-pic-2").classList.remove("product-pic-hidden");
//       document.querySelector("#mobile-pic-3").classList.add("product-pic-hidden");
//       document.querySelector("#mobile-pic-4").classList.add("product-pic-hidden");
//     };

//     const showpic3 = document.querySelector("#click-pic-3");

//     showpic3.onclick = () => {
//       document.querySelector("#mobile-pic-1").classList.add("product-pic-hidden");
//       document.querySelector("#mobile-pic-2").classList.add("product-pic-hidden");
//       document.querySelector("#mobile-pic-3").classList.remove("product-pic-hidden");
//       document.querySelector("#mobile-pic-4").classList.add("product-pic-hidden");
//     };

//     const showpic4 = document.querySelector("#click-pic-4");

//     showpic4.onclick = () => {
//       document.querySelector("#mobile-pic-1").classList.add("product-pic-hidden");
//       document.querySelector("#mobile-pic-2").classList.add("product-pic-hidden");
//       document.querySelector("#mobile-pic-3").classList.add("product-pic-hidden");
//       document.querySelector("#mobile-pic-4").classList.remove("product-pic-hidden");
//     };
//   }

//   frontPic-mobile();
