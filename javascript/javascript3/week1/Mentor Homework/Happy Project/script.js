console.log("Hello");

const getUserAnalysis = async (string) => {
  const url = "https://twinword-sentiment-analysis.p.rapidapi.com/analyze/";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "e0c2cb79bfmsh74450775b975ec4p1c874bjsn3cbd7fc871e3",
      "X-RapidAPI-Host": "twinword-sentiment-analysis.p.rapidapi.com",
    },
    body: new URLSearchParams({
      text: string,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const button = document.getElementById("button");
const input = document.getElementById("inputName");
const textArea = document.getElementById("textarea");
const happy = document.getElementById("happy");
const sad = document.getElementById("sad");
const neutral = document.getElementById("neutral");
const div = document.getElementsByClassName("fade show");

button.addEventListener("click", async (e) => {
  e.preventDefault();
  if (input.value && textArea.value) {
    const result = await getUserAnalysis(textArea.value);
    const str = input.value;
    const name = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    analysAndDisplay(result, name);
    reset();
  }
});

const analysAndDisplay = (text, name) => {
  switch (text.type) {
    case "positive":
      happy.style.display = "initial";
      sad.style.display = "none";
      neutral.style.display = "none";
      const rateOfHappy = text.score >= 0.7 ? "very happy" : "happy";
      div[0].style.display = "initial";
      div[0].innerText = ` Hey there ${name}. You are clearly ${rateOfHappy}! :)`;
      div[1].style.display = "none";
      div[2].style.display = "none";

      break;
    case "negative":
      const rateOfSad = text.score >= -0.65 ? "very sad" : "sad";
      sad.style.display = "initial";
      happy.style.display = "none";
      neutral.style.display = "none";
      div[1].style.display = "initial";
      div[1].innerText = `I'm sorry ${name}. You are clearly ${rateOfSad}! :(`;
      div[0].style.display = "none";
      div[2].style.display = "none";
      break;
    case "neutral":
      neutral.style.display = "initial";
      sad.style.display = "none";
      happy.style.display = "none";
      div[2].innerText = ` Hello ${name} You are so-so :|`;
      div[2].style.display = "initial";
      div[0].style.display = "none";
      div[1].style.display = "none";
      break;
    default:
      console.log(`Sorry no result`);
  }
};

const reset = () => {
  input.value = "";
  textArea.value = "";
};
