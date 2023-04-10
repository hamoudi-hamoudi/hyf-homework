const products = getAvailableProducts();
console.log(products);
// render the prodects to the html page
const renderProducts = (array) => {
  let mainTag = document.querySelector("#maintag");
  mainTag.innerHTML = array
    .map((item) => {
      // deconstruction of the array
      let { name, price, rating } = item;
      return `<div class='product'>
    <h2>${name}</h2>
    <p>price: ${price}</p>
    <p>rating: ${rating}</p></div><hr/>`;
    })
    .join("");
};

renderProducts(products);

const search = document.querySelector("#search");
const maxPrice = document.querySelector("#maxprice");
const button = document.querySelector("#button");
const body = document.body;

// render the products that contain the search result
search.addEventListener("keyup", (input) => {
  const searchValue = input.target.value.toLowerCase();
  const filterdProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchValue);
  });
  return renderProducts(filterdProducts);
});

// render the products that have the maxprice
maxPrice.addEventListener("keyup", (input) => {
  max = input.target.value;
  const priceProducts = products.filter((product) => {
    return product.price < max;
  });
  return renderProducts(priceProducts);
});

// button for dark and light mode
button.addEventListener("click", () => {
  if (body.style.backgroundColor === "black") {
    button.innerHTML = "Dark Mode";
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    button.innerHTML = "light Mode";
    body.style.backgroundColor = "black";
    body.style.color = "#282727";
  }
});
// radio  for sorting the price or the rating

const sort = document.getElementsByName("sort");
console.log(sort);
sort.forEach((radioInput) => {
  radioInput.addEventListener("change", () => {
    if (radioInput.checked) {
      switch (radioInput.id) {
        case "price":
          renderProducts(products.sort((a, b) => a.price - b.price));
          break;
        case "rating":
          renderProducts(products.sort((a, b) => b.rating - a.rating));
      }
    }
  });
});
