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

    // $.get() demo
    $('[data-demo="get"]').on('click', function() {
        const $resultContainer = $('#get-result .result-content');
        
        // Simple GET request
        appendResult($resultContainer, 'Sending simple GET request...');
        $.get('https://jsonplaceholder.typicode.com/posts/1', 
            function(data) {
                appendResult($resultContainer, data);
            }
        ).fail(function(jqXHR, textStatus, error) {
            appendResult($resultContainer, error, 'error');
        });

        // GET request with parameters
        appendResult($resultContainer, 'Sending GET request with parameters...');
        $.get('https://jsonplaceholder.typicode.com/posts', {
            userId: 1,
            _limit: 2
        }, function(data) {
            appendResult($resultContainer, data);
        }).fail(function(jqXHR, textStatus, error) {
            appendResult($resultContainer, error, 'error');
        });
    });

    // $.post() demo
    $('[data-demo="post"]').on('click', function() {
        const $resultContainer = $('#post-result .result-content');
        
        const postData = {
            title: 'Yeni Gönderi',
            body: 'Gönderi içeriği',
            userId: 1
        };
        
        appendResult($resultContainer, 'Sending POST request with data:');
        appendResult($resultContainer, postData);
        
        $.post('https://jsonplaceholder.typicode.com/posts',
            postData,
            function(response) {
                appendResult($resultContainer, response);
            }
        ).fail(function(jqXHR, textStatus, error) {
            appendResult($resultContainer, error, 'error');
        });
    });

    // $.getJSON() demo
    $('[data-demo="getJson"]').on('click', function() {
        const $resultContainer = $('#getJson-result .result-content');
        
        // Simple JSON request
        appendResult($resultContainer, 'Fetching user data...');
        $.getJSON('https://jsonplaceholder.typicode.com/users/1',
            function(data) {
                appendResult($resultContainer, data);
            }
        ).fail(function(jqXHR, textStatus, error) {
            appendResult($resultContainer, error, 'error');
        });

        // JSON request with parameters
        appendResult($resultContainer, 'Fetching comments with parameters...');
        $.getJSON('https://jsonplaceholder.typicode.com/comments', {
            postId: 1,
            _limit: 2
        }, function(data) {
            appendResult($resultContainer, data);
        }).fail(function(jqXHR, textStatus, error) {
            appendResult($resultContainer, error, 'error');
        });
    });

    // $.getScript() demo
    $('[data-demo="getScript"]').on('click', function() {
        const $resultContainer = $('#getScript-result .result-content');
        
        appendResult($resultContainer, 'Loading Moment.js...');
        
        $.getScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js')
            .done(function() {
                appendResult($resultContainer, 'Moment.js successfully loaded');
                appendResult($resultContainer, 'Current time: ' + moment().format('LLLL'));
                
                // Additional moment.js examples
                appendResult($resultContainer, 'Relative time: ' + moment().startOf('day').fromNow());
                appendResult($resultContainer, 'Calendar time: ' + moment().calendar());
            })
            .fail(function(jqXHR, textStatus, error) {
                appendResult($resultContainer, error, 'error');
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
        }, 2000);
    });

    // Initialize syntax highlighting
    Prism.highlightAll();

    // Add hover effect to example sections
    $('.example-section').hover(
        function() {
            $(this).find('h2').css('color', 'var(--secondary-color)');
        },
        function() {
            $(this).find('h2').css('color', 'var(--primary-color)');
        }
    );
});
