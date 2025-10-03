$(document).ready(function() {
    // Focus/Blur Events
    $('#focusInput')
        .focus(function() {
            $('#focusResult')
                .text('Durum: Input alanı odaklandı')
                .css('color', 'var(--success-color)');
            $(this).css('box-shadow', '0 0 10px rgba(33, 150, 243, 0.5)');
        })
        .blur(function() {
            $('#focusResult')
                .text('Durum: Input alanı odağı kaybetti')
                .css('color', 'var(--warning-color)')
                .delay(1000)
                .queue(function(next) {
                    $(this).text('Durum: Input alanı beklemede').css('color', '');
                    next();
                });
            $(this).css('box-shadow', 'none');
        });

    // Change Event
    $('#colorSelect').change(function() {
        const selectedColor = $(this).val();
        const $preview = $('#colorPreview');
        
        if (selectedColor) {
            $preview
                .css('background-color', selectedColor)
                .text('Seçilen renk: ' + $('option:selected', this).text())
                .css('color', getContrastColor(selectedColor));
        } else {
            $preview
                .css('background-color', '')
                .text('Seçilen renk burada görünecek')
                .css('color', '');
        }
    });

    // Submit Event
    $('#demoForm').submit(function(event) {
        event.preventDefault();
        
        const name = $('#nameInput').val();
        const email = $('#emailInput').val();
        
        $('#submitResult')
            .html(`Form gönderildi!<br>Ad: ${name}<br>E-posta: ${email}`)
            .css('color', 'var(--success-color)');
        
        // Form alanlarını temizle
        this.reset();
        
        // 3 saniye sonra mesajı sıfırla
        setTimeout(() => {
            $('#submitResult')
                .text('Form henüz gönderilmedi')
                .css('color', '');
        }, 3000);
    });

    // Input Events
    $('#textArea').on('input', function() {
        const text = $(this).val();
        
        // Karakter sayısını güncelle
        $('#charCount').text(text.length);
        
        // Kelime sayısını güncelle
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        $('#wordCount').text(words);
    });

    // Form Validation
    const validationRules = {
        required: (value) => {
            return value.length > 0 ? '' : 'Bu alan zorunludur';
        },
        minLength: (value, length) => {
            return value.length >= length ? '' : `En az ${length} karakter olmalıdır`;
        },
        match: (value, targetId) => {
            const targetValue = $(`#${targetId}`).val();
            return value === targetValue ? '' : 'Şifreler eşleşmiyor';
        }
    };

    function validateInput($input) {
        const value = $input.val();
        const validations = $input.data('validation').split(' ');
        let errorMessage = '';

        for (const validation of validations) {
            const [rule, param] = validation.split(':');
            
            if (validationRules[rule]) {
                errorMessage = validationRules[rule](value, param);
                if (errorMessage) break;
            }
        }

        const $message = $input.siblings('.validation-message');
        $message.text(errorMessage);
        
        if (errorMessage) {
            $input.removeClass('input-success').addClass('input-error');
        } else {
            $input.removeClass('input-error').addClass('input-success');
        }

        return !errorMessage;
    }

    // Form doğrulama olayları
    $('#validationForm input').on('input', function() {
        validateInput($(this));
    });

    $('#validationForm').submit(function(event) {
        event.preventDefault();
        
        let isValid = true;
        $(this).find('input').each(function() {
            if (!validateInput($(this))) {
                isValid = false;
            }
        });

        if (isValid) {
            alert('Form başarıyla doğrulandı!');
            this.reset();
            $(this).find('input')
                .removeClass('input-success input-error')
                .siblings('.validation-message')
                .text('');
        }
    });

    // Yardımcı fonksiyonlar
    function getContrastColor(hexcolor) {
        // Renk kodunu RGB'ye dönüştür
        const r = parseInt(hexcolor.slice(1, 3), 16);
        const g = parseInt(hexcolor.slice(3, 5), 16);
        const b = parseInt(hexcolor.slice(5, 7), 16);
        
        // Parlaklığı hesapla
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        
        // Parlaklığa göre siyah veya beyaz döndür
        return brightness > 128 ? '#000000' : '#FFFFFF';
    }
});
