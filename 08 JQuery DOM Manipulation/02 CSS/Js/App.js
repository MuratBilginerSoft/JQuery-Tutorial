// Tek CSS özelliğini değiştirme
function changeSingleCss() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeead'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    $('#singleCssDemo').css('color', randomColor);
}

// Birden fazla CSS özelliğini değiştirme
function changeMultipleCss() {
    $('#multipleCssDemo').css({
        'background-color': '#4ecdc4',
        'color': 'white',
        'padding': '20px',
        'border-radius': '10px',
        'font-weight': 'bold'
    });

    // 2 saniye sonra orijinal haline dön
    setTimeout(() => {
        $('#multipleCssDemo').css({
            'background-color': '#f8f9fa',
            'color': 'black',
            'padding': '15px',
            'border-radius': '4px',
            'font-weight': 'normal'
        });
    }, 2000);
}

// CSS animasyonu örneği
function animateCss() {
    $('#animationDemo')
        .css('position', 'relative')
        .animate({
            left: '100px',
            opacity: 0.5,
            fontSize: '24px',
            backgroundColor: '#ffd93d'
        }, 1000)
        .animate({
            left: '0px',
            opacity: 1,
            fontSize: '16px',
            backgroundColor: '#f8f9fa'
        }, 1000);
}

// CSS değerini alma
function getCssValue() {
    const fontSize = $('#getCssDemo').css('font-size');
    $('#cssValue').text(`Font size is: ${fontSize}`);
}
