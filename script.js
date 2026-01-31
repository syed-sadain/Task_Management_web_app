const API = "http://127.0.0.1:5000/tasks";
const taskList = document.getElementById("taskList");

const titleInput = document.getElementById("title");
const descInput = document.getElementById("description");
const statusSelect = document.getElementById("status");

// 🔄 Load all tasks
function loadTasks() {
  fetch(API)
    .then(res => res.json())
    .then(tasks => {
      taskList.innerHTML = "";

      tasks.forEach(task => {
        const div = document.createElement("div");
        div.className = "task";

        div.innerHTML = `
          <span class="badge ${task.status}">
            ${task.status.replace("-", " ")}
          </span>

          <h3>${task.title}</h3>
          <p>${task.description || "No description"}</p>

          <select class="status-select">
            <option value="Pending" ${task.status === "Pending" ? "selected" : ""}>Pending</option>
            <option value="In-Progress" ${task.status === "In-Progress" ? "selected" : ""}>In Progress</option>
            <option value="Completed" ${task.status === "Completed" ? "selected" : ""}>Completed</option>
          </select>

          <button class="delete-btn">Delete</button>
        `;

        // 🔁 Update status
        div.querySelector(".status-select").addEventListener("change", (e) => {
          updateStatus(task.id, e.target.value);
        });

        // ❌ Delete task
        div.querySelector(".delete-btn").addEventListener("click", () => {
          deleteTask(task.id);
        });

        taskList.appendChild(div);
      });
    });
}

// ➕ Add task
document.getElementById("taskForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const payload = {
    title: titleInput.value,
    description: descInput.value,
    status: statusSelect.value
  };

  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).then(() => {
    e.target.reset();
    loadTasks();
  });
});

// 🔄 Update status API call
function updateStatus(id, status) {
  fetch(`${API}/${id}/status`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  }).then(loadTasks);
}

// ❌ Delete task
function deleteTask(id) {
  fetch(`${API}/${id}`, { method: "DELETE" })
    .then(loadTasks);
}

// Initial load
loadTasks();
