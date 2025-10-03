// HTML içeriğini değiştirme örneği
function changeHtml() {
    $('#htmlDemo').html('<p>This is <em>modified</em> content with <strong>HTML</strong> tags!</p>')
        .addClass('changed');
    
    // 2 saniye sonra orijinal haline dön
    setTimeout(() => {
        $('#htmlDemo')
            .html('<p>This is <strong>original</strong> content</p>')
            .removeClass('changed');
    }, 2000);
}

// Text içeriğini değiştirme örneği
function changeText() {
    $('#textDemo').text('This is modified text content - HTML tags will be shown as plain text: <strong>test</strong>')
        .addClass('changed');
    
    // 2 saniye sonra orijinal haline dön
    setTimeout(() => {
        $('#textDemo')
            .html('<p>This is <strong>original</strong> text content</p>')
            .removeClass('changed');
    }, 2000);
}

// Input değerini değiştirme örneği
function changeValue() {
    $('#valueDemo').val('Modified Value')
        .addClass('changed');
    
    // 2 saniye sonra orijinal haline dön
    setTimeout(() => {
        $('#valueDemo')
            .val('Original Value')
            .removeClass('changed');
    }, 2000);
}
