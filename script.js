let inputField = document.getElementById("inputField");
let tasks = document.getElementById("tasks");
// console.log(tasks, inputField);

const addTask = () => {
  let task = inputField.value.trim();
  const li = document.createElement("li");
  li.innerHTML = `
  <label>
    <input type="checkbox" />
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
    //    console.log(span1);
  });

  editBtn.addEventListener("click", () => {
    let taskUpdate = prompt("éditez tâche:", span1.textContent);
    if (taskUpdate !== null) {
      span1.textContent = taskUpdate;
      checkbox.checked = false;
      span1.classList.remove("checked");
    }
    counter();
  });

  deleteBtn.addEventListener("click", () => {
    if (window.confirm("Êtes-vous sûr ?")) {
      tasks.removeChild(li);
    }
  });
  
};

const counter = () => {
  let completedTasks = document.querySelectorAll(".checked").length;
  let counters = document.getElementById("completedCounter");
  counters.textContent = completedTasks;
}
counter();
