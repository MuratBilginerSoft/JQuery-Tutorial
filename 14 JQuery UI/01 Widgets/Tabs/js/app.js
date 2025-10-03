$(document).ready(function() {
    // Temel Tabs
    $("#basicTabs").tabs({
        active: 0,
        show: {
            effect: "fadeIn",
            duration: 400
        }
    });
    
    // Dinamik Tabs
    $("#dynamicTabs").tabs();
    
    let tabCounter = 2;
    
    // Yeni sekme ekleme
    $("#addTab").click(function() {
        const tabId = "dtab" + tabCounter;
        const tabTitle = "Sekme " + tabCounter;
        
        // Sekme başlığını ekle
        $("<li><a href='#" + tabId + "'>" + tabTitle + "</a></li>")
            .appendTo("#dynamicTabs ul");
        
        // Sekme içeriğini ekle
        $("<div id='" + tabId + "'><p>Bu " + tabCounter + ". sekmedir.</p></div>")
            .appendTo("#dynamicTabs");
        
        $("#dynamicTabs").tabs("refresh");
        $("#dynamicTabs").tabs("option", "active", -1);
        
        tabCounter++;
    });
    
    // Ajax Tabs
    $("#ajaxTabs").tabs({
        beforeLoad: function(event, ui) {
            ui.panel.html("Yükleniyor...");
            
            ui.jqXHR.fail(function() {
                ui.panel.html(
                    "Sekme içeriği yüklenemedi. " +
                    "Lütfen daha sonra tekrar deneyin."
                );
            });
        }
    });
    
    // Sekme değiştiğinde
    $(".ui-tabs").on("tabsactivate", function(event, ui) {
        console.log("Aktif sekme değişti:", ui.newTab.text());
    });
    
    // Sekmelerde hover efekti
    $(".ui-tabs-nav li").hover(
        function() {
            $(this).addClass("ui-state-hover");
        },
        function() {
            $(this).removeClass("ui-state-hover");
        }
    );
});
