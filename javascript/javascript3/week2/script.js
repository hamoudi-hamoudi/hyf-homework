const selectedCurrency = document.getElementById("my-currency");
const changeToCurrency = document.getElementById("change-currency");
const inputTag = document.getElementById("amount");
const button = document.getElementById("button");
const result = document.getElementById("result");
let dataAll;
let dataKeys;
// ---- getting the data from API ----
const getCurrency = async () => {
  const currencyData = await fetch("https://open.er-api.com/v6/latest/USD");
  const data = await currencyData.json();
  dataAll = data.rates;
  dataKeys = Object.keys(dataAll);
  currencyRender(dataKeys);
};
getCurrency();
// ---- render the data in the DOM ----
const currencyRender = (array) => {
  selectedCurrency.innerHTML = array
    .map((e) => {
      if (e === "EUR") {
        return `<option selected="selected" value="${e}">${e}</option>`;
      }
      return `<option value="${e}">${e}</option>`;
    })
    .join("");
  changeToCurrency.innerHTML = array
    .map((e) => {
      if (e === "DKK") {
        return `<option selected="selected" value="${e}">${e}</option>`;
      }
      return `<option value="${e}">${e}</option>`;
    })
    .join("");
};
// ---- calculate the exchange ----
const calculation = (amount, type1, type2) => {
  amount = inputTag.value;
  const converter = (dataAll[type2] * amount) / dataAll[type1];
  return converter;
};
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
