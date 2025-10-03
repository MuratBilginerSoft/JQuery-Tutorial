# jQuery DOM Manipulation

jQuery, web sayfasında HTML içeriğini dinamik olarak değiştirebilmek ve DOM (Document Object Model) üzerinde kolayca işlem yapabilmek için güçlü bir araçtır. Bu bölümde, jQuery ile DOM manipülasyonu yöntemlerini öğreneceksiniz.

## İçerik Tablosu

1. [İçerik Manipülasyonu](#1-içerik-manipülasyonu)
2. [CSS Manipülasyonu](#2-css-manipülasyonu)
3. [Element Ekleme](#3-element-ekleme)
4. [Element Silme](#4-element-silme)
5. [Sınıf Manipülasyonu](#5-sınıf-manipülasyonu)
6. [Özellik Manipülasyonu](#6-özellik-manipülasyonu)

## 1. İçerik Manipülasyonu

HTML elementlerinin içeriklerini değiştirmek için kullanılan metodlar:

### Metodlar:
- **html()**: HTML içeriğini değiştirir
- **text()**: Metin içeriğini değiştirir
- **val()**: Form elemanlarının değerlerini alır/değiştirir

### Örnek Kod:
```html
<div id="content">
    <h1 id="title">Eski Başlık</h1>
    <input id="nameInput" type="text" value="Eski değer">
</div>

<script>
    // HTML içeriğini değiştirme
    $("#title").html("Yeni Başlık!");
    
    // Metin içeriğini değiştirme
    $("#title").text("Yeni Metin");
    
    // Input değerini değiştirme
    $("#nameInput").val("Yeni değer");
</script>
```

## 2. CSS Manipülasyonu

Elementlerin stil özelliklerini dinamik olarak değiştirmek için kullanılır.

### Metodlar:
- **css()**: CSS özelliklerini alır veya ayarlar
- **width()**: Genişlik değerini alır veya ayarlar
- **height()**: Yükseklik değerini alır veya ayarlar

### Örnek Kod:
```javascript
// Tek özellik değiştirme
$("#element").css("color", "red");

// Çoklu özellik değiştirme
$("#element").css({
    "color": "red",
    "background-color": "#f0f0f0",
    "font-size": "16px"
});
```

## 3. Element Ekleme

DOM'a yeni elementler eklemek için kullanılan metodlar.

### Metodlar:
- **append()**: Elementin içine, sonuna ekler
- **prepend()**: Elementin içine, başına ekler
- **after()**: Elementin dışına, sonrasına ekler
- **before()**: Elementin dışına, öncesine ekler

### Örnek Kod:
```javascript
// Sona element ekleme
$("#container").append("<p>Yeni paragraf</p>");

// Başa element ekleme
$("#container").prepend("<h2>Yeni başlık</h2>");

// Elemandan sonraya ekleme
$("#element").after("<div>Sonraki element</div>");

// Elemandan önceye ekleme
$("#element").before("<div>Önceki element</div>");
```

## 4. Element Silme

DOM'dan element kaldırmak için kullanılan metodlar.

### Metodlar:
- **remove()**: Elementi tamamen siler
- **empty()**: Elementin içeriğini temizler
- **detach()**: Elementi siler ama verilerini saklar

### Örnek Kod:
```javascript
// Elementi tamamen silme
$("#element").remove();

// Element içeriğini temizleme
$("#container").empty();

// Elementi geçici olarak kaldırma
var detached = $("#element").detach();
// Daha sonra geri eklenebilir
$("#container").append(detached);
```

## 5. Sınıf Manipülasyonu

Elementlerin CSS sınıflarını yönetmek için kullanılan metodlar.

### Metodlar:
- **addClass()**: Sınıf ekler
- **removeClass()**: Sınıf kaldırır
- **toggleClass()**: Sınıfı ekler/kaldırır
- **hasClass()**: Sınıf varlığını kontrol eder

### Örnek Kod:
```javascript
// Sınıf ekleme
$("#element").addClass("highlight");

// Sınıf kaldırma
$("#element").removeClass("highlight");

// Sınıf açma/kapama
$("#element").toggleClass("active");

// Sınıf kontrolü
if ($("#element").hasClass("active")) {
    console.log("Element aktif!");
}
```

## 6. Özellik Manipülasyonu

HTML elementlerinin özelliklerini (attributes) yönetmek için kullanılan metodlar.

### Metodlar:
- **attr()**: Özellik değerini alır veya ayarlar
- **removeAttr()**: Özelliği kaldırır
- **prop()**: Boolean özellikleri için kullanılır

### Örnek Kod:
```javascript
// Özellik değeri alma
var src = $("#image").attr("src");

// Özellik değeri ayarlama
$("#link").attr("href", "https://example.com");

// Özellik kaldırma
$("#element").removeAttr("title");

// Boolean özellik kontrolü
$("#checkbox").prop("checked", true);
```

## Proje Yapısı

```
08 JQuery DOM Manipulation/
├── 01 Content/
│   ├── Css/
│   │   └── Style.css
│   ├── Js/
│   │   └── App.js
│   └── Index.html
├── 02 CSS/
│   ├── Css/
│   │   └── Style.css
│   ├── Js/
│   │   └── App.js
│   └── Index.html
└── [Diğer manipülasyon klasörleri...]
```

## Nasıl Çalıştırılır?

1. Projeyi local bir web sunucusunda çalıştırın
2. Her bir manipülasyon türü için ilgili klasördeki `Index.html` dosyasını açın
3. Örnekleri interaktif olarak test edin
4. Kod önizleme bölümlerinden jQuery kodlarını inceleyin

## Gereksinimler

- jQuery 3.6.0 veya üzeri
- Modern bir web tarayıcısı (Chrome, Firefox, Safari, Edge)
- Temel HTML, CSS ve JavaScript bilgisi

## Önemli Notlar

- Her örnek bağımsız olarak çalışır
- Tüm örnekler gerçek dünya senaryolarına uygun tasarlanmıştır
- Kod önizleme bölümleri ile öğrenme kolaylaştırılmıştır
- Her örnek için açıklayıcı yorumlar eklenmiştir

## Tarayıcı Desteği

- Chrome (önerilen)
- Firefox
- Safari
- Edge
- Opera

Bu dokümantasyon ve örnekler sayesinde jQuery ile DOM manipülasyonunu kolayca öğrenebilir ve kendi projelerinizde uygulayabilirsiniz.