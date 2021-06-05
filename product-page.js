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
}

function showProduct(product) {
  console.log(product);
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

function sizefitToggle(product) {
  document.querySelector("#sizeandfit").onclick = () => {
    document.querySelector("#sizeandfit-text").classList.toggle("text-hidden");
    document.querySelector("#sizeandfit-text").textContent = product.sizefit;
  };
}

function compositionToggle(product) {
  document.querySelector("#composition").onclick = () => {
    document.querySelector("#composition-text").classList.toggle("text-hidden");
    document.querySelector("#composition-text").textContent =
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
