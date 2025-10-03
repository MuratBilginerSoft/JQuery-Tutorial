$(document).ready(function() {
    // siblings() Method Demo
    $('[data-demo="siblings"]').click(function() {
        // Reset previous highlights
        $('.family .sibling').removeClass('highlight-sibling');
        
        // Highlight all siblings of active element
        $('.family .active').siblings().addClass('highlight-sibling');
        
        // Add special highlight for special sibling
        setTimeout(() => {
            $('.family .active').siblings('.special').css({
                'background-color': '#fff3e0',
                'border-color':  '#ffeb3b'
            });
        }, 500);
    });

    // next() and prev() Methods Demo
    $('[data-demo="nextprev"]').click(function() {
        // Reset previous highlights
        $('.sequence .item').removeClass('highlight-next highlight-prev');
        
        // Highlight next sibling
        $('.sequence .active').next().addClass('highlight-next');
        
        // Highlight previous sibling
        $('.sequence .active').prev().addClass('highlight-prev');
    });

    // nextAll() and prevAll() Methods Demo
    $('[data-demo="nextprevall"]').click(function() {
        // Reset previous highlights
        $('.sequence-all .item').removeClass('highlight-next highlight-prev');
        
        // Highlight all next siblings
        $('.sequence-all .active').nextAll().addClass('highlight-next');
        
        // Highlight all previous siblings
        $('.sequence-all .active').prevAll().addClass('highlight-prev');
    });

    // nextUntil() and prevUntil() Methods Demo
    $('[data-demo="nextprevuntil"]').click(function() {
        // Reset previous highlights
        $('.sequence-until .item').removeClass('highlight-until');
        
        // Highlight siblings until stop points
        $('.sequence-until .active')
            .nextUntil('.stop-next')
            .addClass('highlight-until');
        
        $('.sequence-until .active')
            .prevUntil('.stop-prev')
            .addClass('highlight-until');
    });

    // Reset buttons functionality
    $('.reset-btn').click(function() {
        const demoContainer = $(this).closest('.demo-container');
        
        // Remove all highlight classes
        demoContainer.find('.sibling, .item').removeClass(
            'highlight-sibling highlight-next highlight-prev highlight-until'
        ).css({
            'background-color': '',
            'border-color': ''
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
    $('.sibling, .item').hover(
        function() {
            $(this).css('transform', 'scale(1.02)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    // Add tooltips
    $('.demo-element').each(function() {
        $(this).attr('title', 'Click elements to see their relationships');
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
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

    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
});
