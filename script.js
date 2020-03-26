function addTask(id, task) {
	const $btnEdit = $('<button>')
						.addClass('btn btn-warning btn-xs btn-edit pull-right')
						.html('<i class="glyphicon glyphicon-pencil"></i>')

	const $btnDelete = $('<button>')
			.addClass('btn btn-danger btn-xs pull-right btn-delete')
			.html('<i class="glyphicon glyphicon-trash"></i>');

	const $taskItem = $('<li>')
			.addClass('list-group-item')
			.text(task.title)
			.attr('data-id', id)
			.append($btnDelete)
			.append($btnEdit);

	$tasksList
		.find(`[data-status="${task.status}"]`)
		.append($taskItem);
}

function addInfo(parent, task) {
	const $btnExit = $('<div>')
						.addClass('btn btn-xs btn-exit pull-right')
						.html('<i class="glyphicon glyphicon-menu-up"></i>');

	const $divDate = $('<div>')
						.addClass('exitInfo')
						.text(task.date);
				

	const $divText = $('<div>')
						.addClass('exitInfo')
						.text(task.text)
						.append($btnExit);
						
	parent	
		    .append($divDate)
			.append($divText);


}