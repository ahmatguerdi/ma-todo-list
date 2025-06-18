let inputField = document.getElementById("inputField");
let tasks = document.getElementById("tasks");
// console.log(tasks, inputField);

const addTask = () => {
  let task = inputField.value.trim();
  if (task === "" || task === null) {
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `
  <label>
    <input type="checkbox" / required>
    <span>${task}</span>
  </label>
  <span class="editBtn" title="Modifier"><i class="fa-solid fa-pen-to-square"></i></span>
  <span class="deleteBtn" title="Supprimer"><i class="fa-solid fa-trash"></i></span>
    `;
  tasks.appendChild(li);
  inputField.value = "";

  const checkbox = li.querySelector("input");
  let span1 = li.querySelectorAll("span")[0];
  const editBtn = li.querySelector(".editBtn");
  const deleteBtn = li.querySelector(".deleteBtn");
  //   console.log(deleteBtn);
  checkbox.addEventListener("click", () => {
    span1.classList.toggle("checked");
    counter();
  });

  editBtn.addEventListener("click", () => {
    let taskUpdate = prompt("éditez tâche:", span1.textContent);
    if (taskUpdate === "" || taskUpdate === null) {
      alert("Vous devez reseigner le champ");
      taskUpdate = prompt("éditez tâche:", span1.textContent);
      span1.textContent = taskUpdate;
      span1.textContent = taskUpdate;
      checkbox.checked = false;
      span1.classList.remove("checked");
    }
    counter();
  });

  deleteBtn.addEventListener("click", () => {
    if (window.confirm("Êtes-vous sûr ?")) {
      li.remove();
    }
    counter();
  });

  counter();
};

const counter = () => {
  let completedTasks = document.querySelectorAll(".checked").length;
  let counters = document.getElementById("completedCounter");
  counters.textContent = completedTasks;

  const taches = document.querySelectorAll("li > label > span:not(.checked)").length;
  document.querySelector("#pendingCounter").textContent = taches;
  document.querySelector("#allCounter").textContent = taches + completedTasks;

  const delet = document.querySelector("#delete");

  delet.addEventListener("click", () => {
    if (window.confirm("Êtes-vous sûr ?")) {
      tasks.innerHTML = "";
      return;
    }
    counter();
  });
};
counter();

