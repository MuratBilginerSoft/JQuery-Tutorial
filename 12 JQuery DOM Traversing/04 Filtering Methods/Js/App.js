$(document).ready(function() {
    // first() and last() Methods Demo
    $('[data-demo="firstlast"]').click(function() {
        // Reset previous highlights
        $('.item-list .item').removeClass('highlight-first highlight-last');
        
        // Highlight first element
        $('.item-list .item').first().addClass('highlight-first');
        
        // Highlight last element
        setTimeout(() => {
            $('.item-list .item').last().addClass('highlight-last');
        }, 500);
    });

    // eq() Method Demo
    $('[data-demo="eq"]').click(function() {
        // Reset previous highlights
        $('.indexed-list .item').removeClass('highlight-eq');
        
        // Highlight element at index 2
        $('.indexed-list .item').eq(2).addClass('highlight-eq');
        
        // Highlight second to last element (negative index)
        setTimeout(() => {
            $('.indexed-list .item').eq(-2).addClass('highlight-eq');
        }, 500);
    });

    // filter() Method Demo
    $('[data-demo="filter"]').click(function() {
        // Reset previous highlights
        $('.filter-list .item').removeClass('highlight-filter');
        
        // Filter elements with class 'special'
        $('.filter-list .item').filter('.special').addClass('highlight-filter');
        
        // Filter elements with even index
        setTimeout(() => {
            $('.filter-list .item').filter(function(index) {
                return index % 2 === 0;
            }).css('border', '2px dashed var(--primary-color)');
        }, 500);
    });

    // not() Method Demo
    $('[data-demo="not"]').click(function() {
        // Reset previous highlights
        $('.not-list .item').removeClass('highlight-not');
        
        // Select elements not having class 'exclude'
        $('.not-list .item').not('.exclude').addClass('highlight-not');
        
        // Select elements not at odd indices
        setTimeout(() => {
            $('.not-list .item').not(function(index) {
                return index % 2 === 0;
            }).css('border', '2px solid var(--secondary-color)');
        }, 500);
    });

    // Reset buttons functionality
    $('.reset-btn').click(function() {
        const demoContainer = $(this).closest('.demo-container');
        
        // Remove all highlight classes and inline styles
        demoContainer.find('.item').removeClass(
            'highlight-first highlight-last highlight-eq highlight-filter highlight-not'
        ).css({
            'background-color': '',
            'border': '',
            'transform': ''
        });
    });

    // Code copy functionality
    $('.code-example').each(function() {
        const codeBlock = $(this);
        const copyBtn = $('<button>')
            .addClass('copy-btn')
            .html('<i class="fas fa-copy"></i> Copy')
            .css({
                'position': 'absolute',
                'right': '10px',
                'top': '10px',
                'background': 'transparent',
                'border': '1px solid var(--border-color)',
                'padding': '5px 10px',
                'cursor': 'pointer',
                'border-radius': '4px'
            });

        codeBlock.css('position', 'relative').prepend(copyBtn);

        copyBtn.click(function() {
            const code = $(this).siblings('pre').text();
            navigator.clipboard.writeText(code).then(() => {
                $(this).html('<i class="fas fa-check"></i> Copied!');
                setTimeout(() => {
                    $(this).html('<i class="fas fa-copy"></i> Copy');
                }, 2000);
            });
        });
    });

    // Interactive hover effects
    $('.item').hover(
        function() {
            $(this).css({
                'transform': 'translateX(10px)',
                'box-shadow': '0 2px 5px rgba(0,0,0,0.1)'
            });
        },
        function() {
            $(this).css({
                'transform': 'translateX(0)',
                'box-shadow': 'none'
            });
        }
    );

    // Add tooltips
    $('.demo-element').each(function() {
        $(this).attr('title', 'Click elements to see filtering in action');
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 800);
        }
    });

    // Navigation link animations
    $('.nav-link').hover(
        function() {
            const icon = $(this).find('i');
            if ($(this).hasClass('prev')) {
                icon.animate({ marginRight: '10px' }, 200);
            } else {
                icon.animate({ marginLeft: '10px' }, 200);
            }
        },
        function() {
            const icon = $(this).find('i');
            if ($(this).hasClass('prev')) {
                icon.animate({ marginRight: '0' }, 200);
            } else {
                icon.animate({ marginLeft: '0' }, 200);
            }
        }
    );

    // Initialize Prism.js
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }

    // Add sequential animation to items on page load
    $('.item').each(function(index) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(20px)'
        });
        
        setTimeout(() => {
            $(this).css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }, 100 * index);
    });
});
