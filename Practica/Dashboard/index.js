const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

document.addEventListener('DOMContentLoaded', function () {
   // TOGGLE SIDEBAR
	const menuBar = document.querySelector('#content nav .bx.bx-menu');
	const sidebar = document.getElementById('sidebar');

	menuBar.addEventListener('click', function () {
		sidebar.classList.toggle('hide');
	})

	// Search functionality
	const searchButton = document.querySelector('#content nav form .form-input button');
	const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
	const searchForm = document.querySelector('#content nav form');

	searchButton.addEventListener('click', function (e) {
		if(window.innerWidth < 576) {
			e.preventDefault();
			searchForm.classList.toggle('show');
			if(searchForm.classList.contains('show')) {
				searchButtonIcon.classList.replace('bx-search', 'bx-x');
			} else {
				searchButtonIcon.classList.replace('bx-x', 'bx-search');
			}
		}
	})

	if(window.innerWidth < 768) {
		sidebar.classList.add('hide');
	} else if(window.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}

	window.addEventListener('resize', function () {
		if(this.innerWidth > 576) {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
			searchForm.classList.remove('show');
		}
	})

	const switchMode = document.getElementById('switch-mode');

	switchMode.addEventListener('change', function () {
		if(this.checked) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	})

	const todoList = document.querySelector('.todo-list');
	const addTodoButton = document.getElementById('addTodoBtn');
	const newTodoInput = document.getElementById('newTodo');

	loadTodos();

	addTodoButton.addEventListener('click', function () {
		const todoText = newTodoInput.value.trim();
		if (todoText) {
			addTodoToList(todoText);
			newTodoInput.value = ''; // Limpiar el cuadro de entrada después de agregar
            
        }
        
	});

	function loadTodos() {
		const todos = JSON.parse(localStorage.getItem('todos')) || [];
		renderTodos(todos);
	}

	// Función para agregar un todo a la lista y al localStorage
	function addTodoToList(todoText) {
		const todos = JSON.parse(localStorage.getItem('todos')) || [];
		todos.push({ text: todoText, completed: false });
		localStorage.setItem('todos', JSON.stringify(todos));
		renderTodos(todos);
	}

	// Función para renderizar los todos en la lista
	function renderTodos(todos) {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = todo.text;
        listItem.classList.add(todo.completed ? 'completed' : 'not-completed');

        // Botón para eliminar tarea
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="bx bx-trash"></i>';
        deleteButton.addEventListener('click', function () {
            deleteTodo(index);
        });
        // Agregar botones al elemento de la lista
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
    });
}

// Función para eliminar una tarea
function deleteTodo(index) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
}


});

