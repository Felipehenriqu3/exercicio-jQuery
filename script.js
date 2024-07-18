    $(document).ready(function() {
        // Capturar o evento de submissão do formulário
        $('#task-form').submit(function(event) {
        event.preventDefault();
        
        // Obter o valor do input
        const taskText = $('#task-input').val().trim();
        
        // Verificar se o input não está vazio
        if (taskText !== '') {
            // Adicionar um novo item na lista
            $('#task-list').append('<li>' + taskText + '</li>');
            
            // Limpar o input
            $('#task-input').val('');
        }
        });
        
        // Adicionar evento de clique nos itens da lista
        $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
        });
    
        // Adicionar evento de clique no botão para limpar a lista
        $('#clear-tasks').click(function() {
        $('#task-list').empty();
        });
    });
    