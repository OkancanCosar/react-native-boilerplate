## react-native / react-navigation / redux Boilerplate
```
  1- react-native 
  2- react-navigation
  3- redux 
    temelleri üzerine kurulmuş,
    1- Ui Pack içeren(react-native-elements)
    2- Çoklu dili destekleyen(react-native-localization)
    3- Icon Pack içeren(react-native-vector-icons)
    4- Lottie animasyonlarını destekleyen
    5- Cihaz internet bağlantısını ve yatay mı dikey mi tutulduğunu store'da saklayan
    6- Özelleştirilmiş font tiplerini kullanabilen
    7- Örnek listesinde
      1- Sayfalama
      2- Sonsuz kaydırma(Infinite Scroll)
      3- Yenileme(Refresh Layout) olan bir boilerplate'dir.

  Verilen code snippets [link: okancancosar.code-snippets] ile belirli kısayollar kullanılabilir.
    [[Bu snippets'ı kullanmak için dosyayı
      home/YOURUSERNAME/.config/Code/User/snippets/okancancosar.code-snippets
    dizinine atmalıyız.]]
```

## KURULUM

### Adım 1: Npm paketlerinin kurulumu
```console
$ yarn add redux-thunk redux-logger redux react-redux react-navigation-stack react-navigation react-native-gesture-handler lottie-react-native react-native-elements react-native-vector-icons @react-native-community/netinfo react-native-localization react-native-largelist-v3 react-native-spring-scrollview
```
Bazen paketler doğru şekilde linklenmeyebilir. O zaman aşağıdaki gibi linkleme gerekebilir.
```console
$ react-native link react-native-vector-icons
$ react-native link lottie-react-native
```

### Adım 2: /index.js dosyasını değiştir 
```jsx
	import App from "./App";
```
```jsx
	import App from "./src";
```


### Adım 3: Dosyaları kopyala
```jsx
  /scripts
  /src
  /react-native-config.js
```
ve linkle
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
    "createScreen": "chmod +x ./src/lib/bashs/cs.sh && ./src/lib/bashs/cs.sh ${name}",
    "createComponent": "chmod +x ./src/lib/bashs/cc.sh && ./src/lib/bashs/cc.sh ${name}",
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
$ npm run android
```

### Projeye yeni bir ekran eklemek için dosyalarını oluşturma
```console
$ name=ExampleScreenName npm run createScreen
```

### Projeye liste içeren bir ekran eklemek için 
```console
$ yarn createListScreen ExampleListScreenName
```

### Projeye yeni bir ortak kullanılan component eklemek için dosyalarını oluşturma
```console
$ name=HeaderLeft npm run createComponent
```

### Projenin release bir apk'sini oluşturma
```console
$ npm run release
```

### react-native debug menüsünün açma
Bu işlem gerçek cihazlarda; cihazı titreterek de olur. Emülatörlerde CTRL+M kullanılabilir.
```console
$ npm run shake
```

### Snippet'ların kullanımı
  1- Verilen prefix'i yazdıktan sonra TAB tuşunu kullanmak
  2- Verilen prefix'i yazdıktan sonra CTRL+SPACE kombinasyonunu kullanmak


## ROADMAP
  1- Realm ekleyerek offline first bir yapı kurmak
  2- Tema ile gece/gündüz farklı görüntü elde etmek
  3- Listeler için searchbar eklemek