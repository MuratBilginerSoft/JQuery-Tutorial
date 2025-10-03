# jQuery 3.7.1 İndirme Seçenekleri

jQuery'nin son sürümü olan 3.7.1'i indirmek için çeşitli seçenekler sunulmaktadır. Her seçenek farklı kullanım senaryoları için optimize edilmiştir.

## Temel İndirme Seçenekleri

### 1. Sıkıştırılmış Versiyon (Production)
- **Dosya Adı**: `jquery-3.7.1.min.js`
- **Kullanım**: Canlı/üretim ortamında kullanılır
- **Avantajları**:
  - Daha küçük dosya boyutu
  - Daha hızlı yüklenme süresi
  - Bant genişliğinden tasarruf
- **Dezavantajları**:
  - Kod okunabilirliği düşük
  - Hata ayıklama zorluğu

### 2. Sıkıştırılmamış Versiyon (Development)
- **Dosya Adı**: `jquery-3.7.1.js`
- **Kullanım**: Geliştirme ortamında kullanılır
- **Avantajları**:
  - Yüksek kod okunabilirliği
  - Kolay hata ayıklama
  - Kod inceleme ve öğrenme kolaylığı
- **Dezavantajları**:
  - Büyük dosya boyutu
  - Daha yavaş yüklenme süresi

### 3. Source Map
- **Dosya Adı**: `jquery-3.7.1.min.map`
- **Kullanım**: Sıkıştırılmış versiyonla birlikte kullanılır
- **Avantajları**:
  - Sıkıştırılmış kodun hata ayıklamasını kolaylaştırır
  - Production ortamında orijinal kod satırlarını gösterir
- **Not**: Son kullanıcılar için gerekli değildir

## Slim Build (Hafif Sürüm)

jQuery'nin daha küçük bir versiyonu olan "slim build", bazı özellikleri çıkararak dosya boyutunu küçültür.

### Slim Build Özellikleri
- **Dosya Adı**: `jquery-3.7.1.slim.min.js`
- **Çıkarılan Özellikler**:
  - Ajax modülü
  - Efektler modülü
- **Avantajları**:
  - Daha küçük dosya boyutu
  - Temel jQuery işlevselliği korunur
- **Kullanım**: Ajax ve animasyon efektlerine ihtiyaç duymayan projeler için idealdir

## İndirme Bağlantıları

```html
<!-- Production Versiyon -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

<!-- Development Versiyon -->
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>

<!-- Slim Build (Production) -->
<script src="https://code.jquery.com/jquery-3.7.1.slim.min.js"></script>
```

## Öneriler

1. **Geliştirme Aşamasında**:
   - Sıkıştırılmamış versiyonu kullanın
   - Source map dosyasını ekleyin
   - Hata ayıklama araçlarını aktif tutun

2. **Üretim Ortamında**:
   - Sıkıştırılmış versiyonu kullanın
   - Gereksiz modülleri içermeyen slim build'i değerlendirin
   - Performans optimizasyonuna dikkat edin