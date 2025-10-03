$(document).ready(function() {
    // Basic Sequence Demo
    $('#startBasicSequenceBtn').click(function() {
        const speed = $('#basicSequenceSpeed').val();
        $('#basicSequenceDemo')
            .fadeOut(speed)
            .fadeIn(speed)
            .animate({ left: '80%' }, speed)
            .animate({ left: '0%' }, speed);
    });

    $('#resetBasicSequenceBtn').click(function() {
        $('#basicSequenceDemo')
            .stop(true)
            .css({
                opacity: 1,
                left: '0%'
            });
    });

    // Callback Sequence Demo
    let callbackStep = 1;
    
    $('#startCallbackSequenceBtn').click(function() {
        const $demo = $('#callbackSequenceDemo');
        const $progress = $('#callbackProgress');
        
        // Sıfırla
        callbackStep = 1;
        $progress.empty();
        
        // Callback sekansı
        $demo.fadeOut('slow', function() {
            logCallback('Fade out tamamlandı');
            
            $(this).animate({
                left: '80%'
            }, 'slow', function() {
                logCallback('Sağa hareket tamamlandı');
                
                $(this).fadeIn('slow', function() {
                    logCallback('Fade in tamamlandı');
                    
                    $(this).animate({
                        left: '0%'
                    }, 'slow', function() {
                        logCallback('Sola hareket tamamlandı');
                        logCallback('Sekans tamamlandı!');
                    });
                });
            });
        });
    });

    $('#resetCallbackSequenceBtn').click(function() {
        $('#callbackSequenceDemo')
            .stop(true)
            .css({
                opacity: 1,
                left: '0%'
            });
        $('#callbackProgress').empty();
    });

    function logCallback(message) {
        const $progress = $('#callbackProgress');
        const timestamp = new Date().toLocaleTimeString();
        $progress.prepend(`${callbackStep}. ${message} (${timestamp})<br>`);
        callbackStep++;
    }

    // Promise Sequence Demo
    let promiseStep = 1;
    
    $('#startPromiseSequenceBtn').click(async function() {
        const $demo = $('#promiseSequenceDemo');
        const $progress = $('#promiseProgress');
        
        // Sıfırla
        promiseStep = 1;
        $progress.empty();
        
        try {
            // Promise sekansı
            await logPromise('Sekans başlıyor...');
            
            await $demo.fadeOut('slow').promise();
            await logPromise('Fade out tamamlandı');
            
            await $demo.animate({ left: '80%' }, 'slow').promise();
            await logPromise('Sağa hareket tamamlandı');
            
            await $demo.fadeIn('slow').promise();
            await logPromise('Fade in tamamlandı');
            
            await $demo.animate({ left: '0%' }, 'slow').promise();
            await logPromise('Sola hareket tamamlandı');
            
            await logPromise('Sekans tamamlandı!');
        } catch (error) {
            console.error('Animasyon hatası:', error);
        }
    });

    $('#resetPromiseSequenceBtn').click(function() {
        $('#promiseSequenceDemo')
            .stop(true)
            .css({
                opacity: 1,
                left: '0%'
            });
        $('#promiseProgress').empty();
    });

    async function logPromise(message) {
        const $progress = $('#promiseProgress');
        const timestamp = new Date().toLocaleTimeString();
        $progress.prepend(`${promiseStep}. ${message} (${timestamp})<br>`);
        promiseStep++;
        
        // Simüle edilmiş async işlem
        return new Promise(resolve => setTimeout(resolve, 100));
    }

    // Parallel Animations Demo
    $('#startParallelBtn').click(function() {
        $('.parallel-container .demo-element').each(function(index) {
            $(this).animate({
                left: '80%',
                opacity: 0.5
            }, {
                duration: 1000,
                queue: false
            }).delay(index * 200).animate({
                left: '0%',
                opacity: 1
            }, 1000);
        });
    });

    $('#resetParallelBtn').click(function() {
        $('.parallel-container .demo-element')
            .stop(true)
            .css({
                opacity: 1,
                left: '0%'
            });
    });

    // Complex Sequence Demo
    $('#startComplexBtn').click(async function() {
        const $progress = $('#complexProgress');
        const $elements = $('.complex-container .demo-element');
        
        // Sıfırla
        $progress.empty();
        
        try {
            // İlk element animasyonu
            await logComplex('A elementi animasyonu başlıyor');
            await $('#complex1').animate({ left: '80%' }, 'slow').promise();
            
            // Paralel B ve C element animasyonları
            await logComplex('B ve C elementleri paralel animasyon başlıyor');
            await Promise.all([
                $('#complex2').fadeIn('slow').animate({ left: '60%' }, 'slow').promise(),
                $('#complex3').slideDown('slow').animate({ left: '40%' }, 'slow').promise()
            ]);
            
            // Final animasyon
            await logComplex('Final animasyonu başlıyor');
            await $elements.animate({ left: '0%' }, 'slow').promise();
            
            await logComplex('Karmaşık sekans tamamlandı!');
        } catch (error) {
            console.error('Animasyon hatası:', error);
        }
    });

    $('#resetComplexBtn').click(function() {
        $('.complex-container .demo-element')
            .stop(true)
            .css({
                opacity: 1,
                left: '0%',
                display: 'flex'
            });
        $('#complexProgress').empty();
    });

    async function logComplex(message) {
        const $progress = $('#complexProgress');
        const timestamp = new Date().toLocaleTimeString();
        $progress.prepend(`${timestamp}: ${message}<br>`);
        
        return new Promise(resolve => setTimeout(resolve, 100));
    }

    // Initialize
    $('.demo-element').css('opacity', 1);
    $('#complex2, #complex3').hide();
});
