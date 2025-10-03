// Eleman ekleme (append)
function appendElement() {
    $('#appendPrependDemo').append(
        $('<p>', {
            class: 'new-element',
            text: 'Appended element ' + new Date().toLocaleTimeString()
        })
    );
}

// Eleman başa ekleme (prepend)
function prependElement() {
    $('#appendPrependDemo').prepend(
        $('<p>', {
            class: 'new-element',
            text: 'Prepended element ' + new Date().toLocaleTimeString()
        })
    );
}

// Elemandan sonra ekleme (after)
function addAfter() {
    $('#afterBeforeDemo').after(
        $('<div>', {
            class: 'new-element',
            text: 'Added after ' + new Date().toLocaleTimeString()
        })
    );
}

// Elemandan önce ekleme (before)
function addBefore() {
    $('#afterBeforeDemo').before(
        $('<div>', {
            class: 'new-element',
            text: 'Added before ' + new Date().toLocaleTimeString()
        })
    );
}

// Karmaşık eleman ekleme
function addComplexElement() {
    const complexElement = $('<div>', {
        class: 'complex-element'
    }).append(
        $('<img>', {
            src: 'https://via.placeholder.com/30',
            alt: 'Icon'
        }),
        $('<div>', {
            class: 'content'
        }).append(
            $('<h4>', {
                text: 'Complex Element'
            }),
            $('<p>', {
                text: 'Added at ' + new Date().toLocaleTimeString()
            })
        ),
        $('<button>', {
            text: '×',
            click: function() {
                $(this).parent().fadeOut(300, function() {
                    $(this).remove();
                });
            }
        })
    );

    $('.content-area').append(complexElement);
}

// Dinamik liste elemanı ekleme
let itemCounter = 1;
function addListItem() {
    $('#dynamicList').append(
        $('<li>', {
            class: 'new-element',
            text: `Dynamic item ${itemCounter++} - ${new Date().toLocaleTimeString()}`
        })
    );
}
