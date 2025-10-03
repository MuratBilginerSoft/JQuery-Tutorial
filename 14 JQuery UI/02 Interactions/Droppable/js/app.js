$(document).ready(function() {
    // Temel Sürükle-Bırak
    $("#dragItem1").draggable({
        revert: "invalid"
    });
    
    $("#dropZone1").droppable({
        accept: "#dragItem1",
        classes: {
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function(event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .html("Bırakıldı!");
            
            ui.draggable.position({
                of: $(this),
                my: "center",
                at: "center"
            });
        }
    });
    
    // Kabul/Red Örneği
    $(".draggable[data-type]").draggable({
        revert: true,
        start: function(event, ui) {
            $(this).css('z-index', 100);
        }
    });
    
    $(".validation-drop").droppable({
        accept: ".draggable[data-type='acceptable']",
        classes: {
            "ui-droppable-hover": "ui-state-hover"
        },
        over: function(event, ui) {
            const isAcceptable = ui.draggable.data("type") === "acceptable";
            $(this)
                .removeClass("ui-state-highlight ui-state-error")
                .addClass(isAcceptable ? "ui-state-highlight" : "ui-state-error");
        },
        drop: function(event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .html("Kabul edildi!");
            
            ui.draggable.draggable("disable").css({
                opacity: 0.5,
                cursor: "default"
            });
        }
    });
    
    // Alışveriş Sepeti
    let cartTotal = 0;
    
    $(".product").draggable({
        helper: "clone",
        revert: "invalid"
    });
    
    $(".cart").droppable({
        accept: ".product",
        drop: function(event, ui) {
            const price = parseInt(ui.draggable.data("price"));
            cartTotal += price;
            
            // Sepete ürün ekle
            const cartItem = $("<div>")
                .addClass("cart-item")
                .text(ui.draggable.text())
                .appendTo($(".cart-items"));
            
            // Toplam fiyatı güncelle
            $(".cart-total").text(`Toplam: ${cartTotal}₺`);
            
            // Animasyon efekti
            cartItem.hide().fadeIn();
        }
    });
    
    // Sıralama Kutuları
    $(".sorting-item").draggable({
        revert: "invalid",
        containment: ".sorting-container",
        stack: ".sorting-item"
    });
    
    $(".sorting-box").droppable({
        accept: ".sorting-item",
        drop: function(event, ui) {
            const droppedItem = ui.draggable;
            const dropZone = $(this);
            
            // Öğeyi yeni konumuna taşı
            droppedItem.appendTo(dropZone).css({
                top: 0,
                left: 0,
                position: "relative"
            });
            
            // Animasyon efekti
            dropZone.effect("highlight", {}, 1000);
        }
    });
    
    // Genel Hover Efektleri
    $(".draggable").on({
        mouseenter: function() {
            $(this).css('transform', 'scale(1.02)');
        },
        mouseleave: function() {
            $(this).css('transform', 'scale(1)');
        }
    });
});
