function addProduct() {
  const allNum = document.querySelector(".product-quantity");
  const plusBtn = document.querySelector(".plus");
  const productPrice = document.querySelector(".product-price-span");

  plusBtn.onclick = () => {
    const add = Number(allNum.innerText) + 1;
    allNum.innerText = add;
    const multiplyPrice =
      (Number(productPrice.innerText) / (Number(allNum.innerText) - 1)) *
      Number(allNum.innerText);
    productPrice.innerText = multiplyPrice;

    calculateTotal();
  };
}

addProduct();

function minusProduct() {
  const allNum = document.querySelector(".product-quantity");
  const minusBtn = document.querySelector(".minus");
  const productPrice = document.querySelector(".product-price-span");

  minusBtn.onclick = () => {
    if (allNum.innerText > 1) {
      const minus = Number(allNum.innerText) - 1;
      allNum.innerText = minus;
      const dividePrice =
        (Number(productPrice.innerText) / (Number(allNum.innerText) + 1)) *
        Number(allNum.innerText);
      productPrice.innerText = dividePrice;

      calculateTotal();
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

function calculateTotal() {
  const newproductPrice = document.querySelector(
    ".product-price-span"
  ).textContent;
  const totalCost = document.querySelector(".totalcost-span");
  const discount = document.querySelector(".discount-span");
  const shipping = document.querySelector(".shipping-span");
  const grandTotal = document.querySelector(".grandtotal-span");

  totalCost.textContent = newproductPrice;
  grandTotal.innerText =
    Number(totalCost.innerText) +
    Number(discount.innerText) +
    Number(shipping.innerText);
}

calculateTotal();
