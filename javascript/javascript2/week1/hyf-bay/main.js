// test
console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);
let mainTag = document.querySelector("#maintag");

function renderProducts(str) {
  for (product of str) {
    let h2Tag = document.createElement("h2");
    let pTag = document.createElement("p");
    let pTag2 = document.createElement("p");
    mainTag.appendChild(h2Tag);
    mainTag.appendChild(pTag);
    mainTag.appendChild(pTag2);
    h2Tag.innerHTML = product.name;
    pTag.innerHTML = `price : ${product.price} `;
    pTag2.innerHTML = `Rating: ${product.rating} `;
  }
}
renderProducts(products);
