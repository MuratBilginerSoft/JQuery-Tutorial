// Orijinal içerikleri saklayacağımız değişkenler
let removedElement = null;
let emptyDemoContent = null;
let detachedElement = null;

// Remove metodu örneği
function removeElement() {
    removedElement = $('#removeDemo p').remove();
}

function restoreElement() {
    if (removedElement) {
        $('#removeDemo').prepend(removedElement);
        removedElement = null;
    }
}

// Empty metodu örneği
function emptyContainer() {
    emptyDemoContent = $('#emptyDemo').children().not('button').detach();
    $('#emptyDemo').children().not('button').remove();
}

function restoreContainer() {
    if (emptyDemoContent) {
        $('#emptyDemo').prepend(emptyDemoContent);
        emptyDemoContent = null;
    }
}

// Detach metodu örneği
let clickCount = 0;
$('#detachElement').on('click', function() {
    clickCount++;
    $(this).text('Click count: ' + clickCount);
});

function detachElement() {
    detachedElement = $('#detachElement').detach();
}

function reattachElement() {
    if (detachedElement) {
        $('#detachDemo').prepend(detachedElement);
        detachedElement = null;
    }
}

// Animasyonlu silme örneği
$(document).on('click', '.remove-btn', function() {
    $(this).parent()
        .css('animation', 'fadeOut 0.3s ease-out')
        .one('animationend', function() {
            $(this).remove();
        });
});

let itemCount = 4;
function addItem() {
    $('.removable-items').append(
        $('<div>', {
            class: 'item',
            html: `Item ${itemCount} <span class="remove-btn">×</span>`
        })
    );
    itemCount++;
}
