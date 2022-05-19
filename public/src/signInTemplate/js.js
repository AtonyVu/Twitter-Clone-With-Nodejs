const user = document.getElementById("inputUser");
const name = document.getElementById("inputName");
const email = document.getElementById("inputEmail");
const password = document.getElementById("inputPassword");
const Repassword = document.getElementById("inputRePassword");
const btnLogin = document.getElementById("btn-signIn");

btnLogin.addEventListener("click", async (event) => {
  if (password.value !== Repassword.value) {
    console.log("ko khớp");
    alert("MẬt khẩu không trùng khớp ");
  } else {
    await axios({
      method: "post",

      url: "http://localhost:5000/signIn",
      data: {
        User: user.value,
        Password: password.value,
        Name: name.value,
        Email: email.value,
      },
    }).then((result) => {
      console.log(result);
    });
  }
});

// console.log("");
