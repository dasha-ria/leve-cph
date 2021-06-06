const URL = "https://kea21s-6eb0.restdb.io/rest/leve-products";

const state = {
  sortBy: null,
};

load();

function filter(filter_para) {
  console.log("filtering", filter_para);
  document.querySelector(".list").innerHTML = "";
  fetch(
    `https://kea21s-6eb0.restdb.io/rest/leve-products?q={ "$or": ${filter_para} }`,
    {
      method: "GET",
      headers: {
        "x-apikey": "606d606af55350043100752e",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      listProducts(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

function load() {
  fetch(URL, {
    method: "GET",
    headers: {
      "x-apikey": "606d606af55350043100752e",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      listProducts(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

function listProducts(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  const template = document.querySelector("#theList").content;
  const copy = template.cloneNode(true);
  const imgEl = copy.querySelector("img");
  imgEl.src = product.product_img_front;
  imgEl.alt = `The image of ${product.name}`;
  const h4El = copy.querySelector("h4");
  h4El.textContent = product.name;
  h4El.classList.add("capi");
  copy.querySelector(".price").textContent = `${product.price} DKK`;
  if (product.sale == true) {
    copy.querySelector(".price").textContent = `${product.price} DKK`;
    copy.querySelector(".price").classList.add("underline");
    copy.querySelector(".discount").textContent = `${product.sale_price} DKK`;
  }
  if (product.XXS == "<0") {
    copy.querySelector("#box_XXS").classList.add("shade");
  }
  if (product.XS == "<0") {
    copy.querySelector("#box_XS").classList.add("shade");
  }
  if (product.S == "<0") {
    copy.querySelector("#box_S").classList.add("shade");
  }
  if (product.M == "<0") {
    copy.querySelector("#box_M").classList.add("shade");
  }
  if (product.L == "<0") {
    copy.querySelector("#box_L").classList.add("shade");
  }
  const parent = document.querySelector(".list");
  parent.appendChild(copy);
}

document.querySelector("#filterText").addEventListener("click", dropFilter);
document.querySelector("#filter1").addEventListener("click", dropDown1);
document.querySelector("#filter2").addEventListener("click", dropDown2);
document.querySelector("#filter3").addEventListener("click", dropDown3);
document.querySelector("#filter4").addEventListener("click", dropDown4);

function dropFilter() {
  console.log("function dropFilter()");
  document.querySelector(".filter").classList.toggle("gone");
}

function dropDown1() {
  console.log("function dropDown1()");
  document.querySelector("#filter1").textContent = "+";
  document.querySelector(".sort_price").classList.toggle("disappear");
}

function dropDown2() {
  console.log("function dropDown2()");
  document.querySelector("#filter2").textContent = "+";
  document.querySelector(".collection").classList.toggle("disappear");
}

function dropDown3() {
  console.log("function dropDown3()");
  document.querySelector("#filter3").textContent = "+";
  document.querySelector(".category").classList.toggle("disappear");
}

function dropDown4() {
  console.log("function dropDown4()");
  document.querySelector("#filter4").textContent = "+";
  document.querySelector(".size").classList.toggle("disappear");
}

const collCheckbox = document
  .querySelector("#collection")
  .querySelectorAll(`[type="checkbox"]`);
collCheckbox.forEach((e) => {
  e.onclick = () => {
    filterCollections();
  };
});

function filterCollections() {
  let array = [];

  collCheckbox.forEach((e) => {
    if (e.checked === true) {
      array.push({
        collection: `${e.dataset.category}`,
      });
    }
  });

  filter(JSON.stringify(array));
}

const catCheckbox = document
  .querySelector("#category")
  .querySelectorAll(`[type="checkbox"]`);
catCheckbox.forEach((e) => {
  e.onclick = () => {
    filterCategories();
  };
});

function filterCategories() {
  let array = [];

  catCheckbox.forEach((e) => {
    if (e.checked === true) {
      array.push({
        category: `${e.dataset.category}`,
      });
    }
  });

  filter(JSON.stringify(array));
}

const sizeMCheckbox = document
  .querySelector("#sizes")
  .querySelectorAll(`[type="checkbox"]`);
sizeMCheckbox.forEach((e) => {
  e.onclick = () => {
    filterSizeM();
  };
});

function filterSizeM() {
  let array = [];

  sizeMCheckbox.forEach((e) => {
    if (e.checked === true) {
      array.push({
        M: `${e.dataset.category}`,
      });
    }
  });

  filter(JSON.stringify(array));
}

const low = document.querySelector("#LowToHigh");
const high = document.querySelector("#HighToLow");
low.addEventListener("click", handleSortByLow);
high.addEventListener("click", handleSortByHigh);

function handleSortByLow() {
  if (state.sortBy === "low") {
    reload();
    state.sortBy = null;
  } else {
    sortLow();
    state.sortBy = "low";
  }
}

function sortLow() {
  console.log("function sortLow()");
  document.querySelector(".list").innerHTML = "";
  fetch(
    `https://kea21s-6eb0.restdb.io/rest/leve-products?q={}&sort=price&sort=sale_price&dir=1`,
    {
      method: "GET",
      headers: {
        "x-apikey": "606d606af55350043100752e",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      listProducts(data);
    })
    .catch((err) => {
      console.error(err);
    });

  // low.addEventListener("click", reload);
}

function handleSortByHigh() {
  if (state.sortBy === "high") {
    reload();
    state.sortBy = null;
  } else {
    sortHigh();
    state.sortBy = "high";
  }
}

function sortHigh() {
  console.log("function sortLow()");
  document.querySelector(".list").innerHTML = "";
  fetch(
    `https://kea21s-6eb0.restdb.io/rest/leve-products?q={}&sort=price&sort=sale_price&dir=-1`,
    {
      method: "GET",
      headers: {
        "x-apikey": "606d606af55350043100752e",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      listProducts(data);
    })
    .catch((err) => {
      console.error(err);
    });

  // high.addEventListener("click", reload);
}

function reload() {
  document.querySelector(".list").innerHTML = "";
  load();
}
