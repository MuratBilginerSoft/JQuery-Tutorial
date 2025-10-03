$(document).ready(function() {
    // Temel Sıralama
    $("#basicSort").sortable({
        placeholder: "ui-sortable-placeholder",
        animation: 150,
        handle: false,
        opacity: 0.7,
        cursor: "move"
    });

    // Bağlantılı Listeler
    $(".connected").sortable({
        connectWith: ".connected",
        placeholder: "ui-sortable-placeholder",
        animation: 150,
        opacity: 0.7,
        cursor: "move",
        start: function(event, ui) {
            ui.item.addClass('dragging');
        },
        stop: function(event, ui) {
            ui.item.removeClass('dragging');
        }
    });

    // Grid Sıralama
    $("#gridSort").sortable({
        placeholder: "ui-sortable-placeholder",
        animation: 150,
        opacity: 0.7,
        cursor: "move",
        tolerance: "pointer",
        items: "> div",
        start: function(event, ui) {
            ui.placeholder.css({
                width: ui.item.width(),
                height: ui.item.height(),
                visibility: 'visible'
            });
        }
    });

    // Görev Listesi
    $(".task-list").sortable({
        connectWith: ".task-list",
        handle: ".task-handle",
        placeholder: "ui-sortable-placeholder",
        animation: 150,
        opacity: 0.7,
        cursor: "move",
        start: function(event, ui) {
            ui.placeholder.height(ui.item.height());
        },
        receive: function(event, ui) {
            // Görev tamamlandı listesine taşındığında
            if ($(this).attr('id') === 'doneList') {
                ui.item.addClass('completed');
            } else {
                ui.item.removeClass('completed');
            }
        }
    });

    // Sıralama değişikliklerini kaydetme örneği
    $(".sortable-list").on("sortupdate", function(event, ui) {
        let listId = $(this).attr('id');
        let items = $(this).find('li').map(function() {
            return $(this).text();
        }).get();
        
        // Burada bir API'ye gönderebilir veya localStorage'a kaydedebilirsiniz
        console.log(`${listId} listesi güncellendi:`, items);
    });
});
