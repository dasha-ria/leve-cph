const CART = {
  KEY: "basket",
  contents: [],
  init() {
    let _contents = localStorage.getItem(CART.KEY);
    this.updateDOM();
    if (_contents) {
      CART.contents = JSON.parse(_contents);
    } else {
      CART.contents = [
        {
          _id: "60b099196a5d62110000308d",
          qty: 3,
          name: "Espresso Skirt",
          price: 249,
          product_img_front:
            "http://sandradesigns.dk/leve.images/espresso_skirt.webp",
        },
      ];
    }
    CART.sync();
  },
  sync() {
    let _cart = JSON.stringify(CART.contents);
    localStorage.setItem(CART.KEY, _cart);
    CART.updateDOM();
  },
  updateDOM() {
    const cartContent = document.querySelector(".cart-content");
    cartContent.innerHTML = "";

    if (CART.contents.length === 0) {
      cartContent.innerHTML = "<p>Cart is empty.</p>";
    } else {
      let sum = 0;
      CART.contents.forEach((element) => {
        console.log(element);

        const cartTemp = document.querySelector("#theCart").content;
        const cartCopy = cartTemp.cloneNode(true);

        const id = element._id;
        const labelEl = cartCopy.querySelector(".product-name");
        labelEl.textContent = element.name;
        labelEl.setAttribute("for", "fid-" + id);

        const inputEl = cartCopy.querySelector(".product-quantity");
        inputEl.id += id;
        inputEl.name += id;
        inputEl.innerText = element.qty;

        const picReplace = cartCopy.querySelector(".first-pic");
        picReplace.src = element.product_img_front;

        // inputEl.addEventListener("change", () => {
        //   const itemQty = inputEl.valueAsNumber;
        //   element.qty = itemQty;
        //   console.log(element);
        //   CART.update(element);
        // });

        // inputEl.addEventListener("focus", (e) => {
        //   e.target.select();
        // });

        const minusBtn = cartCopy.querySelector(".minus");
        minusBtn.addEventListener("click", () => {
          CART.minusOne(id);
        });

        const plusBtn = cartCopy.querySelector(".plus");
        plusBtn.addEventListener("click", () => {
          CART.plusOne(id);
        });

        const removeBtn = cartCopy.querySelector(".remove-product");
        removeBtn.addEventListener("click", () => {
          CART.remove(id);
        });

        // const priceEl = cartCopy.querySelector(".price-each span");
        // priceEl.textContent = element.price;
        const priceAll = cartCopy.querySelector(".product-price-span");
        const prodTotal = element.price * element.qty;
        sum += prodTotal;
        priceAll.textContent = prodTotal;

        cartContent.appendChild(cartCopy);
      });
      document.querySelector(".totalcost-span").innerText = sum;
      const grandTotal = document.querySelector(".grandtotal-span");
      //   const discount = document.querySelector(".discount-span");
      const shipping = document.querySelector(".shipping-span");
      grandTotal.innerText = sum + Number(shipping.innerText);
    }
  },

  add(obj) {
    const index = CART.contents.findIndex((element) => element._id == obj._id);
    if (index == -1) {
      console.log(obj);
      obj.qty = 1;
      console.log(CART.contents);
      CART.contents.push(obj);
    } else {
      CART.contents[index].qty += 1;
    }

    console.log(CART.contents);
    this.sync();
  },

  remove(productId) {
    CART.contents = CART.contents.filter((item) => {
      if (item._id === productId) {
        return false;
      }
      return true;
    });
    this.sync();
  },

  update(obj) {
    const index = CART.contents.findIndex((element) => element._id == obj._id);
    if (obj.qty === 0) {
      CART.contents.splice(index, 1);
    } else {
      CART.contents[index].qty = obj.qty;
    }
    CART.sync();
  },

  minusOne(id) {
    const productQty = CART.contents.find((element) => element._id == id).qty;

    if (productQty > 1) {
      const indexObj = CART.contents.find((element) => element._id == id);
      indexObj.qty--;
      console.log(indexObj);
      CART.update(indexObj);
    }
  },

  plusOne(id) {
    const indexObj = CART.contents.find((element) => element._id == id);
    indexObj.qty++;
    console.log(indexObj);
    CART.update(indexObj);
  },
};

CART.init();

// function removeProduct() {
//   const removeBtn = document.querySelector(".remove-product");
//   const product = document.querySelector(".first-product-wrap");

//   removeBtn.onclick = () => {
//     product.classList.add("disappear");
//   };
// }
// removeProduct();
