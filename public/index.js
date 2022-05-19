const checkToken = localStorage.getItem("token");
console.log(checkToken);
if (!checkToken) {
  window.location.assign("/login");
}
const logout = document.getElementById("logout");

logout.addEventListener("click", async () => {
  await localStorage.removeItem("token");
  window.location.assign("/signIn");
});
