# jQuery'yi NPM veya Yarn ile Kurma

jQuery'yi modern paket yöneticileri kullanarak projenize ekleyebilirsiniz. Bu yöntem, özellikle modern web uygulamaları ve framework'ler ile çalışırken tercih edilir.

## NPM ile Kurulum

NPM (Node Package Manager) kullanarak jQuery'yi kurmak için:

```bash
npm install jquery
```

## Yarn ile Kurulum

Yarn paket yöneticisi kullanarak jQuery'yi kurmak için:

```bash
yarn add jquery
```

## Kurulum Sonrası

Kurulum tamamlandığında:

1. jQuery dosyaları `node_modules/jquery/dist/` dizininde yer alır
2. Bu dizinde şu dosyaları bulabilirsiniz:
   - `jquery.js` (Sıkıştırılmamış versiyon)
   - `jquery.min.js` (Sıkıştırılmış versiyon)
   - `jquery.min.map` (Source map dosyası)

## JavaScript'te Import Etme

Modern JavaScript projelerinde jQuery'yi import etmek için:

```javascript
// ES6 modül sistemi ile
import $ from 'jquery';

// CommonJS ile
const $ = require('jquery');
```

## package.json'da Görünüm

Kurulum sonrası `package.json` dosyanızda şöyle bir satır eklenir:

```json
{
  "dependencies": {
    "jquery": "^3.7.1"
  }
}
```

## Webpack/Rollup gibi Bundler'lar ile Kullanım

Modern build araçları ile jQuery'yi projenize dahil etmek için:

```javascript
// webpack.config.js
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
```

## Önemli Notlar

1. **Versiyon Kontrolü**
   - Semantic versioning kullanılır
   - Major.Minor.Patch formatında (örn: 3.7.1)
   - `^` işareti minor ve patch güncellemelerine izin verir

2. **Güvenlik**
   - Her zaman güvenilir kaynaklardan yükleme yapın
   - package-lock.json veya yarn.lock dosyalarını version control'e ekleyin
   - Düzenli olarak güvenlik güncellemelerini kontrol edin

3. **Performans**
   - Sadece ihtiyacınız olan modülleri import edin
   - Production build'lerinde sıkıştırılmış versiyonu kullanın
   - Tree shaking için modern bundler'lar kullanın