$(document).ready(function() {
    // Click Events
    let clickCount = 0;
    
    $('#clickDemo').click(function() {
        clickCount++;
        $('#clickCounter').text('Tıklama sayısı: ' + clickCount);
        
        // Animasyon efekti
        $(this).animate({opacity: 0.5}, 100).animate({opacity: 1}, 100);
    });
    
    // Click Counter'ı sıfırlama fonksiyonu
    window.resetClickCounter = function() {
        clickCount = 0;
        $('#clickCounter').text('Tıklama sayısı: ' + clickCount);
    };

    // Double Click Events
    $('#dblClickDemo').dblclick(function() {
        $('#dblClickResult').text('Çift tıklama tespit edildi!');
        $(this).css('background-color', '#4CAF50')
            .delay(500)
            .queue(function(next) {
                $(this).css('background-color', '');
                next();
            });
    });

    // Hover Events
    $('#hoverDemo').hover(
        function() {
            $('#hoverResult').text('Mouse durumu: Üzerinde');
            $(this).css('transform', 'scale(1.1)');
        },
        function() {
            $('#hoverResult').text('Mouse durumu: Dışarıda');
            $(this).css('transform', 'scale(1)');
        }
    );

    // Mouse Position
    $('#positionDemo').mousemove(function(event) {
        const offset = $(this).offset();
        const relativeX = event.pageX - offset.left;
        const relativeY = event.pageY - offset.top;
        
        $('#positionResult').text(`X: ${Math.round(relativeX)}, Y: ${Math.round(relativeY)}`);
        
        // Gradient efekti
        const percentX = (relativeX / $(this).width()) * 100;
        const percentY = (relativeY / $(this).height()) * 100;
        $(this).css('background', `radial-gradient(circle at ${percentX}% ${percentY}%, var(--secondary-color), var(--primary-color))`);
    });

    // Mouse Enter/Leave Events
    $('.enter-leave-box').mouseenter(function() {
        const boxId = $(this).attr('id');
        $('#enterLeaveResult').text(`Son olay: ${boxId}'e giriş yapıldı`);
        $(this).css({
            'transform': 'scale(1.1)',
            'background-color': 'var(--secondary-color)'
        });
    }).mouseleave(function() {
        const boxId = $(this).attr('id');
        $('#enterLeaveResult').text(`Son olay: ${boxId}'den çıkış yapıldı`);
        $(this).css({
            'transform': 'scale(1)',
            'background-color': 'var(--primary-color)'
        });
    });
});
