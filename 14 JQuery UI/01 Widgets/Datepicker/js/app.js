$(document).ready(function() {
    // Temel Datepicker
    $("#datepicker1").datepicker({
        dateFormat: 'dd/mm/yy',
        onSelect: function(dateText) {
            updateSelectedDates('Temel Datepicker', dateText);
        }
    });
    
    // Özelleştirilmiş Datepicker
    $("#datepicker2").datepicker({
        dateFormat: 'dd/mm/yy',
        numberOfMonths: 2,
        showButtonPanel: true,
        showWeek: true,
        changeMonth: true,
        changeYear: true,
        yearRange: "2000:2025",
        onSelect: function(dateText) {
            updateSelectedDates('Özelleştirilmiş Datepicker', dateText);
        }
    });
    
    // Türkçe Datepicker
    $("#datepicker3").datepicker({
        dateFormat: 'dd/mm/yy',
        dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
        dayNamesMin: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
        monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
        firstDay: 1,
        onSelect: function(dateText) {
            updateSelectedDates('Türkçe Datepicker', dateText);
        }
    });
    
    // Seçilen tarihleri göster
    function updateSelectedDates(pickerName, date) {
        const currentContent = $("#selectedDates").html();
        const newDate = `<p><strong>${pickerName}:</strong> ${date}</p>`;
        $("#selectedDates").html(currentContent + newDate);
    }
});
