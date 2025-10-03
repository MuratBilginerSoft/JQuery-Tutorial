$(document).ready(function() {
    // Card hover effect enhancement
    $('.card').hover(
        function() {
            $(this).find('.card-icon').css('transform', 'scale(1.1)');
        },
        function() {
            $(this).find('.card-icon').css('transform', 'scale(1)');
        }
    );

    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 50
            }, 500);
        }
    });

    // Add transition effect to card icons
    $('.card-icon').css('transition', 'transform 0.3s ease');

    // External link handling
    $('.resource-link').on('click', function(e) {
        // Add any analytics tracking here if needed
        console.log('Resource link clicked:', $(this).text().trim());
    });

    // Initialize tooltips if needed
    if (typeof $.fn.tooltip === 'function') {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // Add active state to cards on click
    $('.card').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Optional: Add loading animation for resource links
    $('.resource-link').on('click', function() {
        const $icon = $(this).find('i');
        const originalClass = $icon.attr('class');
        
        $icon.attr('class', 'fas fa-spinner fa-spin');
        
        setTimeout(() => {
            $icon.attr('class', originalClass);
        }, 1000);
    });
});
