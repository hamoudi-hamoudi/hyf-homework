const input = document.getElementById("input");
const inputNb = document.getElementById("number");
const button = document.getElementById("button");
const div = document.querySelector(".contain");
const url =
  "https://api.giphy.com/v1/gifs/search?api_key=a1586xUHO0yiXHzrFU1QQ61mehl6icOd";

const urlResult = (search, number) => {
  if (!number || isNaN(number)) {
    return `${url}&q=${search}`;
  } else {
    return `${url}&limit=${number}&q=${search}`;
  }
};
const getGiphy = async (result) => {
  try {
    const giphy = await fetch(result);
    const giphyData = await giphy.json();
    const data = giphyData.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};

const renderGiphy = (array) => {
  return array.forEach((element) => {
    const img = document.createElement("img");
    img.src = element.images.downsized_medium.url;
    img.alt = element.title;
    div.appendChild(img);
  });
};
const reset = () => {
  div.innerHTML = "";
  inputNb.value = "";
};
button.addEventListener("click", async (e) => {
  e.preventDefault();
  let userInputs = urlResult(input.value, inputNb.value);
  reset();
  let result = await getGiphy(userInputs);
  if (result.length === 0) {
    div.innerHTML = "Sorry No Result";
  }
  renderGiphy(result);
});
