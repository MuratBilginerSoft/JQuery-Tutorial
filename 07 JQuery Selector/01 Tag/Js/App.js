$(document).ready(function() {
    // Sayfa yüklendiğinde animasyon
    $('.demo-section').hide().each(function(i) {
        $(this).delay(100 * i).fadeIn(500);
    });

    // Tag selector functions
    window.selectParagraphs = function() {
        $('p').css('background-color', '#ffeb3b');
    };

    window.clearParagraphs = function() {
        $('p').css('background-color', 'transparent');
    };

    window.selectHeadings = function() {
        $('h3').css('color', '#e91e63');
    };

    window.clearHeadings = function() {
        $('h3').css('color', 'inherit');
    };

    window.selectListItems = function() {
        $('li').addClass('highlight');
    };

    window.clearListItems = function() {
        $('li').removeClass('highlight');
    };
});
