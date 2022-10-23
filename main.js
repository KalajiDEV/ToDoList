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
  <div class="tools">
  <i class="fa-sharp fa-solid fa-trash"></i>
  <i class="fa-solid fa-star"></i>
  <i class="fa-solid fa-share"></i>
</div>
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
