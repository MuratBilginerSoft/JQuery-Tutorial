# jQuery UI

jQuery UI, jQuery'nin üzerine inşa edilmiş bir kullanıcı arabirimi (UI) kütüphanesidir ve web uygulamalarına dinamik ve interaktif özellikler eklemek için kullanılır. Bu kütüphane, jQuery'nin gücünü artıran bir dizi hazır bileşen, efekt, tema ve araç içerir.

## 1. jQuery UI'nin Özellikleri

### a. Bileşenler (Widgets)

Kütüphane, önceden hazırlanmış kullanıcı arabirimi bileşenleri içerir:

- **Accordion**: Katlanabilir içerik bölümleri
- **Autocomplete**: Kullanıcı yazarken öneriler sunan bir metin girişi
- **Datepicker**: Tarih seçimi için bir takvim bileşeni
- **Dialog**: Açılır pencereler
- **Progressbar**: İlerleme çubuğu
- **Slider**: Kayan seçim aracı
- **Tabs**: Sekmelerle organize edilmiş içerik

### b. Etkileşimler (Interactions)

Kullanıcıların sayfa üzerindeki öğelerle daha dinamik şekilde etkileşim kurmasını sağlar:

- **Draggable**: Öğeleri sürükleme
- **Droppable**: Öğeleri bırakılabilir alanlara yerleştirme
- **Resizable**: Öğelerin boyutlarını yeniden boyutlandırma
- **Selectable**: Çoklu öğeleri seçme
- **Sortable**: Öğeleri sıralama

### c. Efektler (Effects)

jQuery UI, öğeler üzerinde uygulanabilecek hazır efektler sağlar:

- **fadeIn/fadeOut**: Görünürlük efektleri
- **slide**: Kaydırma efektleri
- **bounce**: Zıplama efekti
- **explode**: Patlama efekti

### d. Temalar (Themes)

jQuery UI, ThemeRoller adlı bir araç ile temaların özelleştirilmesini sağlar. Bu sayede, web sitenizin görünümünü ve hissini kolayca değiştirebilirsiniz.

## 2. jQuery UI Kullanım Adımları

### a. jQuery UI Kütüphanesini Ekleme

jQuery UI'yi kullanmak için projeye hem jQuery hem de jQuery UI dosyalarını eklemeniz gerekir:

```html
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- jQuery UI -->
<link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>
```

### b. Temel Kullanım Örneği

Bir tarih seçici (datepicker) eklemek için:

```html
<input type="text" id="datepicker">

<script>
  $(function() {
    $("#datepicker").datepicker();
  });
</script>
```

### c. Özelleştirme

jQuery UI bileşenlerini özelleştirmek için, seçenekler nesnesi kullanılır:

```html
<input type="text" id="datepicker">

<script>
  $(function() {
    $("#datepicker").datepicker({
      dateFormat: "dd-mm-yy", // Tarih formatı
      showAnim: "slideDown"  // Animasyon efekti
    });
  });
</script>
```

## 3. Avantajlar

- ✅ Zengin özelliklere sahip bileşenler ve etkileşimler
- ✅ Platformlar arası uyumluluk
- ✅ Tema desteği ile özelleştirilebilir görünüm
- ✅ Kullanımı kolay ve hızlı prototipleme için ideal

## 4. Dezavantajlar

- ⚠️ jQuery UI biraz eski bir teknoloji olduğundan modern framework'lere göre daha ağır olabilir
- ⚠️ Performans sorunları yaşanabilir, özellikle büyük uygulamalarda

## 5. Örnek Uygulamalar

Bu dizinde aşağıdaki jQuery UI örneklerini bulabilirsiniz:

1. **Widgets** - Temel bileşen örnekleri
   - Accordion
   - Datepicker
   - Dialog
   - Tabs

2. **Interactions** - Etkileşim örnekleri
   - Draggable
   - Droppable
   - Sortable

3. **Effects** - Efekt örnekleri
   - Fade
   - Slide
   - Bounce

Her örnek kendi klasöründe bulunur ve şunları içerir:
- HTML dosyası
- CSS dosyası (özel stiller için)
- JavaScript dosyası (jQuery UI kodları)

## 6. Başlarken

1. Örnek projeyi klonlayın veya indirin
2. İlgili örnek klasörüne gidin
3. `index.html` dosyasını bir web tarayıcısında açın
4. Kaynak kodları inceleyerek jQuery UI'nin nasıl kullanıldığını öğrenin

## 7. Kaynaklar

- [jQuery UI Resmi Websitesi](https://jqueryui.com/)
- [API Dokümantasyonu](https://api.jqueryui.com/)
- [ThemeRoller](https://jqueryui.com/themeroller/)