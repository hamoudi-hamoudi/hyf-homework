const userPassWord = document.getElementById("user-password");
const signUpButton = document.getElementById("sign-button");
const userName = document.getElementById("user-name");

// ---- function that create any amount of users using a name and password ----

const createUser = async (data) => {
  const url = `https://crudcrud.com/api/${apiKey}/users`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
  } catch (error) {
    console.log(error);
  }
};

// ---- button to create the user and send to api data ----

signUpButton.addEventListener("click", async (e) => {
  e.preventDefault();
  if (userName.value && userPassWord.value) {
    const data = {
      name: userName.value,
      password: userPassWord.value,
    };

    await createUser(data);
    window.location.href = "/index.html"; // forward to the main html page after the signUp form
  } else {
    alert("please fill the form");
  }
});
