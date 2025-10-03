$(document).ready(function() {
    // Stop Method Demo
    $('#startLongAnimBtn').click(function() {
        $('#stopDemo')
            .animate({ left: '80%' }, 2000)
            .animate({ opacity: 0.5 }, 2000)
            .animate({ left: '0%' }, 2000)
            .animate({ opacity: 1 }, 2000);
    });

    $('#stopBtn').click(function() {
        // Sadece mevcut animasyonu durdur
        $('#stopDemo').stop();
    });

    $('#stopAllBtn').click(function() {
        // Tüm animasyonları durdur
        $('#stopDemo').stop(true);
    });

    $('#stopJumpBtn').click(function() {
        // Tüm animasyonları durdur ve son konuma atla
        $('#stopDemo').stop(true, true);
    });

    $('#resetStopBtn').click(function() {
        $('#stopDemo')
            .stop(true)
            .css({
                left: '0%',
                opacity: 1
            });
    });

    // Delay Method Demo
    let delayStep = 1;
    
    $('#startDelayBtn').click(function() {
        const delay = parseInt($('#delayTime').val());
        const $demo = $('#delayDemo');
        const $progress = $('#delayProgress');
        
        // Sıfırla
        delayStep = 1;
        $progress.empty();
        
        logDelay('Animasyon başlıyor...');
        
        $demo.animate({ left: '80%' }, 1000, function() {
            logDelay('İlk hareket tamamlandı');
        })
        .delay(delay)
        .queue(function() {
            logDelay(`${delay}ms gecikme tamamlandı`);
            $(this).dequeue();
        })
        .animate({ opacity: 0.5 }, 1000, function() {
            logDelay('Solma tamamlandı');
        })
        .delay(delay)
        .queue(function() {
            logDelay(`${delay}ms gecikme tamamlandı`);
            $(this).dequeue();
        })
        .animate({ left: '0%', opacity: 1 }, 1000, function() {
            logDelay('Animasyon tamamlandı!');
        });
    });

    $('#resetDelayBtn').click(function() {
        $('#delayDemo')
            .stop(true)
            .css({
                left: '0%',
                opacity: 1
            });
        $('#delayProgress').empty();
    });

    function logDelay(message) {
        const $progress = $('#delayProgress');
        const timestamp = new Date().toLocaleTimeString();
        $progress.prepend(`${delayStep}. ${message} (${timestamp})<br>`);
        delayStep++;
    }

    // Finish Method Demo
    $('#startFinishBtn').click(function() {
        $('#finishDemo')
            .animate({ left: '80%' }, 2000)
            .animate({ opacity: 0.5 }, 2000)
            .animate({ left: '0%' }, 2000)
            .animate({ opacity: 1 }, 2000);
    });

    $('#finishBtn').click(function() {
        $('#finishDemo').finish();
    });

    $('#resetFinishBtn').click(function() {
        $('#finishDemo')
            .stop(true)
            .css({
                left: '0%',
                opacity: 1
            });
    });

    // Queue and Dequeue Demo
    let queueStep = 1;
    const animationQueue = [];
    
    $('#addToQueueBtn').click(function() {
        const $demo = $('#queueDemo');
        const $progress = $('#queueProgress');
        
        // Yeni animasyon ekle
        animationQueue.push({
            left: Math.random() * 80 + '%',
            opacity: Math.random() * 0.5 + 0.5
        });
        
        logQueue(`Animasyon kuyruğa eklendi (Toplam: ${animationQueue.length})`);
        
        // Elementi beklemede göster
        $demo.addClass('waiting');
    });

    $('#processQueueBtn').click(function() {
        const $demo = $('#queueDemo');
        const $progress = $('#queueProgress');
        
        if (animationQueue.length === 0) {
            logQueue('Kuyruk boş!');
            return;
        }
        
        // Beklemede durumunu kaldır
        $demo.removeClass('waiting');
        
        // Kuyruktaki bir sonraki animasyonu işle
        const nextAnimation = animationQueue.shift();
        logQueue('Animasyon başlıyor...');
        
        $demo.animate(nextAnimation, 1000, function() {
            logQueue(`Animasyon tamamlandı (Kalan: ${animationQueue.length})`);
            
            if (animationQueue.length > 0) {
                $demo.addClass('waiting');
            }
        });
    });

    $('#clearQueueBtn').click(function() {
        animationQueue.length = 0;
        logQueue('Kuyruk temizlendi!');
        
        $('#queueDemo').removeClass('waiting');
    });

    $('#resetQueueBtn').click(function() {
        $('#queueDemo')
            .stop(true)
            .removeClass('waiting')
            .css({
                left: '0%',
                opacity: 1
            });
        $('#queueProgress').empty();
        animationQueue.length = 0;
        queueStep = 1;
    });

    function logQueue(message) {
        const $progress = $('#queueProgress');
        const timestamp = new Date().toLocaleTimeString();
        $progress.prepend(`${queueStep}. ${message} (${timestamp})<br>`);
        queueStep++;
    }

    // Hover effects for interactive elements
    $('.demo-element').hover(
        function() {
            if (!$(this).is(':animated')) {
                $(this).css('transform', 'translateY(-50%) scale(1.02)');
            }
        },
        function() {
            if (!$(this).is(':animated')) {
                $(this).css('transform', 'translateY(-50%) scale(1)');
            }
        }
    );

    // Add hover effect to select elements
    $('select').hover(
        function() {
            $(this).css('border-color', 'var(--secondary-color)');
        },
        function() {
            $(this).css('border-color', 'var(--primary-color)');
        }
    );

    // Add hover effect to code preview
    $('.code-preview').hover(
        function() {
            $(this).css('background-color', '#e9ecef');
        },
        function() {
            $(this).css('background-color', 'var(--code-background)');
        }
    );
});
