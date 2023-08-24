document.addEventListener("DOMContentLoaded", function () {
    const addTaskForm = document.querySelector(".add-task-form");
    const sections = document.querySelectorAll(".kanban-section");
  
    // Create a new task card
    function createTaskCard(title, description) {
      const taskCard = document.createElement("div");
      taskCard.classList.add("task-card");
      taskCard.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      `;
  
      const editButton = taskCard.querySelector(".edit-btn");
      const deleteButton = taskCard.querySelector(".delete-btn");
  
      // Handle edit button click
      editButton.addEventListener("click", () => {
        // Implement your edit logic here
        console.log("Edit button clicked for task:", title);
      });
  
      // Handle delete button click
      deleteButton.addEventListener("click", () => {
        taskCard.remove();
      });
  
      // Make task card draggable
      taskCard.draggable = true;
  
      return taskCard;
    }
  
    // Handle form submission
    addTaskForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const taskTitleInput = addTaskForm.querySelector("input[name='task-title']");
      const taskDescriptionInput = addTaskForm.querySelector("input[name='task-description']");
      
      const taskTitle = taskTitleInput.value;
      const taskDescription = taskDescriptionInput.value;
  
      if (taskTitle && taskDescription) {
        const newTaskCard = createTaskCard(taskTitle, taskDescription);
        sections[0].appendChild(newTaskCard);
  
        // Clear form inputs
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
      }
    });
  
    // Implement drag-and-drop functionality
    sections.forEach((section) => {
      section.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
  
      section.addEventListener("drop", (e) => {
        const cardId = e.dataTransfer.getData("text/plain");
        const card = document.getElementById(cardId);
        section.appendChild(card);
      });
    });
  });
  