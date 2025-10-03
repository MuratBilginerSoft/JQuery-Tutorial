// Add Class örneği
function addClass() {
    $('#addRemoveDemo .target-element').addClass('highlight');
}

// Remove Class örneği
function removeClass() {
    $('#addRemoveDemo .target-element').removeClass('highlight');
}

// Toggle Class örneği
function toggleClass() {
    $('#toggleDemo .target-element').toggleClass('highlight');
}

// Has Class kontrolü
function checkClass() {
    const element = $('#hasClassDemo .target-element');
    const hasHighlight = element.hasClass('highlight');
    $('#hasClassResult').text(`Status: ${hasHighlight ? 'Has highlight class' : 'No highlight class'}`);
}

function toggleClassForCheck() {
    $('#hasClassDemo .target-element').toggleClass('highlight');
    checkClass();
}

// Multiple Classes örnekleri
function addMultipleClasses() {
    $('#multipleClassDemo .target-element')
        .addClass('highlight rounded shadow bold-text animate');
}

function removeMultipleClasses() {
    $('#multipleClassDemo .target-element')
        .removeClass('highlight rounded shadow bold-text animate');
}

function toggleMultipleClasses() {
    $('#multipleClassDemo .target-element')
        .toggleClass('highlight rounded shadow bold-text animate');
}

// Sayfa yüklendiğinde sınıf kontrolünü çalıştır
$(document).ready(function() {
    checkClass();
});
