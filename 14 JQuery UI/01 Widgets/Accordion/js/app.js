$(document).ready(function() {
    // Accordion'u başlat
    $("#accordion").accordion({
        // Animasyon süresini ayarla
        animate: 200,
        
        // Aktif paneli belirle (0 tabanlı index)
        active: 0,
        
        // Tüm panellerin kapanmasına izin ver
        collapsible: true,
        
        // Panel yüksekliğini içeriğe göre ayarla
        heightStyle: "content",
        
        // Panel açıldığında çalışacak fonksiyon
        activate: function(event, ui) {
            if(ui.newPanel.length) {
                console.log("Panel açıldı:", ui.newHeader.text());
            }
        }
    });
    
    // Dinamik panel ekleme örneği
    $("#addSection").click(function() {
        const newSection = `
            <h3>Yeni Bölüm</h3>
            <div>
                <p>Bu dinamik olarak eklenmiş yeni bir bölümdür.</p>
            </div>
        `;
        
        $("#accordion").append(newSection).accordion("refresh");
    });
});
