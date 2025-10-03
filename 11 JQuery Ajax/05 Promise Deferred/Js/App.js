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

    // Basic Promise Usage demo
    $('[data-demo="promise"]').on('click', function() {
        const $resultContainer = $('#promise-result .result-content');
        
        appendResult($resultContainer, 'Promise zinciri başlatılıyor...');
        
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1'
        })
        .then(function(response) {
            appendResult($resultContainer, 'Post verisi alındı:');
            appendResult($resultContainer, response);
            
            return $.ajax({
                url: 'https://jsonplaceholder.typicode.com/users/' + response.userId
            });
        })
        .then(function(user) {
            appendResult($resultContainer, 'Kullanıcı bilgisi alındı:');
            appendResult($resultContainer, user);
        })
        .catch(function(error) {
            appendResult($resultContainer, 'Hata oluştu: ' + error, 'error');
        });
    });

    // Multiple Promises demo
    $('[data-demo="multiple"]').on('click', function() {
        const $resultContainer = $('#multiple-result .result-content');
        
        appendResult($resultContainer, 'Çoklu Promise işlemleri başlatılıyor...');
        
        // Promise.all example
        appendResult($resultContainer, 'Promise.all ile paralel istekler:');
        
        Promise.all([
            $.ajax('https://jsonplaceholder.typicode.com/posts/1'),
            $.ajax('https://jsonplaceholder.typicode.com/posts/2'),
            $.ajax('https://jsonplaceholder.typicode.com/posts/3')
        ])
        .then(function(results) {
            appendResult($resultContainer, 'Tüm veriler alındı:');
            results.forEach((result, index) => {
                appendResult($resultContainer, `Post ${index + 1}:`);
                appendResult($resultContainer, result);
            });
        })
        .catch(function(error) {
            appendResult($resultContainer, 'Promise.all hatası: ' + error, 'error');
        });

        // Promise.race example
        appendResult($resultContainer, 'Promise.race ile yarış durumu:');
        
        Promise.race([
            $.ajax('https://jsonplaceholder.typicode.com/posts/1'),
            $.ajax('https://jsonplaceholder.typicode.com/posts/2')
        ])
        .then(function(result) {
            appendResult($resultContainer, 'İlk tamamlanan istek:');
            appendResult($resultContainer, result);
        })
        .catch(function(error) {
            appendResult($resultContainer, 'Promise.race hatası: ' + error, 'error');
        });
    });

    // Deferred Objects demo
    $('[data-demo="deferred"]').on('click', function() {
        const $resultContainer = $('#deferred-result .result-content');
        
        appendResult($resultContainer, 'Deferred nesne örneği başlatılıyor...');
        
        var deferred = $.Deferred();
        
        appendResult($resultContainer, 'Asenkron işlem simüle ediliyor (2 saniye)...');
        
        setTimeout(function() {
            var success = Math.random() > 0.5;
            if (success) {
                deferred.resolve('İşlem başarılı!');
            } else {
                deferred.reject('İşlem başarısız!');
            }
        }, 2000);

        deferred.promise()
            .done(function(result) {
                appendResult($resultContainer, 'Başarılı: ' + result);
            })
            .fail(function(error) {
                appendResult($resultContainer, 'Hata: ' + error, 'error');
            })
            .always(function() {
                appendResult($resultContainer, 'İşlem tamamlandı', 'info');
            });

        // Progress updates simulation
        var progress = 0;
        var progressInterval = setInterval(function() {
            progress += 20;
            deferred.notify(progress);
            
            if (progress >= 100) {
                clearInterval(progressInterval);
            }
        }, 400);

        deferred.progress(function(progress) {
            appendResult($resultContainer, `İşlem durumu: %${progress}`);
        });
    });

    // Promise Chain demo
    $('[data-demo="chain"]').on('click', function() {
        const $resultContainer = $('#chain-result .result-content');
        
        appendResult($resultContainer, 'Promise zinciri başlatılıyor...');
        
        $.ajax('https://jsonplaceholder.typicode.com/posts/1')
            .then(function(post) {
                appendResult($resultContainer, 'Post alındı:');
                appendResult($resultContainer, post);
                
                return $.ajax('https://jsonplaceholder.typicode.com/users/' + post.userId);
            })
            .then(function(user) {
                appendResult($resultContainer, 'Kullanıcı alındı:');
                appendResult($resultContainer, user);
                
                return $.ajax('https://jsonplaceholder.typicode.com/posts?userId=' + user.id);
            })
            .then(function(userPosts) {
                appendResult($resultContainer, 'Kullanıcının diğer gönderileri:');
                appendResult($resultContainer, userPosts);
            })
            .catch(function(error) {
                appendResult($resultContainer, 'Zincirde hata: ' + error, 'error');
            })
            .finally(function() {
                appendResult($resultContainer, 'Zincir tamamlandı', 'info');
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
