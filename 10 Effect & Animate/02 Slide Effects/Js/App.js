$(document).ready(function() {
    // Basic Slide Demo
    $('#slideUpBtn').click(function() {
        const speed = $('#slideSpeed').val();
        $('#slideDemo').slideUp(speed);
    });

    $('#slideDownBtn').click(function() {
        const speed = $('#slideSpeed').val();
        $('#slideDemo').slideDown(speed);
    });

    // Slide Toggle Demo
    $('#slideToggleBtn').click(function() {
        const speed = $('#toggleSlideSpeed').val();
        $('#slideToggleDemo').slideToggle(speed);
    });

    // Accordion functionality
    $('.accordion-header').click(function() {
        const $header = $(this);
        const $content = $header.next('.accordion-content');
        const $icon = $header.find('i');
        
        // Toggle active class for styling
        $header.toggleClass('active');
        
        // Slide toggle the content
        $content.slideToggle('slow', function() {
            // Callback after animation completes
            if ($content.is(':visible')) {
                $icon.addClass('fa-minus').removeClass('fa-plus');
            } else {
                $icon.addClass('fa-plus').removeClass('fa-minus');
            }
        });
        
        // Close other accordion items
        $('.accordion-content').not($content).slideUp('slow');
        $('.accordion-header').not($header).removeClass('active');
        $('.accordion-header').not($header).find('i')
            .addClass('fa-plus')
            .removeClass('fa-minus');
    });

    // Menu functionality
    $('.menu-header').click(function() {
        const $header = $(this);
        const $submenu = $header.next('.submenu');
        
        // Toggle active class for styling
        $header.toggleClass('active');
        
        // Slide toggle the submenu
        $submenu.slideToggle('slow');
        
        // Optional: Close other submenus
        // $('.submenu').not($submenu).slideUp('slow');
        // $('.menu-header').not($header).removeClass('active');
    });

    // Hover effects for interactive elements
    $('.demo-element, .accordion-header, .menu-header').hover(
        function() {
            $(this).css('transform', 'scale(1.02)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    // Add hover effect to select elements
    $('select').hover(
        function() {
            $(this).css('border-color', 'var(--secondary-color)');
        },
        function() {
            $(this).css('border-color', 'var(--primary-color)');
        }
    );

    // Add hover effect to code preview
    $('.code-preview').hover(
        function() {
            $(this).css('background-color', '#e9ecef');
        },
        function() {
            $(this).css('background-color', 'var(--code-background)');
        }
    );

    // Initialize: Hide all accordion content and submenus initially
    $('.accordion-content, .submenu').hide();
});
