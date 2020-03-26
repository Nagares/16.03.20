

const $formAddTask = $('#formAddTask');
const $tasksList = $('#tasks-list');
const $modalAddTask = $('#modalAddTask');
const $formEditTask = $('#formEditTask');
const $modalEditTask = $('#modalEditTask');



$formAddTask.on('submit', function(event) {
	event.preventDefault();

	let task = {
		id: new Date().getTime(),
		title: $('[name="title"]', this).val(),
		date: $('[name="date"]', this).val(),
		text: $('[name="text"]', this).val(),
		status: 1 // 1 - todo, 2 - in progress, 3 - done
	};
    

	addTask(task.id, task);

	localStorage.setItem(task.id, JSON.stringify(task));
 
	$modalAddTask.modal('hide');

	this.reset();
});

for (let key in localStorage) {
	if (!localStorage.hasOwnProperty(key)) continue;

	const task = JSON.parse(localStorage[key]);

	addTask(task.id, task);
}

$('body').on('click', '.btn-edit', function() {
	const $parent = $(this).parents('[data-id]');

	const taskId = $parent.data('id');

	const task = JSON.parse(localStorage.getItem(taskId));

	for (let key in task) {
		$formEditTask.find(`[name="${key}"]`).val(task[key]);
	}

	$modalEditTask.modal('show');
});

$('body').on('click', '.btn-delete', function(event) {
	const $parent = $(this).parents('[data-id]');

	const taskId = $parent.data('id');
	$parent.remove();

	localStorage.removeItem(taskId);
});

$formEditTask.on('submit', function(event) {
	event.preventDefault();

	const task = {
		title: $('[name="title"]', this).val(),
		status: $('[name="status"]', this).val(),
		date: $('[name="date"]', this).val(),
		text: $('[name="text"]', this).val(),
		id: $('[name="id"]', this).val()
	};

	$tasksList.find(`[data-id="${task.id}"]`).remove();

	addTask(task.id, task);

	$modalEditTask.modal('hide');

	localStorage.setItem(task.id, JSON.stringify(task));
});

$('#sandbox-container input').datepicker({
});


$('body').on('click', '.list-group-item', function() {

	const $taskId = $(this).data('id');
	const task = JSON.parse(localStorage.getItem($taskId));
	
	let item = $(this)

	if( item.children('div').hasClass('exitInfo') ) {
	
		let del = item.children('div.exitInfo');

		del.remove();
		
	}
	else{

    addInfo(item, task)

	}

});

	


