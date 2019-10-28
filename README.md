## react-native / react-navigation / redux Boilerplate
```
  1- react-native 
  2- react-navigation
  3- redux 
    bileşenlerini içeren temel bir sayfa oluşturan bir taslak oluşturur.

  1- createScreen
  2- createComponent
    gibi scriptler eklenilerek klasör mimarisine uygun dosyalar oluşturulur.

  Verilen code snippets [link: okancancosar.code-snippets] ile belirli kısayollar kullanılabilir.
    Bu snippets'ı kullanmak için dosyayı
      home/YOURUSERNAME/.config/Code/User/snippets/okancancosar.code-snippets
    dizinine atmalıyız.
```

## KURULUM

### Adım 1: Npm paketlerinin kurulumu
```console
$ yarn add redux-thunk redux-logger redux react-redux react-navigation-stack react-navigation react-native-gesture-handler redux-api-middleware
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
	/src
```

### Adım 4: Ekle package.json > scripts
```json
{
  ....
  "scripts": {
    ...
  	"release": "react-native run-android --variant=release",
    "release-apk": "./gradlew bundleRelease",
    "createScreen": "chmod +x ./src/lib/bashs/cs.sh && ./src/lib/bashs/cs.sh ${name}",
    "createComponent": "chmod +x ./src/lib/bashs/cc.sh && ./src/lib/bashs/cc.sh ${name}"
	  ...
  },
  ....
}
```


## KULLANIM

### Projeye yeni bir ekran eklemek için dosyalarını oluşturma
```console
$ name=ExampleScreenName npm run createScreen
```

### Projeye yeni bir ortak kullanılan component eklemek için dosyalarını oluşturma
```console
$ name=HeaderLeft npm run createComponent
```

### Snippet'ların kullanımı
  1- Verilen prefix'i yazdıktan sonra TAB tuşunu kullanmak
  2- Verilen prefix'i yazdıktan sonra CTRL+SPACE kombinasyonunu kullanmak


## ROADMAP
  1- Realm ekleyerek offline first bir yapı kurmak
