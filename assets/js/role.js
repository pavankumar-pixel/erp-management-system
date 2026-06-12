const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!currentUser) {
    window.location.href = "../../modules/users/login.html";
}
