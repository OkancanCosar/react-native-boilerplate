#!/bin/bash
KAYNAK="src/lib/src"
SOURCE="src"

#### Kaynak dosyalar için değişkenleştirilmiş dosya yolları
SOURCE_INDEX_FILE_PATH="${KAYNAK}/443566"
SOURCE_STYLE_FILE_PATH="${KAYNAK}/28767"

#### Proje dosyaları için değişkenleştirilmiş dosya yolları
SCREEN_PATH="${SOURCE}/components/common"

#### Dosyalardaki değişecek text
CHANGE_TEXT="TEMPNAME"

#### ekran dosyaları için klasörü oluştur.
mkdir "${SCREEN_PATH}/${1}"

#### ekran dosyalarını kopyala ve ismini değiştir.
cp "${SOURCE_INDEX_FILE_PATH}" "${SCREEN_PATH}/${1}"
mv "${SCREEN_PATH}/${1}/443566" "${SCREEN_PATH}/${1}/index.js"  
cp "${SOURCE_STYLE_FILE_PATH}" "${SCREEN_PATH}/${1}"
mv "${SCREEN_PATH}/${1}/28767" "${SCREEN_PATH}/${1}/style.js"  
#### düzeltmeler yapıldı
sed -i "s/${CHANGE_TEXT}/${1}/" "${SCREEN_PATH}/${1}/index.js" 

#### common/index.js'den exportlandı.
echo "export * from \"./${1}\";" >> "${SCREEN_PATH}/index.js"
