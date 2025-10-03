$(document).ready(function() {
    // 1. Seçiciler Örneği
    $('#selector-btn').on('click', function() {
        // ID seçici örneği
        $('#selector-demo').css('background-color', '#e0f7fa');
        
        // Class seçici örneği
        $('.highlight-me').addClass('highlight');
        
        // 3 saniye sonra highlight sınıfını kaldır
        setTimeout(function() {
            $('.highlight-me').removeClass('highlight');
        }, 3000);
    });

    // 2. jQuery İle İşlemler
    // HTML değiştirme örneği
    $('#html-btn').on('click', function() {
        $('#content-demo').html('<strong>HTML içeriği</strong> değiştirildi!');
    });

    // CSS değiştirme örneği
    $('#css-btn').on('click', function() {
        $('#content-demo').css('color', 'red');
    });

    // Metin değiştirme örneği
    $('#text-btn').on('click', function() {
        $('#content-demo').text('Sadece metin değiştirildi!');
    });

    // Görünürlük değiştirme örneği
    $('#toggle-btn').on('click', function() {
        $('#visibility-demo').toggle();
    });

    // 3. Events Örneği
    let clickCount = 0;
    $('#event-btn').on('click', function() {
        clickCount++;
        $('#event-result').text('Butona ' + clickCount + ' kez tıkladınız!');
    });

    // Mouse over event örneği
    $('#event-btn').on('mouseover', function() {
        $(this).css('background-color', '#2196F3');
    }).on('mouseout', function() {
        $(this).css('background-color', '#4CAF50');
    });

    // 4. Animasyonlar Örneği
    $('#fade-btn').on('click', function() {
        $('#animation-demo').fadeOut(1000).fadeIn(1000);
    });

    $('#slide-btn').on('click', function() {
        $('#animation-demo').slideUp(1000).slideDown(1000);
    });

    // 5. Zincirleme Örneği
    $('#chain-btn').on('click', function() {
        $('#chain-demo')
            .css('background-color', '#ff9800')
            .slideUp(500)
            .slideDown(500)
            .animate({width: '300px'}, 500)
            .animate({width: '200px'}, 500)
            .css('background-color', '#fff');
    });
});
