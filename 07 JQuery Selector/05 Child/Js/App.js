$(document).ready(function() {
    // Sayfa yüklendiğinde animasyon
    $('.demo-section').hide().each(function(i) {
        $(this).delay(100 * i).fadeIn(500);
    });

    // Child selector functions
    window.selectDirectChildren = function() {
        $('.parent-box > .child-element').addClass('highlight');
    };

    window.clearDirectChildren = function() {
        $('.parent-box > .child-element').removeClass('highlight');
    };

    window.selectFirstChild = function() {
        $('.parent-box > div:first-child').addClass('selected');
    };

    window.clearFirstChild = function() {
        $('.parent-box > div:first-child').removeClass('selected');
    };

    window.selectLastChild = function() {
        $('.parent-box > div:last-child').addClass('marked');
    };

    window.clearLastChild = function() {
        $('.parent-box > div:last-child').removeClass('marked');
    };

    window.selectNthChild = function() {
        $('.parent-box > div:nth-child(2)').addClass('highlight');
    };

    window.clearNthChild = function() {
        $('.parent-box > div:nth-child(2)').removeClass('highlight');
    };

    window.selectAllChildren = function() {
        $('.nested-list li').addClass('selected');
    };

    window.clearAllChildren = function() {
        $('.nested-list li').removeClass('selected');
    };
});
