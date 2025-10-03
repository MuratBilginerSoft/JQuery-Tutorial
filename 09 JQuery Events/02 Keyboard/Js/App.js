$(document).ready(function() {
    // Keypress Event
    $('#keypressInput').keypress(function(event) {
        const key = String.fromCharCode(event.which);
        $('#keypressResult').text(`Basılan tuş: ${key} (ASCII kodu: ${event.which})`);
    });

    // Keydown/Keyup Events
    $('#keyupdownInput')
        .keydown(function(event) {
            $('#keyupdownResult')
                .text('Tuş durumu: BASILI')
                .css('color', 'var(--success-color)');
        })
        .keyup(function(event) {
            $('#keyupdownResult')
                .text('Tuş durumu: BIRAKILDI')
                .css('color', 'var(--warning-color)')
                .delay(500)
                .queue(function(next) {
                    $(this).text('Tuş durumu: Beklemede').css('color', '');
                    next();
                });
        });

    // Special Keys
    $('#specialKeysInput').keydown(function(event) {
        let specialKeys = [];
        
        if (event.ctrlKey) specialKeys.push('Ctrl');
        if (event.altKey) specialKeys.push('Alt');
        if (event.shiftKey) specialKeys.push('Shift');
        
        const result = specialKeys.length > 0 
            ? `Basılan özel tuşlar: ${specialKeys.join(' + ')}`
            : 'Basılan özel tuşlar: -';
        
        $('#specialKeysResult').text(result);
    });

    // Game Control
    const player = $('#player');
    const gameArea = $('#gameArea');
    let playerPos = { x: 20, y: 20 };
    const step = 10;

    // Başlangıç pozisyonunu ayarla
    updatePlayerPosition();

    function updatePlayerPosition() {
        player.css({
            left: `${playerPos.x}px`,
            top: `${playerPos.y}px`
        });
    }

    $(document).keydown(function(event) {
        const gameAreaBounds = {
            width: gameArea.width() - player.width(),
            height: gameArea.height() - player.height()
        };

        switch(event.which) {
            case 37: // sol
                playerPos.x = Math.max(0, playerPos.x - step);
                break;
            case 38: // yukarı
                playerPos.y = Math.max(0, playerPos.y - step);
                break;
            case 39: // sağ
                playerPos.x = Math.min(gameAreaBounds.width, playerPos.x + step);
                break;
            case 40: // aşağı
                playerPos.y = Math.min(gameAreaBounds.height, playerPos.y + step);
                break;
            default: return;
        }

        event.preventDefault();
        updatePlayerPosition();
    });

    // Key Combinations
    $(document).keydown(function(event) {
        if (event.ctrlKey) {
            let combo = '';
            
            switch(event.key.toLowerCase()) {
                case 's':
                    combo = 'Ctrl + S (Kaydet)';
                    break;
                case 'a':
                    combo = 'Ctrl + A (Tümünü Seç)';
                    break;
                case 'z':
                    combo = 'Ctrl + Z (Geri Al)';
                    break;
                default:
                    return;
            }

            event.preventDefault();
            $('#comboResult').text(`Son kullanılan kombinasyon: ${combo}`);
        }
    });

    // Input alanlarına otomatik fokus
    $('.example-section').hover(
        function() {
            $(this).find('input').focus();
        },
        function() {
            $(this).find('input').blur();
        }
    );
});
