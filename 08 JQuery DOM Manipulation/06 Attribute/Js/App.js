// Get ve Set Attribute örnekleri
function getImageAttr() {
    const src = $('#demoImage').attr('src');
    $('#attrResult').text(`Current src: ${src}`);
}

function setImageAttr() {
    const currentSrc = $('#demoImage').attr('src');
    const newSrc = currentSrc.includes('150') 
        ? 'https://via.placeholder.com/200'
        : 'https://via.placeholder.com/150';
    
    $('#demoImage').attr('src', newSrc);
    getImageAttr();
}

// Remove ve Restore Attribute örnekleri
function removeAttr() {
    $('#demoLink').removeAttr('target');
}

function restoreAttr() {
    $('#demoLink').attr('target', '_blank');
}

// Multiple Attributes örneği
function setMultipleAttrs() {
    $('#demoInput').attr({
        'placeholder': 'Modified placeholder',
        'data-modified': 'true',
        'title': 'Modified input'
    }).addClass('modified');
}

function removeMultipleAttrs() {
    $('#demoInput')
        .removeAttr('data-modified')
        .removeAttr('title')
        .attr('placeholder', 'Original placeholder')
        .removeClass('modified');
}

// Data Attributes örnekleri
function getDataAttr() {
    const element = $('#dataElement');
    const dataId = element.data('id');
    const dataType = element.data('type');
    const dataInfo = element.data('info');
    
    $('#dataResult').html(
        `Data Attributes:<br>
        id: ${dataId}<br>
        type: ${dataType}<br>
        info: ${dataInfo}`
    );
}

function setDataAttr() {
    const element = $('#dataElement');
    const isModified = element.hasClass('modified');
    
    if (!isModified) {
        element
            .data('id', '2')
            .data('type', 'modified')
            .data('info', 'Modified Info')
            .addClass('modified');
    } else {
        element
            .data('id', '1')
            .data('type', 'demo')
            .data('info', 'Original Info')
            .removeClass('modified');
    }
    
    getDataAttr();
}
