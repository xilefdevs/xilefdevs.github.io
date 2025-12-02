function auth() {
  var name = document.getElementById("fname").value;
  var password = document.getElementById("Password").value;

  if (name === "Marisol" && password === "022625") {
    window.location.replace("index.html");
  } else {
    alert("Invalid Information");
    return;
  }
}
