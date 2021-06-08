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

document.querySelector("#one").addEventListener("click", chooseOne);
document.querySelector("#two").addEventListener("click", chooseTwo);
document.querySelector("#three").addEventListener("click", chooseThree);
document.querySelector("#four").addEventListener("click", chooseFour);
document.querySelector("#five").addEventListener("click", chooseFive);
document.querySelector("#six").addEventListener("click", chooseSix);
document.querySelector("#seven").addEventListener("click", chooseSeven);
document.querySelector("#eight").addEventListener("click", chooseEight);
document.querySelector("#nine").addEventListener("click", chooseNine);
document.querySelector("#ten").addEventListener("click", chooseTen);
document.querySelector("#eleven").addEventListener("click", chooseEleven);
document.querySelector("#twelve").addEventListener("click", chooseTwelve);
document.querySelector("#thirteen").addEventListener("click", chooseThirteen);
document.querySelector("#fourteen").addEventListener("click", chooseFourteen);
document.querySelector("#fifteen").addEventListener("click", chooseFifteen);
document.querySelector("#sixteen").addEventListener("click", chooseSixteen);
document.querySelector("#seventeen").addEventListener("click", chooseSeventeen);
document.querySelector("#eighteen").addEventListener("click", chooseEighteen);
document.querySelector("#nineteen").addEventListener("click", chooseNineteen);
document.querySelector("#twenty").addEventListener("click", chooseTwenty);
document.querySelector("#twentyone").addEventListener("click", chooseTwentyone);
document.querySelector("#twentytwo").addEventListener("click", chooseTwentytwo);
document
  .querySelector("#twentythree")
  .addEventListener("click", chooseTwentythree);
document
  .querySelector("#twentyfour")
  .addEventListener("click", chooseTwentyfour);
document
  .querySelector("#twentyfive")
  .addEventListener("click", chooseTwentyfive);
document.querySelector("#twentysix").addEventListener("click", chooseTwentysix);
document
  .querySelector("#twentyseven")
  .addEventListener("click", chooseTwentyseven);
document
  .querySelector("#twentyeight")
  .addEventListener("click", chooseTwentyeight);
document
  .querySelector("#twentynine")
  .addEventListener("click", chooseTwentynine);
document.querySelector("#thirty").addEventListener("click", chooseThirty);
document.querySelector("#thirtyone").addEventListener("click", chooseThirtyone);

function chooseOne() {
  document.querySelector("#one").classList.toggle("choose_date");
}

function chooseTwo() {
  document.querySelector("#two").classList.toggle("choose_date");
}

function chooseThree() {
  document.querySelector("#three").classList.toggle("choose_date");
}

function chooseFour() {
  document.querySelector("#four").classList.toggle("choose_date");
}

function chooseFive() {
  document.querySelector("#five").classList.toggle("choose_date");
}

function chooseSix() {
  document.querySelector("#six").classList.toggle("choose_date");
}

function chooseSeven() {
  document.querySelector("#seven").classList.toggle("choose_date");
}

function chooseEight() {
  document.querySelector("#eight").classList.toggle("choose_date");
}

function chooseNine() {
  document.querySelector("#nine").classList.toggle("choose_date");
}

function chooseTen() {
  document.querySelector("#ten").classList.toggle("choose_date");
}

function chooseEleven() {
  document.querySelector("#eleven").classList.toggle("choose_date");
}

function chooseTwelve() {
  document.querySelector("#twelve").classList.toggle("choose_date");
}

function chooseThirteen() {
  document.querySelector("#thirteen").classList.toggle("choose_date");
}

function chooseFourteen() {
  document.querySelector("#fourteen").classList.toggle("choose_date");
}

function chooseFifteen() {
  document.querySelector("#fifteen").classList.toggle("choose_date");
}

function chooseSixteen() {
  document.querySelector("#sixteen").classList.toggle("choose_date");
}

function chooseSeventeen() {
  document.querySelector("#seventeen").classList.toggle("choose_date");
}

function chooseEighteen() {
  document.querySelector("#eighteen").classList.toggle("choose_date");
}

function chooseNineteen() {
  document.querySelector("#nineteen").classList.toggle("choose_date");
}

function chooseTwenty() {
  document.querySelector("#twenty").classList.toggle("choose_date");
}

function chooseTwentyone() {
  document.querySelector("#twentyone").classList.toggle("choose_date");
}

function chooseTwentytwo() {
  document.querySelector("#twentytwo").classList.toggle("choose_date");
}

function chooseTwentythree() {
  document.querySelector("#twentythree").classList.toggle("choose_date");
}

function chooseTwentyfour() {
  document.querySelector("#twentyfour").classList.toggle("choose_date");
}

function chooseTwentyfive() {
  document.querySelector("#twentyfive").classList.toggle("choose_date");
}

function chooseTwentysix() {
  document.querySelector("#twentysix").classList.toggle("choose_date");
}

function chooseTwentyseven() {
  document.querySelector("#twentyseven").classList.toggle("choose_date");
}

function chooseTwentyeight() {
  document.querySelector("#twentyeight").classList.toggle("choose_date");
}

function chooseTwentynine() {
  document.querySelector("#twentynine").classList.toggle("choose_date");
}

function chooseThirty() {
  document.querySelector("#thirty").classList.toggle("choose_date");
}

function chooseThirtyone() {
  document.querySelector("#thirtyone").classList.toggle("choose_date");
}
