    $(document).ready(function() {
        $('#task-form').submit(function(event) {
        event.preventDefault();
        
        
        const taskText = $('#task-input').val().trim();
        
        
        if (taskText !== '') {
            
            $('#task-list').append('<li>' + taskText + '</li>');
            
            
            $('#task-input').val('');
        }
        });
        
        
        $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
        });
    
        
        $('#clear-tasks').click(function() {
        $('#task-list').empty();
        });
    });
    
