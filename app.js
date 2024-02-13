const submit = document.getElementById("submit");
const loop = document.querySelectorAll(".loop");
const email = document.getElementById("email");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  loop.forEach((input) => {
    if (input.value === "") {
      email.classList.remove("like");
      input.classList.add("red");
    } else {
      input.classList.remove("red");
    }
  });
  if (email.value !== "") {
    if (email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      email.classList.remove("like");
    } else {
      email.classList.add("like");
    }
  }
});
