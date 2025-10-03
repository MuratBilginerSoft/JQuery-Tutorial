$(document).ready(function() {
    // Helper function to format JSON
    function formatJSON(obj) {
        return JSON.stringify(obj, null, 2);
    }

    // Helper function to append result
    function appendResult($container, data, type = 'success') {
        const timestamp = new Date().toLocaleTimeString();
        const className = type === 'success' ? 'success-message' : 'error-message';
        let content = '';

        if (typeof data === 'object') {
            content = formatJSON(data);
        } else {
            content = data;
        }

        $container.append(
            `<div class="${className}">
                <span>[${timestamp}]</span><br>
                <pre>${content}</pre>
            </div>`
        );

        // Scroll to bottom
        $container.scrollTop($container[0].scrollHeight);
    }

    // Clear result container
    $('.clear-btn').on('click', function() {
        $(this).closest('.result-container').find('.result-content').empty();
    });

    // Basic AJAX demo
    $('[data-demo="basic"]').on('click', function() {
        const $resultContainer = $('#basic-result .result-content');
        
        appendResult($resultContainer, 'Sending basic AJAX request...');
        
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            method: 'GET',
            dataType: 'json',
            success: function(response) {
                appendResult($resultContainer, response);
            },
            error: function(xhr, status, error) {
                appendResult($resultContainer, error, 'error');
            }
        });
    });

    // GET request demo
    $('[data-demo="get"]').on('click', function() {
        const $resultContainer = $('#get-result .result-content');
        
        appendResult($resultContainer, 'Sending GET request...');
        
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'GET',
            success: function(data) {
                appendResult($resultContainer, data);
            },
            error: function(xhr, status, error) {
                appendResult($resultContainer, error, 'error');
            }
        });
    });

    // POST request demo
    $('[data-demo="post"]').on('click', function() {
        const $resultContainer = $('#post-result .result-content');
        
        const postData = {
            title: 'foo',
            body: 'bar',
            userId: 1
        };
        
        appendResult($resultContainer, 'Sending POST request with data:');
        appendResult($resultContainer, postData);
        
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'POST',
            data: postData,
            success: function(response) {
                appendResult($resultContainer, response);
            },
            error: function(xhr, status, error) {
                appendResult($resultContainer, error, 'error');
            }
        });
    });

    // Data Types demo
    $('[data-demo="dataTypes"]').on('click', function() {
        const $resultContainer = $('#dataTypes-result .result-content');
        
        appendResult($resultContainer, 'Fetching JSON data...');
        
        // JSON request
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                appendResult($resultContainer, 'JSON Response:');
                appendResult($resultContainer, data);
            },
            error: function(xhr, status, error) {
                appendResult($resultContainer, error, 'error');
            }
        });

        // Text request
        appendResult($resultContainer, 'Fetching Text data...');
        
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'GET',
            dataType: 'text',
            success: function(data) {
                appendResult($resultContainer, 'Text Response:');
                appendResult($resultContainer, data);
            },
            error: function(xhr, status, error) {
                appendResult($resultContainer, error, 'error');
            }
        });
    });

    // Add loading animation to run buttons
    $('.run-btn').on('click', function() {
        const $btn = $(this);
        const originalText = $btn.text();
        
        $btn.html('<span class="loading"></span>Running...');
        $btn.prop('disabled', true);
        
        setTimeout(() => {
            $btn.html(originalText);
            $btn.prop('disabled', false);
        }, 1000);
    });

    // Syntax highlighting
    Prism.highlightAll();
});
