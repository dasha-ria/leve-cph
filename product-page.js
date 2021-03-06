const CART = {
  KEY: "shopbasket",
  contents: [],
  init() {
    let _contents = localStorage.getItem(CART.KEY);
    if (_contents) {
      CART.contents = JSON.parse(_contents);
    }
    CART.sync();
  },

  sync() {
    let _cart = JSON.stringify(CART.contents);
    localStorage.setItem(CART.KEY, _cart);
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
  update(obj) {
    const index = CART.contents.findIndex((element) => element._id == obj._id);
    if (obj.qty === 0) {
      CART.contents.splice(index, 1);
    } else {
      CART.contents[index].qty = obj.qty;
    }
    CART.sync();
  },
};

CART.init();

const addCart = document.querySelector(".add-cart");

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const url = `https://kea21s-6eb0.restdb.io/rest/leve-products/${productId}`;

// fetch(url
// {
//     method: "GET",
//     headers: {
//       "x-apikey": "606d606af55350043100752e",
//     },
//   }
// )
//   .then((res) => res.json())
//   .then((data) => {
//     listProducts(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// }
// )

fetch(url, {
  method: "GET",
  headers: {
    "x-apikey": "606d606af55350043100752e",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    listProducts(data);
  })
  .catch((err) => {
    console.error(err);
  });

function listProducts(data) {
  showProduct(data);
  sizefitToggle(data);
  compositionToggle(data);

  addCart.onclick = () => {
    CART.add({
      _id: data._id,
      name: data.name,
      price: data.price,
      product_img_front: data.product_img_front,
    });
  };
}

function showProduct(product) {
  console.log(product);
  document.querySelector("#breadcrumb-category").textContent = product.category;
  document.querySelector("#breadcrumb-name").textContent = product.name;
  document.querySelector(".product-title").textContent = product.name;
  document.querySelector(".product-infotext").textContent =
    product.product_info;
  document.querySelector("#product-price-span").textContent = product.price;
  document.querySelector(".front-pic").src = product.product_img_front;
  document.querySelector(".front-pic-mobile").src = product.product_img_front;
  document.querySelector("#click-pic-1").src = product.product_img_front;

  if (product.sale) {
    console.log("is on sale");
    document
      .querySelector(".product-sale-wrap")
      .classList.remove("sale-hidden");
    document.querySelector(".product-price").classList.add("sale-hidden");
    document.querySelector("#sale-span").textContent = product.price;
    document.querySelector("#newprice-span").textContent = product.sale_price;
  }
}

// document.querySelector("#sizeandfit").addEventListener("click", sizefitToggle);

// function sizefitToggle(text) {
//   console.log("function dropDown1()");
//   // document.querySelector(".sort_price").classList.toggle("disappear");
//   document.querySelector("#sizeandfit-text").classList.remove(".text-hidden");
// }

document.querySelector("#sizeXXS").addEventListener("click", chooseXXS);

function chooseXXS() {
  document.querySelector("#sizeXXS").classList.toggle("selected");
}

document.querySelector("#sizeXS").addEventListener("click", chooseXS);

function chooseXS() {
  document.querySelector("#sizeXS").classList.toggle("selected");
}

document.querySelector("#sizeL").addEventListener("click", chooseL);

function chooseL() {
  document.querySelector("#sizeL").classList.toggle("selected");
}

function sizefitToggle(product) {
  document.querySelector("#sizeandfit").onclick = () => {
    document.querySelector("#sizeandfit-text").classList.toggle("text-hidden");
    document.querySelector("#sizeandfit-text").textContent = product.sizefit;
  };

  document.querySelector("#sizeandfit-mobile").onclick = () => {
    document
      .querySelector("#sizeandfit-text-mobile")
      .classList.toggle("text-hidden");
    document.querySelector("#sizeandfit-text-mobile").textContent =
      product.sizefit;
  };
}

function compositionToggle(product) {
  document.querySelector("#composition").onclick = () => {
    document.querySelector("#composition-text").classList.toggle("text-hidden");
    document.querySelector("#composition-text").textContent =
      product.composition;
  };

  document.querySelector("#composition-mobile").onclick = () => {
    document
      .querySelector("#compositiontext-mobile")
      .classList.toggle("text-hidden");
    document.querySelector("#compositiontext-mobile").textContent =
      product.composition;
  };
}

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
