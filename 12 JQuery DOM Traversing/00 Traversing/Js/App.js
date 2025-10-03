$(document).ready(function() {
    // Card hover efekti için ekstra animasyon
    $('.card').hover(
        function() {
            $(this).find('.card-icon i').css('transform', 'scale(1.2)');
        },
        function() {
            $(this).find('.card-icon i').css('transform', 'scale(1)');
        }
    );

    // Referans gruplarına hover efekti
    $('.reference-group').hover(
        function() {
            $(this).find('h3').css('color', 'var(--primary-color)');
        },
        function() {
            $(this).find('h3').css('color', 'var(--secondary-color)');
        }
    );

    // Code elementlerine tıklandığında kopyalama
    $('code').click(function() {
        const text = $(this).text();
        navigator.clipboard.writeText(text).then(
            function() {
                // Başarılı kopyalama animasyonu
                const $code = $(this);
                $code.css('background-color', 'var(--success-color)');
                $code.css('color', 'white');
                setTimeout(() => {
                    $code.css('background-color', '');
                    $code.css('color', '');
                }, 500);
            }.bind(this),
            function(err) {
                console.error('Kopyalama hatası:', err);
            }
        );
    });

    // Sayfa yüklendiğinde kartları canlandır
    $('.card').each(function(index) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(20px)'
        });
        
        setTimeout(() => {
            $(this).css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }, index * 100);
    });

    // Referans gruplarını canlandır
    $('.reference-group').each(function(index) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateX(-20px)'
        });
        
        setTimeout(() => {
            $(this).css({
                'opacity': '1',
                'transform': 'translateX(0)'
            });
        }, (index * 100) + 400);
    });
});
