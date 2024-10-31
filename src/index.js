// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

{/* <form id="create-task-form" action="" method="POST">
<label for="new-task-description">Task description:</label>
<input type="text" id="new-task-description" name="new-task-description" placeholder="description">
<input type="submit" value="Create New Task">
</form> */}

formElement = document.querySelector("form")
taskText = formElement.querySelector("#new-task-description")

document.addEventListener("DOMContentLoaded", () => {

  formElement.addEventListener("submit", () => {
    event.preventDefault();
  })
  taskText.addEventListener("submit",()=> console.log(nameInput.value))
});


event.preventDefault()
console.log()