## react-native / react-navigation / redux / realm Boilerplate

```
  1- react-native
  2- react-navigation
  3- redux
  4- realm
    temelleri üzerine kurulmuş,
    1- Ui Pack içeren(react-native-elements)
    2- Çoklu dili destekleyen(react-native-localization)
    3- Icon Pack içeren(react-native-vector-icons)
    4- Lottie animasyonlarını destekleyen
    5- Cihaz internet bağlantısını ve yatay mı dikey mi tutulduğunu store'da saklayan
    6- Özelleştirilmiş font tiplerini kullanabilen
    7- Offline database içeren
    8- Örnek listesinde
      1- Sayfalama
      2- Sonsuz kaydırma(Infinite Scroll)
      3- Yenileme(Refresh Layout) olan
      4- Listeyi veritabanına kaydedip, bağlantı olmadığında buradan kullanan bir boilerplate'dir

  Verilen code snippets [link: zalim.code-snippets] ile belirli kısayollar kullanılabilir.
    [[Bu snippets'ı kullanmak için dosyayı
      home/YOURUSERNAME/.config/Code/User/snippets/zalim.code-snippets
    dizinine atmalıyız.]]
```

## KURULUM

### Adım 1: Npm paketlerinin kurulumu

```console
$ yarn add redux realm redux-thunk redux-logger react-redux react-navigation react-navigation-stack react-native-gesture-handler lottie-react-native react-native-elements react-native-vector-icons @react-native-community/netinfo react-native-localization react-native-largelist-v3 react-native-spring-scrollview react-native-search-filter moment
```

Bazen paketler doğru şekilde linklenmeyebilir. O zaman aşağıdaki gibi linkleme gerekebilir.(Rn versiyonunuza göre { < 0.60 ise})

```console
$ react-native link PAKET_ADI
```

### Adım 2: /index.js dosyasını değiştir
```diff
- import App from "./App";
+ import App from "./src";
```

### Adım 3: Dosyaları kopyala

```jsx
  /scripts
  /src
  /react-native-config.js
```

ve assetleri linkle

```console
$ react-native link
```

### Adım 4: Ekle package.json > scripts

```json
{
  ....
  "scripts": {
    ...
    "postinstall": "node scripts/react-scrollview-fix.js",
    "start": "react-native start",
    "android": "cd android && ./gradlew clean && cd .. && react-native run-android",
    "release": "cd android && ./gradlew clean && cd .. && react-native run-android --variant=release",
    "createScreen": "chmod +x ./src/lib/bashs/cs.sh && ./src/lib/bashs/cs.sh",
    "createComponent": "chmod +x ./src/lib/bashs/cc.sh && ./src/lib/bashs/cc.sh",
    "createListScreen": "chmod +x ./src/lib/bashs/cls.sh && ./src/lib/bashs/cls.sh",
    "shake": "adb shell input keyevent 82"
    ...
  },
  ....
}
```

## KULLANIM

### react-native run-android yerine

```console
$ yarn android
```

### Projeye yeni bir ekran eklemek için dosyalarını oluşturma

```console
$ yarn createScreen ExampleScreenName
```

### Projeye liste içeren bir ekran eklemek için

```console
$ yarn createListScreen ExampleListScreenName
```
> Örnek: 

> 1. $ yarn createListScreen Photos
> 2. {{{{{ SYNCTIME'ı silmeden }}}}} id, title ....vb gerekli tüm db tablolarını ekle src/database/realm.js
> 3. src\config\EndPoints.js oluşan linki kontrol et.
> 4.	Aynı şekilde src\config\Network.js'deki istek yöntemini kontol et (POST, GET, Parametreler....)

### Projeye yeni bir ortak kullanılan component eklemek için dosyalarını oluşturma

```console
$ yarn createComponent HeaderLeft
```

### Projenin release bir apk'sini oluşturma

```console
$ yarn release
```

### react-native debug menüsünün açma

Bu işlem gerçek cihazlarda; cihazı titreterek de olur. Emülatörlerde CTRL+M kullanılabilir.

```console
$ yarn shake
```

### Snippet'ların kullanımı

1- Verilen prefix'i yazdıktan sonra TAB tuşunu kullanmak
2- Verilen prefix'i yazdıktan sonra CTRL+SPACE kombinasyonunu kullanmak

## TROUBLESHOOTING
> Windows işletim sistemi kullanıyorsanız; bash'inize bağlı olarak chmod komutunu tanımayabilir. Bu komut unix tabanlıdır. Eğer windows'da da kullanmak isterseniz 
1. Git'in windows uygulamasını yükleyin [Buradan...](https://git-scm.com/downloads)
2. Yükleme tamamlandıktan sonra proje dosyasının içine girip, boş alana sağ tıkladıktan sonra(Görünüm, Sıralama Ölçütü, Yenile...vb); Git Bash Here seçeneği gelecektir. Burada scriptleri unix sistemdeki gibi çalıştırabilirsiniz.

> Eğer Text input ile ilgili bir hata görüyorsanız; bu LongListview ile alakalı(react-native-largelist-v3) bu hata çözümü için:

```console
$ yarn postinstall
```

## ROADMAP

1- Gelişmiş tema opsiyonları ekleme
