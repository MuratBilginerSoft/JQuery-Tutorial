$(document).ready(function() {
    // Add new todo
    $('#add-todo').on('click', function() {
        const todoText = $('#todo-input').val().trim();
        if (todoText) {
            addTodoItem(todoText);
            $('#todo-input').val('');
        }
    });

    // Allow adding todo with Enter key
    $('#todo-input').on('keypress', function(e) {
        if (e.which === 13) {
            const todoText = $(this).val().trim();
            if (todoText) {
                addTodoItem(todoText);
                $(this).val('');
            }
        }
    });

    // Function to add new todo item
    function addTodoItem(text) {
        const todoItem = $('<div>')
            .addClass('todo-item')
            .append(
                $('<span>').text(text),
                $('<button>')
                    .addClass('delete-btn')
                    .text('Delete')
            );

        $('#todo-list').append(todoItem);

        // Add click handlers for the new item
        todoItem.on('click', 'span', function() {
            $(this).parent().toggleClass('completed');
        });

        todoItem.on('click', '.delete-btn', function(e) {
            e.stopPropagation();
            $(this).parent().fadeOut(300, function() {
                $(this).remove();
            });
        });
    }
});
