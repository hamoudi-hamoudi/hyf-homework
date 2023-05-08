const signUpButton = document.getElementById("sign-button");
loginButton = document.getElementById("login-button");
userName = document.getElementById("user-name");
userPassWord = document.getElementById("user-password");
saveScreenButoon = document.getElementById("shot-save");
viewScreenShotButton = document.getElementById("view");
inputUrl = document.getElementById("url");
userCollection = document.getElementById("userCollection");
displayDiv = document.getElementById("display-url");
let userId; // to store unique id of the user
let urlLink; // to store a url link

// ---- button that take the inpute url and view it in Dom ----

viewScreenShotButton.addEventListener("click", async (e) => {
  e.preventDefault();
  displayDiv.innerHTML = "";
  if (inputUrl.value) {
    const img = document.createElement("img");
    // view the image before saving
    img.src = await getScreenShot(inputUrl.value);
    img.style.width = "80%";
    img.style.height = "auto";
    // store the url in a varible, if save button click then push this to crudcrud api
    urlLink = img.src;
    displayDiv.appendChild(img);
  } else {
    alert("please give a link");
  }
});

// ---- button that forward to the page signUp html ----

signUpButton.addEventListener("click", async (e) => {
  e.preventDefault();
  window.location.href = "/signup/signup.html";
});

// ---- function that get a list of all the users that are signUp ----
const getUsers = async () => {
  try {
    const users = await fetch(`https://crudcrud.com/api/${apiKey}/users`);
    const usersData = await users.json();
    return usersData;
  } catch (err) {
    console.log(err);
  }
};

// ---- button listen to the action of login, takes the inputs of the client ----

loginButton.addEventListener("click", async (e) => {
  e.preventDefault();
  userCollection.innerHTML = "";
  const users = await getUsers();
  if (userName.value && userPassWord.value) {
    // check that user is valide when login
    const validUser = await users.find((user) => {
      if (
        user.name === userName.value &&
        user.password === userPassWord.value
      ) {
        userId = user._id;
        // get all the user login previous screenshots
        getUserScreenshots();
        loginButton.innerText = `welcome ${user.name}`;
      }
    });
    if (!userId) {
      alert("please SignUp, User not found");
    }
  } else {
    alert("please fill up the Form");
  }
});

// ---- function that save image to the api and call a function that gets all the past url saving----

const saveSccreenShot = async (id) => {
  const url = `https://crudcrud.com/api/${apiKey}/screenshot`;
  const data = { thisUser: id, saved: await urlLink }; // unique id add to each specific user
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    userCollection.innerHTML = "";
    getUserScreenshots();
  } catch (error) {
    console.log(error);
  }
};

// ---- button to save the image url ----

saveScreenButoon.addEventListener("click", async (e) => {
  e.preventDefault();
  if (userId) {
    displayDiv.innerHTML = "";
    inputUrl.value = "";
    // save screenshot with this logged in user ID
    await saveSccreenShot(userId);
  } else {
    alert("please log in or sign up to save");
  }
});

// ---- function that gets all saving of the logedIn user ----

const getUserScreenshots = async () => {
  try {
    const users = await fetch(`https://crudcrud.com/api/${apiKey}/screenshot`);
    const usersData = await users.json();
    const urls = await usersData.filter((item) => item.thisUser === userId);
    // display all this user images
    renderResults(urls);
  } catch (err) {
    console.log(err);
  }
};

// ---- function that delete the image from a saved api ----

const deleteScreenShot = async (id) => {
  const url = `https://crudcrud.com/api/${apiKey}/screenshot/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
  } catch (error) {
    console.log(error);
  }
};

// ---- render the result in DOM and detect action of the delete image from api ----

const renderResults = (array) => {
  array.forEach((element) => {
    const divItem = document.createElement("div");
    divItem.classList.add("item");
    const img = document.createElement("img");
    img.src = element.saved;
    divItem.setAttribute("id", element._id); // give the parent of the image the same id of the crudcrud id
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "X";
    divItem.appendChild(img);
    divItem.appendChild(deleteButton);
    userCollection.appendChild(divItem);
  });
  // if delete button clicked then delete the image
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) =>
    button.addEventListener("click", async (event) => {
      const imgElement = event.target.parentElement;
      imgElement.style.display = "none";
      const imgId = imgElement.id;
      await deleteScreenShot(imgId); // specific image id added to remove it from the api data
    })
  );
};
