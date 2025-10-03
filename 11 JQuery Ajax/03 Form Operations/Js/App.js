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

    // Basic Form Submit
    $('#basicForm').on('submit', function(e) {
        e.preventDefault();
        
        const $resultContainer = $('#basicForm-result .result-content');
        const $form = $(this);
        const $submitBtn = $form.find('.submit-btn');
        
        // Show loading state
        $submitBtn.prop('disabled', true)
            .html('<span class="loading"></span>Gönderiliyor...');
        
        // Get form data
        const formData = $form.serialize();
        appendResult($resultContainer, 'Form verisi gönderiliyor:');
        appendResult($resultContainer, Object.fromEntries(new URLSearchParams(formData)));
        
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'POST',
            data: formData,
            success: function(response) {
                appendResult($resultContainer, 'Form başarıyla gönderildi:');
                appendResult($resultContainer, response);
                $form[0].reset();
            },
            error: function(xhr, status, error) {
                appendResult($resultContainer, 'Hata oluştu: ' + error, 'error');
            },
            complete: function() {
                // Reset button state
                $submitBtn.prop('disabled', false)
                    .html('<i class="fas fa-paper-plane"></i> Gönder');
            }
        });
    });

    // File Upload
    $('#fileUploadForm').on('submit', function(e) {
        e.preventDefault();
        
        const $resultContainer = $('#fileUpload-result .result-content');
        const $form = $(this);
        const $submitBtn = $form.find('.submit-btn');
        const $progress = $form.find('.progress');
        
        // Reset progress
        $progress.width('0%');
        
        // Show loading state
        $submitBtn.prop('disabled', true)
            .html('<span class="loading"></span>Yükleniyor...');
        
        const formData = new FormData(this);
        
        appendResult($resultContainer, 'Dosya yükleniyor...');
        
        $.ajax({
            url: 'https://httpbin.org/post',
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            xhr: function() {
                const xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener('progress', function(e) {
                    if (e.lengthComputable) {
                        const percent = (e.loaded / e.total) * 100;
                        $progress.width(percent + '%');
                        
                        if (percent === 100) {
                            appendResult($resultContainer, 'Yükleme tamamlandı, sunucu yanıtı bekleniyor...');
                        }
                    }
                }, false);
                return xhr;
            },
            success: function(response) {
                appendResult($resultContainer, 'Dosya başarıyla yüklendi:');
                appendResult($resultContainer, response);
                $form[0].reset();
            },
            error: function(xhr, status, error) {
                appendResult($resultContainer, 'Hata oluştu: ' + error, 'error');
            },
            complete: function() {
                // Reset button state
                $submitBtn.prop('disabled', false)
                    .html('<i class="fas fa-upload"></i> Yükle');
            }
        });
    });

    // Form Validation
    $('#validationForm').on('submit', function(e) {
        e.preventDefault();
        
        const $resultContainer = $('#validation-result .result-content');
        const $form = $(this);
        const $submitBtn = $form.find('.submit-btn');
        
        // Clear previous validation messages
        $('.validation-message').text('').removeClass('error');
        
        let isValid = true;
        
        // Validate each input
        $form.find('input').each(function() {
            const $input = $(this);
            const $message = $input.next('.validation-message');
            
            if (!this.checkValidity()) {
                isValid = false;
                $message.text(this.validationMessage).addClass('error');
                appendResult($resultContainer, `Doğrulama hatası (${$input.attr('name')}): ${this.validationMessage}`, 'error');
            }
        });
        
        if (isValid) {
            // Show loading state
            $submitBtn.prop('disabled', true)
                .html('<span class="loading"></span>Gönderiliyor...');
            
            const formData = $form.serialize();
            
            appendResult($resultContainer, 'Form doğrulaması başarılı, veriler gönderiliyor:');
            appendResult($resultContainer, Object.fromEntries(new URLSearchParams(formData)));
            
            $.ajax({
                url: 'https://httpbin.org/post',
                method: 'POST',
                data: formData,
                success: function(response) {
                    appendResult($resultContainer, 'Form başarıyla gönderildi:');
                    appendResult($resultContainer, response);
                    $form[0].reset();
                },
                error: function(xhr, status, error) {
                    appendResult($resultContainer, 'Hata oluştu: ' + error, 'error');
                },
                complete: function() {
                    // Reset button state
                    $submitBtn.prop('disabled', false)
                        .html('<i class="fas fa-check-circle"></i> Doğrula ve Gönder');
                }
            });
        }
    });

    // Real-time validation feedback
    $('#validationForm input').on('input', function() {
        const $input = $(this);
        const $message = $input.next('.validation-message');
        
        if (this.checkValidity()) {
            $message.text('').removeClass('error');
        } else {
            $message.text(this.validationMessage).addClass('error');
        }
    });

    // Initialize syntax highlighting
    Prism.highlightAll();
});
