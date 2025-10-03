$(document).ready(function() {
    // Reset button functionality
    $('.reset-btn').click(function() {
        const $demoElement = $(this).closest('.demo-container').find('.demo-element');
        $demoElement.find('*').css({
            'background-color': '',
            'border': '',
            'padding': ''
        });
        
        // Reset interactive demo
        $('.interactive-demo *').removeClass(
            'parent-highlight parents-highlight parentsUntil-highlight'
        );
    });

    // parent() demo
    $('[data-demo="parent"]').click(function() {
        const $demoElement = $(this).closest('.demo-container').find('.demo-element');
        
        // Reset previous styles
        $demoElement.find('*').css('background-color', '');
        
        // Apply parent() method
        $demoElement.find('span.highlight').parent().css('background-color', 'yellow');
        
        // Add animation effect
        $demoElement.find('span.highlight').parent()
            .hide()
            .fadeIn(500);
    });

    // parents() demo
    $('[data-demo="parents"]').click(function() {
        const $demoElement = $(this).closest('.demo-container').find('.demo-element');
        
        // Reset previous styles
        $demoElement.find('*').css('border', '');
        
        // Apply parents() method with animation
        $demoElement.find('span.highlight').parents().each(function(index) {
            const $element = $(this);
            setTimeout(function() {
                $element.css('border', '2px solid red');
            }, index * 200);
        });
    });

    // parentsUntil() demo
    $('[data-demo="parentsUntil"]').click(function() {
        const $demoElement = $(this).closest('.demo-container').find('.demo-element');
        
        // Reset previous styles
        $demoElement.find('*').css({
            'border': '',
            'padding': ''
        });
        
        // Apply parentsUntil() method with animation
        $demoElement.find('span.highlight').parentsUntil('.level-3').each(function(index) {
            const $element = $(this);
            setTimeout(function() {
                $element.css({
                    'border': '2px solid blue',
                    'padding': '5px'
                });
            }, index * 200);
        });
    });

    // Interactive demo functionality
    $('.demo-btn').click(function() {
        const method = $(this).data('method');
        const $target = $('.target');
        
        // Remove all highlights first
        $('.interactive-demo *').removeClass(
            'parent-highlight parents-highlight parentsUntil-highlight'
        );
        
        // Apply appropriate method with animation
        switch(method) {
            case 'parent':
                $target.parent()
                    .addClass('parent-highlight')
                    .hide()
                    .fadeIn(500);
                break;
                
            case 'parents':
                $target.parents().each(function(index) {
                    const $element = $(this);
                    setTimeout(function() {
                        $element.addClass('parents-highlight');
                    }, index * 200);
                });
                break;
                
            case 'parentsUntil':
                $target.parentsUntil('.level-3').each(function(index) {
                    const $element = $(this);
                    setTimeout(function() {
                        $element.addClass('parentsUntil-highlight');
                    }, index * 200);
                });
                break;
        }
    });

    // Hover effects for interactive demo
    $('.interactive-demo div').hover(
        function() {
            if (!$(this).hasClass('parent-highlight') && 
                !$(this).hasClass('parents-highlight') && 
                !$(this).hasClass('parentsUntil-highlight')) {
                $(this).css('background-color', 'rgba(33, 150, 243, 0.1)');
            }
        },
        function() {
            if (!$(this).hasClass('parent-highlight') && 
                !$(this).hasClass('parents-highlight') && 
                !$(this).hasClass('parentsUntil-highlight')) {
                $(this).css('background-color', '');
            }
        }
    );

    // Code copy functionality
    $('.code-example').each(function() {
        const $codeBlock = $(this);
        const $copyButton = $('<button>')
            .addClass('copy-btn')
            .html('<i class="fas fa-copy"></i>')
            .css({
                'position': 'absolute',
                'right': '10px',
                'top': '10px',
                'background': 'transparent',
                'border': 'none',
                'color': 'var(--text-light)',
                'cursor': 'pointer'
            });

        $codeBlock.css('position', 'relative').append($copyButton);

        $copyButton.click(function() {
            const code = $codeBlock.find('code').text().trim();
            navigator.clipboard.writeText(code).then(
                function() {
                    $copyButton.html('<i class="fas fa-check"></i>');
                    setTimeout(() => {
                        $copyButton.html('<i class="fas fa-copy"></i>');
                    }, 2000);
                },
                function() {
                    $copyButton.html('<i class="fas fa-times"></i>');
                    setTimeout(() => {
                        $copyButton.html('<i class="fas fa-copy"></i>');
                    }, 2000);
                }
            );
        });
    });

    // Initialize syntax highlighting
    Prism.highlightAll();
});
