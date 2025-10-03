$(document).ready(function() {
    // Basic Movement Demo
    $('#moveRightBtn').click(function() {
        const speed = $('#moveSpeed').val();
        $('#moveDemo').animate({
            left: '80%'
        }, speed);
    });

    $('#moveLeftBtn').click(function() {
        const speed = $('#moveSpeed').val();
        $('#moveDemo').animate({
            left: '0%'
        }, speed);
    });

    $('#resetPositionBtn').click(function() {
        $('#moveDemo').stop(true).css('left', '0');
    });

    // Multiple Properties Demo
    $('#multiAnimateBtn').click(function() {
        const speed = $('#multiSpeed').val();
        $('#multiDemo').animate({
            left: '60%',
            width: '300px',
            height: '150px',
            opacity: 0.5
        }, speed);
    });

    $('#resetMultiBtn').click(function() {
        $('#multiDemo').stop(true).css({
            left: '0',
            width: '200px',
            height: '100px',
            opacity: 1
        });
    });

    // Relative Values Demo
    $('#increaseBtn').click(function() {
        const speed = $('#relativeSpeed').val();
        $('#relativeDemo').animate({
            width: '+=50px',
            height: '+=50px'
        }, speed);
    });

    $('#decreaseBtn').click(function() {
        const speed = $('#relativeSpeed').val();
        $('#relativeDemo').animate({
            width: '-=50px',
            height: '-=50px'
        }, speed);
    });

    $('#resetSizeBtn').click(function() {
        $('#relativeDemo').stop(true).css({
            width: '200px',
            height: '100px'
        });
    });

    // Easing Functions Demo
    $('#linearBtn').click(function() {
        const speed = $('#easingSpeed').val();
        $('#easingDemo').stop(true).css('left', '0').animate({
            left: '80%'
        }, {
            duration: speed,
            easing: 'linear'
        });
    });

    $('#swingBtn').click(function() {
        const speed = $('#easingSpeed').val();
        $('#easingDemo').stop(true).css('left', '0').animate({
            left: '80%'
        }, {
            duration: speed,
            easing: 'swing'
        });
    });

    $('#resetEasingBtn').click(function() {
        $('#easingDemo').stop(true).css('left', '0');
    });

    // Step Function Demo
    let stepStart;
    
    $('#startStepBtn').click(function() {
        const $progress = $('#stepProgress');
        $progress.empty();
        stepStart = Date.now();
        
        $('#stepDemo').stop(true).css('left', '0').animate({
            left: '80%'
        }, {
            duration: 2000,
            step: function(now, fx) {
                const elapsed = Date.now() - stepStart;
                const progress = Math.round((now / fx.end) * 100);
                
                $progress.prepend(
                    `${elapsed}ms: ${fx.prop} = ${Math.round(now)}px (${progress}%)<br>`
                );
            },
            complete: function() {
                const totalTime = Date.now() - stepStart;
                $progress.prepend(
                    `<strong>Animasyon tamamlandı! (${totalTime}ms)</strong><br><br>`
                );
            }
        });
    });

    $('#resetStepBtn').click(function() {
        $('#stepDemo').stop(true).css('left', '0');
        $('#stepProgress').empty();
    });

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
