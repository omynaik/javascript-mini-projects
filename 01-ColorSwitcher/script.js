const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const container = document.querySelector(".container");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);

    if (e.target.id == "grey") {
      body.style.backgroundColor = e.target.id;
      container.style.color = "whitesmoke";
      button.style.border = "5px solid pink";
    }

    if (e.target.id == "white") {
      body.style.backgroundColor = e.target.id;
      container.style.color = "grey";
    }

    if (e.target.id == "orange") {
      body.style.backgroundColor = e.target.id;
      container.style.color = "white";
    }

    if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id;
      container.style.color = "hotpink";
    }
  });
});
