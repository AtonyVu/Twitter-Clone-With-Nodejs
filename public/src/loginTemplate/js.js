console.log("ok đi theo ");
const user = document.getElementById("inputUser");
const password = document.getElementById("inputPassword");
const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", async (event) => {
  await axios({
    method: "post",
    url: "http://localhost:5000/login",
    data: { User: user.value, Password: password.value },
  }).then((result) => {
    localStorage.setItem("token", result.data.token);
    console.log(result);
    window.location.assign("/");
  });
});

console.log("");
