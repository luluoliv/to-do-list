const btnAdd = document.querySelector('#btn-add');

function addNewTask() {
    const input = document.querySelector('#name-task');
    const tasks = document.querySelector('#tasks');

    if (!input.value) {
        alert('Dê um nome a tarefa');
    } else {
        const newTask = document.createElement("div");
        newTask.classList.add("task");
        tasks.appendChild(newTask);


        const taskText = document.createElement("span");
        taskText.classList.add("task-text");
        taskText.innerHTML = input.value;
        newTask.appendChild(taskText);


        const btnEdit = document.createElement("button");
        btnEdit.classList.add('task-edit');
        btnEdit.classList.add('fa-solid');
        btnEdit.classList.add('fa-pen');
        newTask.appendChild(btnEdit);

        btnEdit.addEventListener('click', function () {
            const newTaskName = prompt('Novo nome para tarefa');
            taskText.innerHTML = newTaskName;
        });


        const btnRemove = document.createElement("button");
        btnRemove.classList.add('task-remove');
        btnRemove.classList.add('fa-solid');
        btnRemove.classList.add('fa-trash');
        newTask.appendChild(btnRemove);

        btnRemove.addEventListener('click', function () {
            tasks.removeChild(newTask);
        });


        input.value = '';
    }
};
