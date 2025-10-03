$(document).ready(function() {
    // Kartlara tıklama olayı
    $('.selector-card').click(function() {
        const path = $(this).data('path');
        if (path) {
            // Tıklama animasyonu
            $(this).css('transform', 'scale(0.95)');
            setTimeout(() => {
                $(this).css('transform', 'scale(1)');
                // Yeni sayfaya yönlendirme
                window.location.href = path;
            }, 200);
        }
    });

    // Kartlar üzerine gelince hover efekti
    $('.selector-card').hover(
        function() {
            $(this).find('.card-icon i').css('transform', 'scale(1.2)');
        },
        function() {
            $(this).find('.card-icon i').css('transform', 'scale(1)');
        }
    );

    // Kod önizleme alanlarına hover efekti
    $('.code-preview').hover(
        function() {
            $(this).css('background-color', '#e9ecef');
        },
        function() {
            $(this).css('background-color', '');
        }
    );

    // Sayfa yüklendiğinde kartları sırayla gösterme animasyonu
    $('.selector-card').each(function(index) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(20px)'
        });
        
        setTimeout(() => {
            $(this).css({
                'opacity': '1',
                'transform': 'translateY(0)',
                'transition': 'all 0.5s ease'
            });
        }, index * 100);
    });

    // Scroll olayında header'ı küçültme/büyütme
    let lastScroll = 0;
    $(window).scroll(function() {
        const currentScroll = $(this).scrollTop();
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Aşağı scroll
            $('header').css({
                'padding': '20px 0',
                'transition': 'all 0.3s ease'
            });
        } else {
            // Yukarı scroll
            $('header').css({
                'padding': '40px 0',
                'transition': 'all 0.3s ease'
            });
        }
        
        lastScroll = currentScroll;
    });

    // Rastgele renk değişimi için fonksiyon
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Header'da renk geçiş efekti
    setInterval(() => {
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        $('header').css({
            'background': `linear-gradient(135deg, ${color1}, ${color2})`,
            'transition': 'background 3s ease'
        });
    }, 5000);
});
