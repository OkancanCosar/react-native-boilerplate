#!/bin/bash
KAYNAK="src/lib/src"
SOURCE="src"

## network and endpoints waiting

#### Kaynak dosyalar için değişkenleştirilmiş dosya yolları
SOURCE_ACTION_FILE_PATH="${KAYNAK}/17174" #
SOURCE_REDUCER_FILE_PATH="${KAYNAK}/17175" #
SOURCE_INDEX_FILE_PATH="${KAYNAK}/12479"
SOURCE_STYLE_FILE_PATH="${KAYNAK}/12478"
SOURCE_HEADER_FILE_PATH="${KAYNAK}/3332"
SOURCE_COMPINDEX_FILE_PATH="${KAYNAK}/3333"
SOURCE_LISTITEM_FILE_PATH="${KAYNAK}/3334"

#### Proje dosyaları için değişkenleştirilmiş dosya yolları
ACTIONS_PATH="${SOURCE}/redux/actions"
REDUCERS_PATH="${SOURCE}/redux/reducers"
SCREEN_PATH="${SOURCE}/components/screens"

#### Dosyalardaki değişecek text
CHANGE_TEXT="TEMPNAME"

#### action dosyası kopyalandı.
cp "${SOURCE_ACTION_FILE_PATH}" "${ACTIONS_PATH}/"
#### ismi değiştirildi
mv "${ACTIONS_PATH}/17174" "${ACTIONS_PATH}/A_${1}.js"

#### reducer dosyası kopyalandı.
cp "${SOURCE_REDUCER_FILE_PATH}" "${REDUCERS_PATH}/"
#### ismi değiştirildi
mv "${REDUCERS_PATH}/17175" "${REDUCERS_PATH}/R_${1}.js"

#### dosya düzeltmesi yapıldı
sed -i "s/${CHANGE_TEXT}/${1}/" "${REDUCERS_PATH}/R_${1}.js"
sed -i "s/${CHANGE_TEXT}/${1}/" "${ACTIONS_PATH}/R_${1}.js"

#### ekran dosyaları için klasörü oluştur.
mkdir "${SCREEN_PATH}/S_${1}"
#### ekran dosyalarını kopyala ve ismini değiştir.
cp "${SOURCE_INDEX_FILE_PATH}" "${SCREEN_PATH}/S_${1}"
mv "${SCREEN_PATH}/S_${1}/12479" "${SCREEN_PATH}/S_${1}/index.js"  
cp "${SOURCE_STYLE_FILE_PATH}" "${SCREEN_PATH}/S_${1}"
mv "${SCREEN_PATH}/S_${1}/12478" "${SCREEN_PATH}/S_${1}/style.js"  
#### düzeltmeler yapıldı
sed -i "s/${CHANGE_TEXT}/${1}/" "${SCREEN_PATH}/S_${1}/index.js" 


#### Reducer indexindeki importlar halledildi.
sed -i "s/${T1}/import R_${1} from \".\/R_${1}\";\n${T1}/" "${REDUCERS_PATH}/index.js"
sed -i "s/${T2}/R_${1},\n  ${T2}/" "${REDUCERS_PATH}/index.js"

#### src/indexindeki ekran importlar halledildi.
sed -i "s/${T3}/import S_${1} from \".\/components\/screens\/S_${1}\";\n${T3}/" "${SOURCE}/index.js"
sed -i "s/${T4}/${1}: {\n      screen: S_${1},\n    },\n    ${T4}/" "${SOURCE}/index.js"

#### componentler için header index ve listitem eklenecek.
mkdir "${SCREEN_PATH}/S_${1}/components"
#### dosyaları kopyala ve ismini değiştir.
cp "${SOURCE_HEADER_FILE_PATH}" "${SCREEN_PATH}/S_${1}/components"
mv "${SCREEN_PATH}/S_${1}/components/3332" "${SCREEN_PATH}/S_${1}/components/Header.js" 
cp "${SOURCE_COMPINDEX_FILE_PATH}" "${SCREEN_PATH}/S_${1}/components"
mv "${SCREEN_PATH}/S_${1}/components/3333" "${SCREEN_PATH}/S_${1}/components/index.js" 
cp "${SOURCE_LISTITEM_FILE_PATH}" "${SCREEN_PATH}/S_${1}/components"
mv "${SCREEN_PATH}/S_${1}/components/3334" "${SCREEN_PATH}/S_${1}/components/ListItem.js" 
#### düzeltmeler yapıldı
sed -i "s/${CHANGE_TEXT}/${1}/" "${SCREEN_PATH}/S_${1}/components/Header.js" 