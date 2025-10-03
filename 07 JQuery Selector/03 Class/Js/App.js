$(document).ready(function() {
    // Sayfa yüklendiğinde animasyon
    $('.demo-section').hide().each(function(i) {
        $(this).delay(100 * i).fadeIn(500);
    });

    // Class selector functions
    window.selectHighlightElements = function() {
        $('.highlight-me').addClass('highlight');
    };

    window.clearHighlightElements = function() {
        $('.highlight-me').removeClass('highlight');
    };

    window.selectMultipleClasses = function() {
        $('.box.special').addClass('selected');
    };

    window.clearMultipleClasses = function() {
        $('.box.special').removeClass('selected');
    };

    window.selectImportantElements = function() {
        $('.note').addClass('important');
    };

    window.clearImportantElements = function() {
        $('.note').removeClass('important');
    };
});
