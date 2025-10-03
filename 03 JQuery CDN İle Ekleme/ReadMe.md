# jQuery CDN (İçerik Dağıtım Ağı)

jQuery'nin dosyalarını bir web sayfasında kullanmak için jQuery CDN üzerinden doğrudan referans verebilirsiniz. **Subresource Integrity (SRI)** desteği sayesinde tarayıcı, indirilen dosyaların değiştirilip değiştirilmediğini doğrulayabilir.

## Popüler jQuery CDN Sağlayıcıları

1. **Google CDN**
   ```html
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
   ```

2. **Microsoft CDN**
   ```html
   <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.7.1.min.js"></script>
   ```

3. **CDNJS CDN**
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
   ```

4. **jsDelivr CDN**
   ```html
   <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
   ```

## CDN Kullanmanın Avantajları

1. **Hız**: CDN sunucuları dünya genelinde dağıtılmıştır, bu sayede kullanıcılar kendilerine en yakın sunucudan dosyaları indirebilir.
2. **Önbellek**: Popüler CDN'lerden yüklenen jQuery dosyaları tarayıcı önbelleğinde saklanır.
3. **Güvenilirlik**: Büyük şirketler tarafından yönetilen CDN'ler yüksek uptime ve güvenilirlik sunar.
4. **Bakım**: CDN'ler otomatik olarak güncellenir ve bakımı yapılır.

## Örnek Kullanım

```html
<!DOCTYPE html>
<html>
<head>
    <title>jQuery CDN Örneği</title>
    <!-- jQuery CDN -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body>
    <!-- Sayfa içeriği -->
    <script>
        $(document).ready(function() {
            // jQuery kodları buraya
        });
    </script>
</body>
</html>
```

## Not

- Her zaman projenize uygun jQuery sürümünü seçin
- Mümkünse minify edilmiş (.min.js) versiyonu kullanın
- Güvenlik için SRI hash değerlerini kullanmayı düşünün
- Yedek olarak local bir jQuery dosyası bulundurmayı unutmayın