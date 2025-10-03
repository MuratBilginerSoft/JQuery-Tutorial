$(document).ready(function() {
    // Temel Dialog
    $("#basicDialog").dialog({
        autoOpen: false,
        width: 400,
        show: {
            effect: "fade",
            duration: 300
        },
        hide: {
            effect: "fade",
            duration: 300
        }
    });
    
    $("#openBasicDialog").click(function() {
        $("#basicDialog").dialog("open");
    });
    
    // Modal Dialog
    $("#modalDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: {
            "Tamam": function() {
                $(this).dialog("close");
            },
            "İptal": function() {
                $(this).dialog("close");
            }
        }
    });
    
    $("#openModalDialog").click(function() {
        $("#modalDialog").dialog("open");
    });
    
    // Form Dialog
    $("#formDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 500,
        buttons: {
            "Gönder": function() {
                const name = $("#name").val();
                const email = $("#email").val();
                const message = $("#message").val();
                
                if (name && email && message) {
                    alert(`Form gönderildi!\nAd: ${name}\nE-posta: ${email}\nMesaj: ${message}`);
                    $(this).dialog("close");
                } else {
                    alert("Lütfen tüm alanları doldurun!");
                }
            },
            "İptal": function() {
                $(this).dialog("close");
            }
        }
    });
    
    $("#openFormDialog").click(function() {
        $("#formDialog").dialog("open");
    });
    
    // Animasyonlu Dialog
    $("#animatedDialog").dialog({
        autoOpen: false,
        show: {
            effect: "bounce",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        },
        width: 400,
        buttons: {
            "Kapat": function() {
                $(this).dialog("close");
            }
        }
    });
    
    $("#openAnimatedDialog").click(function() {
        $("#animatedDialog").dialog("open");
    });
});
