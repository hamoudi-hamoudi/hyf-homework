// Create your own json file

const getMyJson = async () => {
  const pc = await fetch("data.json");
  const pcData = await pc.json();
  console.log(pcData);
};
getMyJson();

// Find a cool api

const getAnime = async () => {
  // The API provided in the URL appears to be using the REST API architecture,
  // which means that it follows the standard HTTP protocol methods like GET, POST, PUT, DELETE
  // we can see that it uses the GET method to retrieve data related to Anime.

  const animeApi = await fetch(
    "https://api.jikan.moe/v4/anime?fbclid=IwAR0p36cezeZ10bEP8NsDIGS0F8BkeQedubqdj6MF5zJ0METNCBopVzkS9CY"
  );
  // the api responds with an object that have keys.
  const data = await animeApi.json();
  console.log(data.data);
  // the data key have an array that contain objects that have different types of values ,
  //... number a string another object and Booleans
};
getAnime();
