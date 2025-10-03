$(document).ready(function() {
    // Show/Hide Demo
    $('#showBtn').click(function() {
        const speed = $('#showHideSpeed').val();
        $('#showHideDemo').show(speed);
    });

    $('#hideBtn').click(function() {
        const speed = $('#showHideSpeed').val();
        $('#showHideDemo').hide(speed);
    });

    // Toggle Demo
    $('#toggleBtn').click(function() {
        const speed = $('#toggleSpeed').val();
        $('#toggleDemo').toggle(speed);
    });

    // Multiple Elements Demo
    $('#showAllBtn').click(function() {
        $('.multi-demo .demo-element').show('slow');
    });

    $('#hideAllBtn').click(function() {
        $('.multi-demo .demo-element').hide('slow');
    });

    $('#toggleAllBtn').click(function() {
        $('.multi-demo .demo-element').toggle('slow');
    });

    // Callback Demo
    let callbackSequence = 1;
    
    $('#callbackBtn').click(function() {
        const $demo = $('#callbackDemo');
        const $result = $('#callbackResult');
        
        // Sıfırla
        callbackSequence = 1;
        $result.html('');
        
        // İlk efekt: Gizle
        $demo.hide('slow', function() {
            logCallback('Element gizlendi');
            
            // İkinci efekt: Göster
            $(this).show('slow', function() {
                logCallback('Element gösterildi');
                
                // Üçüncü efekt: Toggle
                $(this).toggle('slow', function() {
                    logCallback('Toggle tamamlandı');
                    
                    // Son efekt: Tekrar toggle
                    $(this).toggle('slow', function() {
                        logCallback('Animasyon sekansı tamamlandı!');
                    });
                });
            });
        });
    });

    function logCallback(message) {
        const $result = $('#callbackResult');
        const timestamp = new Date().toLocaleTimeString();
        $result.append(`${callbackSequence}. ${message} (${timestamp})<br>`);
        callbackSequence++;
    }

    // Hover efektleri
    $('.demo-element').hover(
        function() {
            $(this).css('transform', 'scale(1.02)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    // Select elementlerine hover efekti
    $('select').hover(
        function() {
            $(this).css('border-color', 'var(--secondary-color)');
        },
        function() {
            $(this).css('border-color', 'var(--primary-color)');
        }
    );

    // Code preview hover efekti
    $('.code-preview').hover(
        function() {
            $(this).css('background-color', '#e9ecef');
        },
        function() {
            $(this).css('background-color', 'var(--code-background)');
        }
    );
});
