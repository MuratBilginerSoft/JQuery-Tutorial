$(document).ready(function() {
    // Children Method Demo
    $('#childrenDemo button.run-btn').click(function() {
        // Reset any previous highlights
        $('.demo-tree *').removeClass('highlight-children');
        
        // Highlight direct children of the root element
        $('.root').children().addClass('highlight-children');
    });

    $('#childrenDemo button.filter-btn').click(function() {
        // Reset any previous highlights
        $('.demo-tree *').removeClass('highlight-children');
        
        // Highlight only direct children with class 'branch'
        $('.root').children('.branch').addClass('highlight-children');
    });

    // Find Method Demo
    $('#findDemo button.run-btn').click(function() {
        // Reset any previous highlights
        $('.demo-tree *').removeClass('highlight-find');
        
        // Highlight all leaf elements using find()
        $('.root').find('.leaf').addClass('highlight-find');
    });

    $('#findDemo button.filter-btn').click(function() {
        // Reset any previous highlights
        $('.demo-tree *').removeClass('highlight-find');
        
        // Highlight specific leaf elements using find() with filter
        $('.root').find('.leaf:contains("3")').addClass('highlight-find');
    });

    // Reset buttons functionality
    $('.reset-btn').click(function() {
        // Remove all highlight classes
        $('.demo-tree *').removeClass('highlight-children highlight-find');
    });

    // Code copy functionality
    $('.copy-btn').click(function() {
        const codeBlock = $(this).siblings('pre').find('code');
        const textArea = document.createElement('textarea');
        textArea.value = codeBlock.text();
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        // Show feedback
        const originalText = $(this).text();
        $(this).text('Copied!');
        setTimeout(() => {
            $(this).text(originalText);
        }, 2000);
    });

    // Interactive example for children() method
    function updateChildrenExample() {
        const selectedElement = $('#childrenSelector').val();
        const filter = $('#childrenFilter').val();
        
        // Reset highlights
        $('.interactive-tree *').removeClass('highlight-children');
        
        // Apply new highlights based on selection
        if (filter) {
            $(selectedElement).children(filter).addClass('highlight-children');
        } else {
            $(selectedElement).children().addClass('highlight-children');
        }
    }

    $('#childrenSelector, #childrenFilter').on('change', updateChildrenExample);

    // Interactive example for find() method
    function updateFindExample() {
        const selectedElement = $('#findSelector').val();
        const filter = $('#findFilter').val();
        
        // Reset highlights
        $('.interactive-tree *').removeClass('highlight-find');
        
        // Apply new highlights based on selection
        if (filter) {
            $(selectedElement).find(filter).addClass('highlight-find');
        } else {
            $(selectedElement).find('*').addClass('highlight-find');
        }
    }

    $('#findSelector, #findFilter').on('change', updateFindExample);

    // Initialize Prism.js for syntax highlighting
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }

    // Add smooth scrolling to all anchor links
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });

    // Add tooltips to demo elements
    $('.demo-element').each(function() {
        $(this).attr('title', 'Click to see the element structure');
    });

    // Add hover effects to navigation links
    $('.nav-link').hover(
        function() {
            $(this).find('i').animate({ marginLeft: '10px' }, 200);
        },
        function() {
            $(this).find('i').animate({ marginLeft: '0' }, 200);
        }
    );

    // Performance optimization for animations
    $.fx.speeds._default = 400;
});
