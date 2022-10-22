const addBtn = document.querySelector(".addBtn");
const tasksbox = document.getElementById("tasksbox");
const inputTitle = document.getElementsByTagName("input")[0];
const inputtask = document.getElementsByTagName("input")[1];
const form = document.querySelector("form");

form.addEventListener("submit", (eo) => {
  eo.preventDefault();

  const datum = new Date();
  const task = `<section>
  <h3>${inputTitle.value}</h3>
  <p>${inputtask.value}</p>
  <p class="date">${datum}</p>
  </section>`;
  tasksbox.innerHTML += task;
  eo.preventDefault();
  inputTitle.value = "";
  inputtask.value = "";
});

const changeColor = document
  .getElementById("changeColor")
  .addEventListener("click", (params) => {
    document.body.classList.toggle("changeColor");
  });
