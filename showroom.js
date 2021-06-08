const form = document.querySelector("form");

form.addEventListener("submit", userBooked);

function userBooked(evt) {
  evt.preventDefault();
  console.log(form.elements.name.value);
  console.log(form.elements.email.value);
  console.log(form.elements.tel_number.value);
  console.log(form.elements.time.value);

  const payload = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    tel_number: form.elements.tel_number.value,
    visit_time: form.elements.time.value,
  };

  document.querySelector(".book_btn").disabled = true;

  fetch("https://kea21s-6eb0.restdb.io/rest/leve-showroom", {
    method: "POST",
    headers: {
      "x-apikey": "606d606af55350043100752e",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
      document.querySelector(".book_btn").disabled = false;
      form.elements.name.value = "";
      form.elements.email.value = "";
      form.elements.tel_number.value = "";
      form.elements.time.value = "";
    })
    .catch((err) => {
      console.error(err);
    });
}

document.querySelector("#1").addEventListener("click", choose1st);

function choose1st() {
  document.querySelector("#1").classList.add("choose_date");
}
