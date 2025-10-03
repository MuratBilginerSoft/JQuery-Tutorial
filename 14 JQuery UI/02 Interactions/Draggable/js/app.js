$(document).ready(function() {
    // Temel Sürüklenebilir
    $(".basic-draggable").draggable({
        start: function(event, ui) {
            $(this).css('z-index', 100);
        },
        stop: function(event, ui) {
            $(this).animate({ opacity: 1 }, 300);
        }
    });
    
    // Sınırlı Alan İçinde Sürükleme
    $(".contained-draggable").draggable({
        containment: "parent",
        scroll: false,
        drag: function(event, ui) {
            $(this).css('cursor', 'move');
        }
    });
    
    // X Ekseni Sürükleme
    $(".x-axis-draggable").draggable({
        axis: "x",
        drag: function(event, ui) {
            const position = ui.position.left;
            $(this).text(`X: ${Math.round(position)}px`);
        }
    });
    
    // Y Ekseni Sürükleme
    $(".y-axis-draggable").draggable({
        axis: "y",
        drag: function(event, ui) {
            const position = ui.position.top;
            $(this).text(`Y: ${Math.round(position)}px`);
        }
    });
    
    // Grid Üzerinde Sürükleme
    $(".grid-draggable").draggable({
        grid: [20, 20],
        containment: "parent",
        drag: function(event, ui) {
            const x = ui.position.left;
            const y = ui.position.top;
            $(this).text(`Grid\nX: ${x}px\nY: ${y}px`);
        }
    });
    
    // Klon Sürükleme
    $(".clone-draggable").draggable({
        helper: "clone",
        opacity: 0.7,
        start: function(event, ui) {
            $(ui.helper).addClass("draggable-helper");
        },
        stop: function(event, ui) {
            // Yeni pozisyonda kalıcı bir klon oluştur
            if ($(ui.helper).hasClass("draggable-helper")) {
                const clone = $(this).clone();
                clone.css({
                    position: "absolute",
                    left: ui.position.left,
                    top: ui.position.top
                }).draggable({
                    containment: "parent"
                });
                
                $(".clone-container").append(clone);
            }
        }
    });
    
    // Genel Draggable Olayları
    $(".draggable").on({
        mouseenter: function() {
            $(this).css('transform', 'scale(1.02)');
        },
        mouseleave: function() {
            $(this).css('transform', 'scale(1)');
        }
    });
});
