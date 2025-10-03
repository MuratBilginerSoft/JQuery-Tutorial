$(document).ready(function() {
    // Basic Fade Demo
    $('#fadeInBtn').click(function() {
        const speed = $('#fadeSpeed').val();
        $('#fadeDemo').fadeIn(speed);
    });

    $('#fadeOutBtn').click(function() {
        const speed = $('#fadeSpeed').val();
        $('#fadeDemo').fadeOut(speed);
    });

    // Fade Toggle Demo
    $('#fadeToggleBtn').click(function() {
        const speed = $('#toggleFadeSpeed').val();
        $('#fadeToggleDemo').fadeToggle(speed);
    });

    // Fade To Demo
    $('.control-panel button[data-opacity]').click(function() {
        const opacity = $(this).data('opacity');
        const speed = $('#fadeToSpeed').val();
        $('#fadeToDemo').fadeTo(speed, opacity);
    });

    // Sequential Fade Demo
    $('#startSequenceBtn').click(function() {
        const $elements = $('.sequence-element');
        
        // İlk olarak tüm elementleri gizle
        $elements.hide();
        
        // Sırayla göster
        $elements.each(function(index) {
            $(this).delay(400 * index).fadeIn('slow');
        });

        // Tüm elementler gösterildikten sonra tekrar gizle
        setTimeout(function() {
            $elements.each(function(index) {
                $(this).delay(400 * index).fadeOut('slow');
            });
        }, 2000 + ($elements.length * 400));
    });

    // Callback Demo
    let callbackSequence = 1;
    
    $('#startCallbackBtn').click(function() {
        const $demo = $('#callbackDemo');
        const $result = $('#callbackResult');
        
        // Sıfırla
        callbackSequence = 1;
        $result.html('');
        
        // Fade out with callback
        $demo.fadeOut('slow', function() {
            logCallback('Element gizlendi');
            
            // Fade in with callback
            $(this).fadeIn('slow', function() {
                logCallback('Element gösterildi');
                
                // Fade to 0.5 opacity
                $(this).fadeTo('slow', 0.5, function() {
                    logCallback('Opaklık 50% olarak ayarlandı');
                    
                    // Fade to full opacity
                    $(this).fadeTo('slow', 1, function() {
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

    // Hover effects for interactive elements
    $('.demo-element').hover(
        function() {
            $(this).css('transform', 'scale(1.02)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
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

    // Initialize: Show all elements initially except sequence elements
    $('.demo-element').show();
    $('.sequence-element').hide();
});
