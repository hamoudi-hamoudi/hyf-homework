const selectedCurrency = document.getElementById("my-currency");
const changeToCurrency = document.getElementById("change-currency");
const inputTag = document.getElementById("amount");
const button = document.getElementById("button");
const result = document.getElementById("result");
let dataAll;
let dataKeys;
// ---- getting the data from API ----
const getCurrency = async () => {
  const currencyData = await fetch("https://open.er-api.com/v6/latest");
  const data = await currencyData.json();
  dataAll = data.rates;
  dataKeys = Object.keys(dataAll);
  currencyRender(dataKeys);
};
getCurrency();
// ---- render the data in the DOM ----
const currencyRender = (array) => {
  array.forEach((e) => {
    const option = document.createElement("option");
    option.innerHTML = `${e}`;
    option.value = `${e}`;
    if (e === "EUR") {
      option.selected = true;
    }
    selectedCurrency.appendChild(option);
  });
  array.forEach((e) => {
    const option = document.createElement("option");
    option.innerHTML = `${e}`;
    option.value = `${e}`;
    if (e === "DKK") {
      option.selected = true;
    }
    changeToCurrency.appendChild(option);
  });
};
// ---- calculate the exchange ----
const calculation = (amount, type1, type2) => {
  amount = inputTag.value;
  const converter = (dataAll[type2] * amount) / dataAll[type1];
  return converter;
};
// ---- button for action ----
button.addEventListener("click", (event) => {
  event.preventDefault();
  result.innerHTML = `${calculation(
    100,
    selectedCurrency.value,
    changeToCurrency.value
  ).toFixed(2)} ${changeToCurrency.value}`;
});

//---- extra option for search in the currencys ----
// $(document).ready(function () {
//   $("#my-currency").select2({
//     minimumResultsForSearch: 1,
//   });
//   $("#change-currency").select2({
//     minimumResultsForSearch: 1,
//   });
// });
