$(document).ready(function() {
    // Sayfa yüklendiğinde animasyon
    $('.demo-section').hide().each(function(i) {
        $(this).delay(100 * i).fadeIn(500);
    });

    // ID selector functions
    window.selectSpecialElement = function() {
        $('#specialElement').css('background-color', '#e91e63').css('color', 'white');
    };

    window.clearSpecialElement = function() {
        $('#specialElement').css('background-color', '').css('color', '');
    };

    window.selectTargetBox = function() {
        $('#targetBox').addClass('highlighted');
    };

    window.clearTargetBox = function() {
        $('#targetBox').removeClass('highlighted');
    };

    window.selectHighlightMe = function() {
        $('#highlightMe').css({
            'background-color': '#4caf50',
            'color': 'white',
            'box-shadow': '0 2px 5px rgba(0,0,0,0.2)'
        });
    };

    window.clearHighlightMe = function() {
        $('#highlightMe').css({
            'background-color': '',
            'color': '',
            'box-shadow': ''
        });
    };
});
