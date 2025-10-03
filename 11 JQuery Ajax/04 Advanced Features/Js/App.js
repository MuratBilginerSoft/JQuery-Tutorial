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

    // beforeSend and complete demo
    $('[data-demo="beforeSend"]').on('click', function() {
        const $resultContainer = $('#beforeSend-result .result-content');
        
        appendResult($resultContainer, 'AJAX isteği başlatılıyor...');
        
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'GET',
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Custom-Header', 'value');
                appendResult($resultContainer, 'beforeSend çalıştı');
                appendResult($resultContainer, {
                    headers: {
                        'Custom-Header': 'value'
                    }
                });
            },
            success: function(response) {
                appendResult($resultContainer, 'Veri başarıyla alındı:');
                appendResult($resultContainer, response);
            },
            error: function(xhr, status, error) {
                appendResult($resultContainer, error, 'error');
            },
            complete: function(xhr, status) {
                appendResult($resultContainer, 'İstek tamamlandı: ' + status);
            }
        });
    });

    // Timeout and Cache Control demo
    $('[data-demo="timeout"]').on('click', function() {
        const $resultContainer = $('#timeout-result .result-content');
        
        appendResult($resultContainer, 'Timeout ayarlı istek başlatılıyor...');
        
        // Normal request
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'GET',
            timeout: 5000,
            cache: false,
            beforeSend: function(xhr) {
                appendResult($resultContainer, 'Cache-Control header\'ı ayarlandı');
            },
            success: function(response) {
                appendResult($resultContainer, 'Veri başarıyla alındı:');
                appendResult($resultContainer, response);
            },
            error: function(xhr, status, error) {
                if (status === 'timeout') {
                    appendResult($resultContainer, 'İstek zaman aşımına uğradı', 'error');
                } else {
                    appendResult($resultContainer, error, 'error');
                }
            }
        });

        // Simulated timeout
        setTimeout(function() {
            appendResult($resultContainer, 'Simüle edilmiş timeout testi:');
            
            $.ajax({
                url: 'https://httpstat.us/200?sleep=6000', // 6 saniye gecikme
                method: 'GET',
                timeout: 3000, // 3 saniye timeout
                success: function(response) {
                    appendResult($resultContainer, 'Bu mesaj görünmemeli');
                },
                error: function(xhr, status, error) {
                    if (status === 'timeout') {
                        appendResult($resultContainer, 'İstek 3 saniye sonra zaman aşımına uğradı', 'error');
                    }
                }
            });
        }, 2000);
    });

    // CORS and Headers demo
    $('[data-demo="cors"]').on('click', function() {
        const $resultContainer = $('#cors-result .result-content');
        
        appendResult($resultContainer, 'CORS isteği başlatılıyor...');
        
        // Show CORS configuration
        appendResult($resultContainer, 'CORS Yapılandırması:');
        appendResult($resultContainer, {
            crossDomain: true,
            withCredentials: true,
            headers: {
                'Authorization': 'Bearer token123',
                'Content-Type': 'application/json'
            }
        });

        // Make CORS request
        $.ajax({
            url: 'https://api.example.com/data',
            method: 'GET',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            headers: {
                'Authorization': 'Bearer token123',
                'Content-Type': 'application/json'
            },
            success: function(response) {
                appendResult($resultContainer, 'Veri başarıyla alındı:');
                appendResult($resultContainer, response);
            },
            error: function(xhr, status, error) {
                appendResult($resultContainer, 'CORS Hatası: Bu beklenen bir hata. Gerçek bir API ile test edilmeli.', 'error');
                appendResult($resultContainer, {
                    status: status,
                    error: error,
                    message: 'CORS politikası veya geçersiz endpoint nedeniyle hata oluştu'
                }, 'error');
            }
        });
    });

    // Global AJAX Event Handlers demo
    $('[data-demo="global"]').on('click', function() {
        const $resultContainer = $('#global-result .result-content');
        
        // Clear previous handlers
        $(document).off('.ajaxDemo');
        
        appendResult($resultContainer, 'Global AJAX event handler\'ları ayarlanıyor...');
        
        // Set up global handlers
        $(document).on('ajaxStart.ajaxDemo', function() {
            appendResult($resultContainer, 'ajaxStart: AJAX isteği başladı');
        });

        $(document).on('ajaxSend.ajaxDemo', function(event, xhr, settings) {
            appendResult($resultContainer, 'ajaxSend: İstek gönderiliyor');
            appendResult($resultContainer, {
                url: settings.url,
                method: settings.method
            });
        });

        $(document).on('ajaxSuccess.ajaxDemo', function(event, xhr, settings, data) {
            appendResult($resultContainer, 'ajaxSuccess: İstek başarılı');
        });

        $(document).on('ajaxError.ajaxDemo', function(event, xhr, settings, error) {
            appendResult($resultContainer, 'ajaxError: Hata oluştu - ' + error, 'error');
        });

        $(document).on('ajaxComplete.ajaxDemo', function(event, xhr, settings) {
            appendResult($resultContainer, 'ajaxComplete: İstek tamamlandı');
        });

        $(document).on('ajaxStop.ajaxDemo', function() {
            appendResult($resultContainer, 'ajaxStop: Tüm AJAX istekleri tamamlandı');
        });

        // Make test requests
        appendResult($resultContainer, 'Test istekleri başlatılıyor...');
        
        // Successful request
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'GET'
        });

        // Failed request (after 1 second)
        setTimeout(function() {
            $.ajax({
                url: 'https://invalid-url.example/data',
                method: 'GET'
            });
        }, 1000);
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
