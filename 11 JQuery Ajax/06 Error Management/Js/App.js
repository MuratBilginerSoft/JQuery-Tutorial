$(document).ready(function() {
    // Helper function to format JSON
    function formatJSON(obj) {
        return JSON.stringify(obj, null, 2);
    }

    // Helper function to append result
    function appendResult($container, data, type = 'success') {
        const timestamp = new Date().toLocaleTimeString();
        const className = type === 'success' ? 'success-message' : 
                         type === 'warning' ? 'warning-message' : 'error-message';
        
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

    // Basic Error Handling demo
    $('[data-demo="basic-error"]').on('click', function() {
        const $resultContainer = $('#basic-error .result-content');
        
        // Successful request
        appendResult($resultContainer, 'Başarılı istek deneniyor...');
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'GET'
        })
        .done(function(response) {
            appendResult($resultContainer, 'Başarılı istek sonucu:');
            appendResult($resultContainer, response);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            appendResult($resultContainer, `Hata: ${textStatus} - ${errorThrown}`, 'error');
        });

        // Failed request
        appendResult($resultContainer, 'Hatalı istek deneniyor...');
        $.ajax({
            url: 'https://invalid-url.example/data',
            method: 'GET'
        })
        .done(function(response) {
            appendResult($resultContainer, response);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            appendResult($resultContainer, `Hata: ${textStatus} - ${errorThrown}`, 'error');
            appendResult($resultContainer, 'HTTP Durum Kodu: ' + jqXHR.status, 'error');
            appendResult($resultContainer, 'Hata Detayı: ' + jqXHR.statusText, 'error');
        });
    });

    // Global Error Handling demo
    $('[data-demo="global-error"]').on('click', function() {
        const $resultContainer = $('#global-error .result-content');
        
        // Set up global error handling
        appendResult($resultContainer, 'Global hata yakalayıcılar ayarlanıyor...');
        
        $.ajaxSetup({
            error: function(jqXHR, textStatus, errorThrown) {
                appendResult($resultContainer, 
                    `Global error handler: ${textStatus} - ${errorThrown}`, 'error');
            }
        });

        // Set up global AJAX event handlers
        $(document).ajaxError(function(event, jqXHR, settings, error) {
            appendResult($resultContainer, 
                `Global ajaxError event: ${error}`, 'error');
        });

        // Make a failed request
        appendResult($resultContainer, 'Hatalı istek yapılıyor...');
        $.ajax({
            url: 'https://invalid-domain.example/api',
            method: 'GET'
        });
    });

    // Timeout and Retry demo
    $('[data-demo="timeout-retry"]').on('click', function() {
        const $resultContainer = $('#timeout-retry .result-content');
        
        function ajaxWithRetry(url, retries = 3, delay = 1000) {
            appendResult($resultContainer, `İstek deneniyor... (Kalan deneme: ${retries})`);
            
            return $.ajax({
                url: url,
                timeout: 2000  // 2 second timeout
            })
            .then(function(response) {
                appendResult($resultContainer, 'İstek başarılı:');
                appendResult($resultContainer, response);
                return response;
            })
            .catch(function(error) {
                appendResult($resultContainer, 
                    `Hata oluştu: ${error.statusText || error.message}`, 'error');
                
                if (retries > 0) {
                    appendResult($resultContainer, 
                        `${delay/1000} saniye sonra tekrar deneniyor...`, 'warning');
                    
                    return new Promise(resolve => setTimeout(resolve, delay))
                        .then(() => ajaxWithRetry(url, retries - 1, delay * 1.5));
                }
                
                throw new Error('Maksimum deneme sayısına ulaşıldı');
            });
        }

        // Test with an invalid URL
        ajaxWithRetry('https://invalid-url.example/api')
            .catch(function(finalError) {
                appendResult($resultContainer, 
                    'Tüm denemeler başarısız: ' + finalError.message, 'error');
            });
    });

    // Custom Error Types demo
    $('[data-demo="custom-errors"]').on('click', function() {
        const $resultContainer = $('#custom-errors .result-content');
        
        // Define custom error types
        class NetworkError extends Error {
            constructor(message, status) {
                super(message);
                this.name = 'NetworkError';
                this.status = status;
            }
        }

        class ValidationError extends Error {
            constructor(message, fields) {
                super(message);
                this.name = 'ValidationError';
                this.fields = fields;
            }
        }

        // Helper function to handle different error types
        function handleAjaxError(error) {
            if (error.status === 404) {
                throw new NetworkError('Kaynak bulunamadı', 404);
            } else if (error.status === 400) {
                throw new ValidationError('Geçersiz veri', error.responseJSON);
            } else if (error.status === 500) {
                throw new NetworkError('Sunucu hatası', 500);
            } else {
                throw new Error('Bilinmeyen hata');
            }
        }

        // Test with different error scenarios
        function testErrorScenario(url, expectedError) {
            appendResult($resultContainer, `Test senaryosu: ${expectedError}`);
            
            return $.ajax({
                url: url,
                method: 'GET'
            })
            .catch(function(error) {
                try {
                    handleAjaxError(error);
                } catch (e) {
                    appendResult($resultContainer, 
                        `${e.name}: ${e.message}`, 'error');
                    if (e instanceof ValidationError && e.fields) {
                        appendResult($resultContainer, 
                            'Validation Fields:', 'error');
                        appendResult($resultContainer, e.fields, 'error');
                    }
                }
            });
        }

        // Run test scenarios
        testErrorScenario('https://invalid-url-404.example', '404 Not Found');
        setTimeout(() => {
            testErrorScenario('https://invalid-url-500.example', '500 Server Error');
        }, 1000);
        setTimeout(() => {
            testErrorScenario('https://invalid-url-400.example', '400 Bad Request');
        }, 2000);
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
});
