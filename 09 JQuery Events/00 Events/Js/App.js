$(document).ready(function() {
    // Kartlara tıklama olayını ekle
    $('.selector-card').click(function() {
        // Kartın data-path özelliğinden yönlendirilecek sayfayı al
        const path = $(this).data('path');
        if (path) {
            window.location.href = path;
        }
    });

    // Kartlara hover efekti ekle
    $('.selector-card').hover(
        function() {
            $(this).find('.card-icon i').css('transform', 'scale(1.2)');
        },
        function() {
            $(this).find('.card-icon i').css('transform', 'scale(1)');
        }
    );

    // Kod önizleme alanlarına hover efekti ekle
    $('.code-preview').hover(
        function() {
            $(this).css('background-color', '#e9ecef');
        },
        function() {
            $(this).css('background-color', 'var(--code-background)');
        }
    );
});
