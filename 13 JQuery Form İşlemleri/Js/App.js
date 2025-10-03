$(document).ready(function() {
    // 1. Form Elemanlarına Erişim
    $("#myForm").submit(function(event) {
        event.preventDefault();
        let username = $("#username").val();
        let password = $("#password").val();
        alert(`Kullanıcı Adı: ${username}\nŞifre: ${password}`);
    });

    // 2. Form Değerlerini Alma
    $("#showValues").click(function(event) {
        event.preventDefault();
        let inputValue = $("#input1").val();
        let textValue = $("#textarea1").val();
        alert(`Input: ${inputValue}\nTextarea: ${textValue}`);
    });

    // 3. Form Doğrulama
    $("#validationForm").submit(function(event) {
        event.preventDefault();
        let email = $("#email").val();
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            $("#email").addClass("is-invalid").siblings(".invalid-feedback").show();
        } else {
            $("#email").removeClass("is-invalid").siblings(".invalid-feedback").hide();
            alert("Email geçerli: " + email);
        }
    });

    // 4. Özel Form Gönderimi
    $("#customSubmitForm").submit(function(event) {
        event.preventDefault();
        let name = $("#name").val();
        if (name.trim() !== "") {
            alert("Merhaba, " + name + "!");
        } else {
            alert("Lütfen adınızı girin!");
        }
    });

    // 5. AJAX Form
    $("#ajaxForm").submit(function(event) {
        event.preventDefault();
        let formData = {
            username: $("#ajaxUsername").val(),
            password: $("#ajaxPassword").val()
        };
        
        // Simüle edilmiş AJAX çağrısı
        setTimeout(function() {
            alert("AJAX isteği simüle edildi!\nGönderilen veriler:\n" + 
                  JSON.stringify(formData, null, 2));
        }, 500);
    });

    // 6. Değişiklikleri İzleme
    $("#fullname").on("input", function() {
        let value = $(this).val();
        $("#changeOutput")
            .html("Girilen Değer: " + value)
            .show();
    });

    // 7. Tüm Form Verilerini Alma
    $("#serializeForm").submit(function(event) {
        event.preventDefault();
        let formData = $(this).serialize();
        $("#serializeOutput")
            .html("Serialize Edilmiş Veriler: " + formData)
            .show();
    });

    // Genel form temizleme
    $("form").on("reset", function() {
        $(this).find(".is-invalid").removeClass("is-invalid");
        $(this).find(".invalid-feedback").hide();
        $(this).find(".alert").hide();
    });
});
