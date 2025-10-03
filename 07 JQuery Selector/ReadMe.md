# jQuery Seçiciler (Selectors)

jQuery ile element seçiciler (selectors), HTML belgesindeki öğeleri (elements) seçmek için kullanılır. Bu seçiciler, öğelere kolayca erişim sağlamak ve üzerinde işlemler yapmak için kullanılır. jQuery, CSS seçicilerine dayalı güçlü bir seçim sistemi sağlar ve bu sayede öğelere hızlıca ulaşabilirsiniz.

İşte jQuery ile kullanabileceğiniz bazı temel element seçiciler:

## 1. ID Seçicisi (#id)
Bir öğeyi ID'sine göre seçmek için kullanılır. ID her sayfada benzersiz olmalıdır.

```javascript
$('#elementId')  // ID'si 'elementId' olan öğeyi seçer
```

## 2. Class Seçicisi (.class)
Bir öğeyi sınıfına (class) göre seçmek için kullanılır. Aynı sınıfa sahip birden fazla öğe olabilir.

```javascript
$('.className')  // 'className' sınıfına sahip öğeleri seçer
```

## 3. Element Seçicisi (tag)

Bir öğeyi HTML etiketine göre seçmek için kullanılır. Örneğin, tüm ```<div>, <p>, <a>``` etiketlerini seçebilirsiniz.

```javascript
$('div')  // Tüm <div> öğelerini seçer
$('p')    // Tüm <p> öğelerini seçer
```

## 4. Özellik Seçicisi ([attribute])
Bir öğeyi belirli bir HTML özelliğine (attribute) göre seçmek için kullanılır.

```javascript
$('input[type="text"]')  // type özelliği 'text' olan <input> öğelerini seçer
```

## 5. Çocuk Seçicisi (> ve :nth-child())
Bir öğenin belirli bir çocuk öğesini seçmek için kullanılır.

```javascript
$('ul > li')  // <ul> öğesinin doğrudan altındaki <li> öğelerini seçer
$('div p:nth-child(2)')  // <div> öğesinin ikinci çocuk <p> öğesini seçer
```

## 6. Ebeveyn Seçicisi (parent())
Bir öğenin ebeveynini seçmek için parent() fonksiyonunu kullanabilirsiniz.

```javascript
$('#elementId').parent()  // ID'si 'elementId' olan öğenin ebeveynini seçer
```

## 7. İçerik Seçicisi (:contains())
Bir öğeyi, içinde belirli bir metin içeren öğeleri seçmek için kullanılır.

```javascript
$('p:contains("Merhaba")')  // 'Merhaba' kelimesini içeren tüm <p> öğelerini seçer
```

## 8. Gelişmiş Seçiciler
jQuery, CSS'ye dayalı daha gelişmiş seçiciler sağlar:

```javascript
$('li:first')   // İlk <li> öğesini seçer
$('li:last')    // Son <li> öğesini seçer
$('li:even')    // Çift numaralı <li> öğelerini seçer
$('li:odd')     // Tek numaralı <li> öğelerini seçer
```

## 9. Zincirleme Seçiciler
jQuery'de birden fazla seçici kullanarak öğeleri birleştirebilirsiniz.

```javascript
$('#elementId, .className')  // Hem 'elementId' ID'sine sahip öğeyi hem de 'className' sınıfına sahip öğeleri seçer
```

## jQuery Selectors Kullanımı ve Test Edilmesi

jQuery seçicileri, web sayfanızdaki HTML elementlerini seçmek ve manipüle etmek için kullanılan güçlü araçlardır. Bu bölümde farklı seçici türlerini interaktif örneklerle öğrenebilirsiniz.

### Seçici Türleri ve Örnekler

1. **Tag Selectors (Etiket Seçicileri)**
   - Dosya: `/01 Tag/Index.html`
   - Özellikler:
     - Paragraf seçme
     - Başlık seçme
     - Liste öğelerini seçme
   - Test: Farklı butonlara tıklayarak etiket bazlı seçimleri gözlemleyin

2. **ID Selectors (ID Seçicileri)**
   - Dosya: `/02 Id/Index.html`
   - Özellikler:
     - Tekil element seçme
     - ID bazlı stil değiştirme
     - Çoklu özellik değiştirme
   - Test: ID'si olan elementleri seçip stillerini değiştirin

3. **Class Selectors (Sınıf Seçicileri)**
   - Dosya: `/03 Class/Index.html`
   - Özellikler:
     - Tekil class seçme
     - Çoklu class seçme
     - Önemli notları vurgulama
   - Test: Class'a sahip elementleri seçip görünümlerini değiştirin

4. **Attribute Selectors (Özellik Seçicileri)**
   - Dosya: `/04 Attribute/Index.html`
   - Özellikler:
     - Data özelliklerine göre seçme
     - Harici linkleri seçme
     - Özel kodları seçme
   - Test: Farklı özelliklere sahip elementleri filtreleme ve seçme

5. **Child Selectors (Alt Eleman Seçicileri)**
   - Dosya: `/05 Child/Index.html`
   - Özellikler:
     - Direkt alt elemanları seçme
     - İlk/son alt elemanı seçme
     - N'inci alt elemanı seçme
   - Test: İç içe elementler arasında gezinerek seçimler yapın

### Nasıl Test Edilir?

1. **Kurulum**
   - Projeyi local bir web sunucusunda çalıştırın
   - Ana dizindeki `index.html` dosyasını açın
   - "jQuery Selectors" bölümüne gidin

2. **Test Adımları**
   - Her bir seçici sayfasını ayrı ayrı açın
   - Sayfadaki örnek butonlarına tıklayın
   - Seçilen elementlerdeki değişiklikleri gözlemleyin
   - Kod önizleme bölümlerinden jQuery kodlarını inceleyin

3. **Özellikler**
   - Modern ve responsive tasarım
   - Animasyonlu geçişler
   - Temizle butonları ile sıfırlama
   - Kod önizleme bölümleri
   - Font Awesome ikonları

4. **Dosya Yapısı**
   ```
   07 JQuery Selector/
   ├── 00 Selectors/
   │   ├── Css/
   │   │   ├── Style.css
   │   │   └── Common.css
   │   ├── index.html
   ├── 01 Tag/
   │   ├── Css/
   │   │   └── Style.css
   │   ├── Js/
   │   │   └── App.js
   │   └── Index.html
   ├── 02 Id/
   │   ├── Css/
   │   │   └── Style.css
   │   ├── Js/
   │   │   └── App.js
   │   └── Index.html
   └── [Diğer seçici klasörleri...]
   ```

### Önemli Notlar

- Her seçici sayfası bağımsız olarak çalışır
- Common.css tüm sayfalarda ortak kullanılan stilleri içerir
- Her sayfanın kendi Style.css ve App.js dosyası vardır
- Tüm örnekler jQuery 3.6.0 sürümü ile test edilmiştir
- Font Awesome 6.0.0 ikonları kullanılmıştır

### Tarayıcı Desteği

- Chrome (önerilen)
- Firefox
- Safari
- Edge
- Opera

Bu interaktif örnekler sayesinde jQuery seçicilerini pratik yaparak öğrenebilirsiniz. Her bir örnek, gerçek dünya senaryolarına uygun olarak tasarlanmıştır.