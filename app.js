(function () {
    var newTask = document.querySelector("#newTask");
    var addNewTask = document.querySelector("#addNewTask");

    addNewTask.addEventListener('click', function () {
        if (newTask.value !== '') {
            createNewTask(newTask.value);
            newTask.value = '';
        }
    });

    function createNewTask(task) {
        var activeList = document.querySelector('#activeList');
        var listElement = document.createElement('li');

        var div = document.createElement('div');
        div.classList.add('todoList');
        div.classList.add('active');

        var p = document.createElement('p');
        p.classList.add('todo');
        p.innerHTML = task;

        var a = document.createElement('a');
        a.classList.add('material-button-raised');
        a.onclick = completeATask;

        var i = document.createElement('i');
        i.classList.add('material-icons');
        i.innerHTML = 'check';

        a.appendChild(i);

        div.appendChild(p);
        div.appendChild(a);

        listElement.appendChild(div);
        activeList.appendChild(listElement);
    }

    function completeATask() {
        var task = event.target.previousSibling.innerHTML;
        var taskToRemove = event.target.parentNode.parentNode;
        createCompletedTask(task);
        taskToRemove.parentNode.removeChild(taskToRemove);
    }

    function createCompletedTask(task) {
        var activeList = document.querySelector('#inactiveList');
        var listElement = document.createElement('li');

        var div = document.createElement('div');
        div.classList.add('todoList');

        var p = document.createElement('p');
        p.classList.add('todo-done');
        p.innerHTML = task;

        var a = document.createElement('a');
        a.classList.add('material-button-raised');
        a.onclick = removeTask;

        var i = document.createElement('i');
        i.classList.add('material-icons');
        i.innerHTML = 'clear';

        a.appendChild(i);

        div.appendChild(p);
        div.appendChild(a);

        listElement.appendChild(div);
        activeList.appendChild(listElement);
    }

    function removeTask() {
        var taskToRemove = event.target.parentNode.parentNode;
        taskToRemove.parentNode.removeChild(taskToRemove);
    }
})();