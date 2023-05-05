const button = document.getElementById("button");
const lPTag = document.getElementById("lPress");
const sPTag = document.getElementById("sPress");
const input = document.querySelector("input");

const reset = () => {
  lPTag.innerHTML = "";
  sPTag.innerHTML = "";
  input.value = "";
  button.innerHTML = "Start Game!";
};

function start() {
  let s = 0;
  let l = 0;
  let count = input.value;
  const keypress = (e) => {
    switch (e.key) {
      case "l":
        l++;
        lPTag.innerHTML = l;
        break;
      case "s":
        s++;
        sPTag.innerHTML = s;
        break;
    }
  };
  if (count === "" || isNaN(count)) {
    input.placeholder = "please insert a number";
  } else {
    document.addEventListener("keydown", keypress);
    let myInterval = setInterval(() => {
      button.innerHTML = -1 + count--;
    }, 1000);

    const result = setTimeout(() => {
      clearInterval(myInterval);
      if (s < l) {
        lPTag.innerHTML = "L wins";
      } else if (s > l) {
        sPTag.innerHTML = "S wins";
      } else if (s === 0 || l === 0) {
        button.innerHTML = "no key press, try to play this time";
      } else {
        button.innerHTML = "its a tie try again";
        button.style.backgroundColor = "#7f1515";
        input.value = "";
      }
      document.removeEventListener("keydown", keypress);
    }, count * 1000);
  }
  reset();
}
button.addEventListener("click", start);
