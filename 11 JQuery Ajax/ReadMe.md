# jQuery AJAX

jQuery AJAX, web uygulamalarında sayfa yenilemesi olmadan veri alışverişi yapmak için kullanılan güçlü bir özelliktir. Bu bölümde, jQuery AJAX'ın temel kullanımını ve özelliklerini öğreneceksiniz.

## İçerik

1. **Temel AJAX İşlemleri**
   - $.ajax() metodunun temel kullanımı
   - GET ve POST istekleri
   - Veri türleri ve format
   - Başarı ve hata yönetimi

2. **Kısa Yöntemler**
   - $.get() metodu
   - $.post() metodu
   - $.getJSON() metodu
   - Callback fonksiyonları

3. **Form İşlemleri**
   - Form verilerini gönderme
   - FormData kullanımı
   - Form validasyonu
   - Dosya yükleme

4. **İleri Düzey Özellikler**
   - beforeSend ve complete
   - Timeout ayarları
   - Cache kontrolü
   - Cross-Origin istekleri (CORS)

5. **Promise ve Deferred**
   - Promise tabanlı AJAX
   - Deferred nesneleri
   - Zincir işlemler
   - Paralel istekler

6. **Hata Yönetimi**
   - Error handling
   - HTTP durum kodları
   - Global AJAX olayları
   - Özel hata mesajları

## Önemli Notlar

- AJAX istekleri asenkrondur, yani sayfa yenilemesi gerektirmez.
- Güvenlik için CORS politikalarına dikkat edilmelidir.
- Büyük veri transferlerinde progress eventi kullanılabilir.
- Cache mekanizması performans için önemlidir.

## Örnekler

Her bölüm için detaylı örnekler ve açıklamalar ilgili klasörlerde bulunmaktadır:

- `/00 Ajax` - Genel bakış ve ana sayfa
- `/01 Basic Ajax` - Temel AJAX işlemleri
- `/02 Short Methods` - Kısa yöntemler
- `/03 Form Operations` - Form işlemleri
- `/04 Advanced Features` - İleri düzey özellikler
- `/05 Promise Deferred` - Promise ve Deferred
- `/06 Error Handling` - Hata yönetimi

## Kaynaklar

- [jQuery API Documentation - Ajax](https://api.jquery.com/category/ajax/)
- [jQuery Learning Center - Ajax](https://learn.jquery.com/ajax/)
- [MDN Web Docs - AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)

## Güvenlik Notları

1. **Cross-Site Scripting (XSS)**
   - Gelen verileri her zaman doğrulayın ve temizleyin
   - HTML içeriği eklerken .text() kullanmayı tercih edin

2. **CSRF Koruması**
   - Form işlemlerinde CSRF token kullanın
   - Hassas işlemlerde ek doğrulama yapın

3. **Veri Güvenliği**
   - Hassas verileri HTTPS üzerinden gönderin
   - API anahtarlarını client tarafında saklamaktan kaçının

## En İyi Uygulamalar

1. **Performans**
   - Gereksiz AJAX isteklerinden kaçının
   - Verileri cache'leyin
   - İstekleri gruplandırın

2. **Kullanıcı Deneyimi**
   - Yükleme göstergeleri kullanın
   - Hata mesajlarını kullanıcı dostu yapın
   - İşlem durumunu gösterin

3. **Kod Organizasyonu**
   - AJAX çağrılarını modüler tutun
   - Promise tabanlı yaklaşımı tercih edin
   - Global ayarları tek bir yerde yapın