$(document).ready(function() {
    // Sayfa yüklendiğinde animasyon
    $('.demo-section').hide().each(function(i) {
        $(this).delay(100 * i).fadeIn(500);
    });

    // Attribute selector functions
    window.selectDataType = function() {
        $('[data-type="important"]').addClass('highlight');
    };

    window.clearDataType = function() {
        $('[data-type="important"]').removeClass('highlight');
    };

    window.selectExternalLinks = function() {
        $('a[target="_blank"]').addClass('selected');
    };

    window.clearExternalLinks = function() {
        $('a[target="_blank"]').removeClass('selected');
    };

    window.selectStartsWith = function() {
        $('div[data-code^="ABC"]').addClass('marked');
    };

    window.clearStartsWith = function() {
        $('div[data-code^="ABC"]').removeClass('marked');
    };

    window.selectEndsWith = function() {
        $('div[data-code$="123"]').addClass('highlight');
    };

    window.clearEndsWith = function() {
        $('div[data-code$="123"]').removeClass('highlight');
    };

    window.selectContains = function() {
        $('div[data-tag*="jquery"]').addClass('selected');
    };

    window.clearContains = function() {
        $('div[data-tag*="jquery"]').removeClass('selected');
    };
});
