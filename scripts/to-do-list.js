// todo.js
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = ''; // Clear input field
        }
    });

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = ''; // Clear input field
            }
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    }

    taskList.addEventListener('click', function(e) {
        if (e.target.tagName === 'SPAN') {
            e.target.classList.toggle('completed');
        }
    });
});
