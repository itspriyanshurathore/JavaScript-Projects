const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let myArray = [];

addBtn.addEventListener('click', function () {
  const inputValue = taskInput.value.trim();

  if (inputValue !== '') {
    myArray.push(inputValue); // Add to array

    // Create list item
    const li = document.createElement('li');
    li.className = 'task-item';

    // Create text span
    const taskText = document.createElement('span');
    taskText.textContent = inputValue;

    // Create button container
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'task-buttons';

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.className = 'complete-btn';
    completeBtn.addEventListener('click', function () {
      li.classList.toggle('completed');
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function () {
      taskList.removeChild(li);
      myArray = myArray.filter(task => task !== inputValue);
      console.log(myArray);
    });

    // Add buttons to group
    buttonGroup.appendChild(completeBtn);
    buttonGroup.appendChild(deleteBtn);

    // Add everything to li
    li.appendChild(taskText);
    li.appendChild(buttonGroup);

    // Add li to task list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
    console.log(myArray);
  }
});
