const inputTitle = document.getElementsByTagName("input")[0];
const inputtask = document.getElementsByTagName("input")[1];
const form = document.querySelector("form");
const tasksbox = document.getElementById("tasksbox");
const tools = document.getElementById("tools");

// color Change
const changeColor = document
  .getElementById("changeColor")
  .addEventListener("click", (params) => {
    document.body.classList.toggle("changeColor");
  });

// Create my Task
form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `<section>
  <h3>${inputTitle.value}</h3>
  <p>${inputtask.value}</p>
  <div class="tools">
  <i class="fa-sharp fa-solid fa-trash"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-share"></i>
  </div>
  </section>`;
  tasksbox.innerHTML += task;
  inputTitle.value = "";
  inputtask.value = "";
});

// Delete Task // favorite

tasksbox.addEventListener("click", (eo) => {
  if (eo.target.className == "fa-sharp fa-solid fa-trash") {
    eo.target.parentElement.parentElement.remove();
  } else if (eo.target.className == "fa-solid fa-star") {
    eo.target.parentElement.parentElement.style.background = "yellow";
  }
});
