# jQuery DOM Traversing

jQuery DOM Traversing, HTML belgesindeki elementler arasında gezinmeyi ve elementleri seçmeyi sağlayan güçlü bir özelliktir. Bu bölümde, jQuery'nin DOM traversing yöntemlerini detaylı olarak inceleyeceğiz.

## İçerik

1. [Temel Traversing](#temel-traversing)
2. [Ebeveyn Yöntemleri](#ebeveyn-yöntemleri)
3. [Çocuk Yöntemleri](#çocuk-yöntemleri)
4. [Kardeş Yöntemleri](#kardeş-yöntemleri)
5. [Filtreleme Yöntemleri](#filtreleme-yöntemleri)

## Temel Traversing

jQuery DOM Traversing, DOM ağacında yukarı, aşağı ve yatay yönde hareket etmenizi sağlar:

- **Yukarı Doğru**: parent, parents, parentsUntil
- **Aşağı Doğru**: children, find
- **Yatay**: siblings, next, nextAll, prev, prevAll

## Ebeveyn Yöntemleri

Bir elementin üst elementlerini seçmek için kullanılan yöntemler:

### parent()
```javascript
$("span").parent(); // <span> elementinin doğrudan üst elementini seçer
```

### parents()
```javascript
$("span").parents(); // <span> elementinin tüm üst elementlerini seçer
```

### parentsUntil()
```javascript
$("span").parentsUntil("div"); // <span>'dan <div>'e kadar olan üst elementleri seçer
```

## Çocuk Yöntemleri

Bir elementin alt elementlerini seçmek için kullanılan yöntemler:

### children()
```javascript
$("div").children(); // <div> elementinin tüm doğrudan çocuklarını seçer
```

### find()
```javascript
$("div").find("span"); // <div> içindeki tüm <span> elementlerini seçer
```

## Kardeş Yöntemleri

Aynı seviyedeki elementleri seçmek için kullanılan yöntemler:

### siblings()
```javascript
$("li.active").siblings(); // "active" sınıflı <li> elementinin tüm kardeşlerini seçer
```

### next() ve prev()
```javascript
$("li").next();  // Bir sonraki kardeş elementi seçer
$("li").prev();  // Bir önceki kardeş elementi seçer
```

### nextAll() ve prevAll()
```javascript
$("li").nextAll(); // Tüm sonraki kardeş elementleri seçer
$("li").prevAll(); // Tüm önceki kardeş elementleri seçer
```

## Filtreleme Yöntemleri

Seçilen elementleri filtrelemek için kullanılan yöntemler:

### filter()
```javascript
$("p").filter(".intro"); // "intro" sınıfına sahip <p> elementlerini seçer
```

### not()
```javascript
$("p").not(".intro"); // "intro" sınıfına sahip olmayan <p> elementlerini seçer
```

### first() ve last()
```javascript
$("p").first(); // İlk <p> elementini seçer
$("p").last();  // Son <p> elementini seçer
```

### eq()
```javascript
$("li").eq(2); // 3. sıradaki <li> elementini seçer (index 0'dan başlar)
```

## Örnek Kullanım

```html
<div class="container">
  <ul>
    <li>Item 1</li>
    <li class="active">Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
</div>
```

```javascript
// Tüm kardeş elementleri seç
$("li.active").siblings().css("color", "red");

// İlk elementi seç
$("li").first().css("font-weight", "bold");

// Aktif elementten sonraki tüm kardeşleri seç
$("li.active").nextAll().css("background-color", "yellow");
```

## Önemli Notlar

1. Traversing yöntemleri zincirleme kullanılabilir
2. Performans için doğru yöntemi seçmek önemlidir
3. Kompleks seçiciler yerine traversing kullanmak daha etkilidir
4. DOM yapısı değişirse traversing sonuçları da değişebilir

## Best Practices

1. Mümkün olduğunca spesifik seçiciler kullanın
2. Gereksiz DOM traversing'den kaçının
3. Sık kullanılan elementleri değişkenlerde saklayın
4. Zincirleme işlemlerde performansı göz önünde bulundurun

## Daha Fazla Bilgi

Daha detaylı bilgi için jQuery'nin resmi dokümantasyonunu ziyaret edebilirsiniz:
[jQuery API Documentation](https://api.jquery.com/category/traversing/)