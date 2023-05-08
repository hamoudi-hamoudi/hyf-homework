// ---- function to fetch the screenshot api ----

const getScreenShot = async (link) => {
  const url = `https://website-screenshot6.p.rapidapi.com/screenshot?url=${link}&width=1920&height=1080`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapidApi,
      "X-RapidAPI-Host": "website-screenshot6.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.screenshotUrl;
  } catch (error) {
    console.error(error);
  }
};
