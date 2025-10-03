$(document).ready(function() {
    // Ready Event Demo
    $('.status-circle').addClass('ready');
    $('#readyDemo span').text('Sayfa yüklendi ve hazır!');

    // Scroll Event Demo
    let lastScrollTop = 0;
    
    $('#scrollContainer').scroll(function() {
        const scrollTop = $(this).scrollTop();
        const direction = scrollTop > lastScrollTop ? 'aşağı' : 'yukarı';
        const percentage = Math.round((scrollTop / ($(this)[0].scrollHeight - $(this).height())) * 100);
        
        $('#scrollInfo').text(`Scroll pozisyonu: ${scrollTop}px (${percentage}%) - Yön: ${direction}`);
        
        // Scroll marker'ı güncelle
        $('.scroll-marker').css('opacity', 0.3 + (percentage / 100) * 0.7);
        
        lastScrollTop = scrollTop;
    });

    // Resize Event Demo
    function updateWindowSize() {
        const width = $(window).width();
        const height = $(window).height();
        $('#windowSize').text(`Pencere boyutu: ${width}px x ${height}px`);
    }
    
    updateWindowSize(); // İlk yüklemede boyutu göster
    
    let resizeTimeout;
    $(window).resize(function() {
        // Performans için debouncing uygula
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            updateWindowSize();
            
            // Animasyon efekti
            $('#resizeDemo')
                .css('transform', 'scale(1.05)')
                .delay(100)
                .queue(function(next) {
                    $(this).css('transform', 'scale(1)');
                    next();
                });
        }, 250);
    });

    // Load Event Demo
    $('#demoImage').on('load', function() {
        $('.loader').fadeOut();
        $('#loadStatus').text('Görsel başarıyla yüklendi!').css('color', 'var(--success-color)');
    }).on('error', function() {
        $('.loader').fadeOut();
        $('#loadStatus').text('Görsel yüklenirken hata oluştu!').css('color', 'var(--error-color)');
    });

    // Error Event Demo
    let errorCount = 0;
    
    $('#triggerError').click(function() {
        errorCount++;
        try {
            // Kasıtlı hata oluştur
            throw new Error(`Test hatası #${errorCount}`);
        } catch (error) {
            const timestamp = new Date().toLocaleTimeString();
            $('#errorLog').prepend(
                `[${timestamp}] ${error.message}<br>`
            );
        }
    });

    // Visibility Change Demo
    let visibilityTimeout;
    
    document.addEventListener('visibilitychange', function() {
        clearTimeout(visibilityTimeout);
        
        const $icon = $('.visibility-icon i');
        const $status = $('#visibilityStatus');
        
        if (document.hidden) {
            $icon.removeClass('fa-eye').addClass('fa-eye-slash');
            $status.text('Sayfa arka planda');
            $('.visibility-icon').addClass('hidden');
        } else {
            $icon.removeClass('fa-eye-slash').addClass('fa-eye');
            $status.text('Sayfa görünür durumda');
            $('.visibility-icon').removeClass('hidden');
            
            // Hoş geldiniz mesajını göster
            visibilityTimeout = setTimeout(function() {
                $status.text('Tekrar hoş geldiniz!');
            }, 1000);
        }
    });

    // Sayfa kapatılmadan önce uyarı
    $(window).on('beforeunload', function() {
        // Gerçek uygulamalarda, sadece gerektiğinde (örn. kaydedilmemiş değişiklikler varsa) 
        // return değeri döndürün
        // return 'Sayfadan ayrılmak istediğinize emin misiniz?';
    });
});
