function addProduct() {
  const allNum = document.querySelector(".product-quantity");
  const plusBtn = document.querySelector(".plus");
  const productPrice = document.querySelector("#product-price-span");

  plusBtn.onclick = () => {
    const add = Number(allNum.innerText) + 1;
    allNum.innerText = add;
    const multiplyPrice =
      (Number(productPrice.innerText) / (Number(allNum.innerText) - 1)) *
      Number(allNum.innerText);
    productPrice.innerText = multiplyPrice;
  };
}

addProduct();

function minusProduct() {
  const allNum = document.querySelector(".product-quantity");
  const minusBtn = document.querySelector(".minus");
  const productPrice = document.querySelector("#product-price-span");

  minusBtn.onclick = () => {
    if (allNum.innerText > 1) {
      const minus = Number(allNum.innerText) - 1;
      allNum.innerText = minus;
      const dividePrice =
        (Number(productPrice.innerText) / (Number(allNum.innerText) + 1)) *
        Number(allNum.innerText);
      productPrice.innerText = dividePrice;
    }
  };
}
minusProduct();

function removeProduct() {
  const removeBtn = document.querySelector(".remove-product");
  const product = document.querySelector(".first-product-wrap");

  removeBtn.onclick = () => {
    product.classList.add("disappear");
  };
}
removeProduct();

function itemTotal() {
  const productPrice = document.querySelector("#product-price-span");
  console.log(productPrice.innerText);
}
itemTotal();

// function addProduct() {
//   let plusbutton = document.querySelector(".plus");
//   let productNum = document.querySelector(".product-quantity");

//   plusbutton.onclick = () => {
//     productNum = productNum.innerText + 1;
//   };
// }

// let pictures = [mobilepic1, mobilepic2, mobilepic3, mobilepic4];

// let nextButton = document.querySelector(".product-arrow-right");
// let previousButton = document.querySelector(".product-arrow-left");

// nextButton.onclick = () => {
//   for (let i = 0; i < pictures.length; i++) {
//     if (!pictures[i].classList.contains("product-pic-hidden")) {
//       pictures[i].classList.add("product-pic-hidden");

//       if (i + 1 === pictures.length) {
//         pictures[0].classList.remove("product-pic-hidden");
//       } else {
//         pictures[i + 1].classList.remove("product-pic-hidden");
//       }
//       break;
//     }
//   }

// count.textContent++

// document.querySelector("#plus1").addEventListener("click", addMore1);
// document.querySelector("#minus1").addEventListener("click", reduceMore1);
// document.querySelector("#remove1").addEventListener("click", removeProduct1);
// document.querySelector("#plus2").addEventListener("click", addMore2);
// document.querySelector("#minus2").addEventListener("click", reduceMore2);
// document.querySelector("#remove2").addEventListener("click", removeProduct2);

// function addMore1() {
//   console.log("function addMore()");
//   document.querySelector("#number1").textContent = "2";
//   document.querySelector("#cost").textContent = "998,00";
//   document.querySelector("#total").textContent = "1033,00";
// }

// function removeProduct1() {
//   console.log("function removeProduct()");
//   document.querySelector(".firstBag").classList.add("disappear");
//   document.querySelector("#cost").textContent = "499,00";
//   document.querySelector("#total").textContent = "534,00";
// }

// function reduceMore1() {
//   console.log("function reduceMore()");
//   document.querySelector("#number1").textContent = "1";
//   document.querySelector("#cost").textContent = "748,50";
//   document.querySelector("#total").textContent = "783,50";
// }

// function addMore2() {
//   console.log("function addMore2()");
//   document.querySelector("#number2").textContent = "2";
//   document.querySelector("#cost").textContent = "998,00";
//   document.querySelector("#total").textContent = "1033,00";
// }

// function removeProduct2() {
//   console.log("function removeProduct2()");
//   document.querySelector(".secondBag").classList.add("disappear");
// }

// function reduceMore2() {
//   console.log("function reduceMore2()");
//   document.querySelector("#number2").textContent = "1";
//   document.querySelector("#cost").textContent = "499,00";
//   document.querySelector("#total").textContent = "534,00";
// }
