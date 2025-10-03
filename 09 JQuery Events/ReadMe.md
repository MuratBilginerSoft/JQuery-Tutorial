# jQuery Olay Yönetimi (Event Handling)

jQuery, web sayfalarında kullanıcı etkileşimlerini yönetmek için güçlü olay yönetimi özellikleri sunar. Bu bölümde, jQuery'nin olay yönetimi yeteneklerini detaylı olarak inceleyeceğiz.

## İçerik

1. [Temel Olay Bağlama](#temel-olay-bağlama)
2. [Olay Türleri](#olay-türleri)
3. [Olay Delegasyonu](#olay-delegasyonu)
4. [Olay Nesnesi](#olay-nesnesi)
5. [Özel Olaylar](#özel-olaylar)

## Temel Olay Bağlama

jQuery'de olayları bağlamak için `.on()` metodu kullanılır. Bu, modern jQuery'nin tercih edilen olay bağlama yöntemidir.

### Temel Sözdizimi:
```javascript
$(selector).on(event, handler);
```

### Örnek Kullanımlar:
```javascript
// Tek bir olay
$('#myButton').on('click', function() {
    alert('Butona tıklandı!');
});

// Birden fazla olay
$('#myElement').on({
    click: function() { /* işlem */ },
    mouseenter: function() { /* işlem */ },
    mouseleave: function() { /* işlem */ }
});
```

## Olay Türleri

jQuery'de kullanabileceğiniz yaygın olay türleri:

### Mouse Olayları
- `click`: Tıklama
- `dblclick`: Çift tıklama
- `mouseenter`: Fare üzerine gelme
- `mouseleave`: Fare üzerinden ayrılma
- `hover`: mouseenter ve mouseleave kombinasyonu

### Klavye Olayları
- `keypress`: Tuşa basma
- `keydown`: Tuş aşağı
- `keyup`: Tuş yukarı

### Form Olayları
- `submit`: Form gönderimi
- `change`: Form elemanı değişimi
- `focus`: Odaklanma
- `blur`: Odak kaybı

### Döküman/Pencere Olayları
- `load`: Sayfa yüklenmesi
- `resize`: Pencere boyutu değişimi
- `scroll`: Kaydırma

## Olay Delegasyonu

Dinamik olarak eklenen elementler için olay delegasyonu kullanılır.

### Örnek:
```javascript
// Mevcut ve gelecekte eklenecek tüm .dynamic-button'lar için
$('#container').on('click', '.dynamic-button', function() {
    alert('Dinamik buton tıklandı!');
});
```

## Olay Nesnesi

Her olay fonksiyonu bir olay nesnesi alır ve bu nesne olayla ilgili yararlı bilgiler içerir.

### Önemli Olay Özellikleri:
```javascript
$('#myButton').on('click', function(event) {
    event.type;           // Olay türü
    event.target;         // Olayı tetikleyen element
    event.currentTarget;  // Olay handler'ın bağlı olduğu element
    event.pageX;          // Fare X koordinatı
    event.pageY;          // Fare Y koordinatı
    event.preventDefault(); // Varsayılan davranışı engelle
    event.stopPropagation(); // Olay kabarcıklanmasını durdur
});
```

## Özel Olaylar

jQuery ile kendi özel olaylarınızı tanımlayabilir ve tetikleyebilirsiniz.

### Örnek:
```javascript
// Özel olay tanımlama
$('#myElement').on('customEvent', function(event, param1, param2) {
    console.log('Özel olay tetiklendi:', param1, param2);
});

// Özel olayı tetikleme
$('#myElement').trigger('customEvent', ['Parametre 1', 'Parametre 2']);
```

## En İyi Uygulamalar

1. **Performans İçin Delegasyon Kullanın:**
   ```javascript
   // Kötü (çok sayıda olay dinleyicisi)
   $('.dynamic-item').on('click', handler);
   
   // İyi (tek olay dinleyicisi)
   $('#container').on('click', '.dynamic-item', handler);
   ```

2. **Olay Bağlantılarını Temizleyin:**
   ```javascript
   // Belirli bir olayı kaldır
   $('#element').off('click', handler);
   
   // Tüm olayları kaldır
   $('#element').off();
   ```

3. **Zincirlenebilir Metodları Kullanın:**
   ```javascript
   $('#element')
       .on('click', clickHandler)
       .on('mouseenter', mouseEnterHandler)
       .on('mouseleave', mouseLeaveHandler);
   ```

## Örnek Projeler

Bu bölümde farklı olay türlerini ve kullanım senaryolarını gösteren interaktif örnekler bulacaksınız:

1. Mouse Olayları Demo
2. Klavye Olayları Demo
3. Form Validasyon Demo
4. Dinamik İçerik Demo
5. Özel Olay Demo

Her örnek, ilgili olay türünün pratik kullanımını gösterir ve kodlarla birlikte detaylı açıklamalar içerir.