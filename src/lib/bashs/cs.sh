#!/bin/bash
KAYNAK="src/lib/src"
SOURCE="src"

#### Kaynak dosyalar için değişkenleştirilmiş dosya yolları
SOURCE_ACTION_FILE_PATH="${KAYNAK}/0987654"
SOURCE_REDUCER_FILE_PATH="${KAYNAK}/45678"
SOURCE_INDEX_FILE_PATH="${KAYNAK}/4467679"
SOURCE_STYLE_FILE_PATH="${KAYNAK}/28767"

#### Proje dosyaları için değişkenleştirilmiş dosya yolları
ACTIONS_PATH="${SOURCE}/redux/actions"
REDUCERS_PATH="${SOURCE}/redux/reducers"
SCREEN_PATH="${SOURCE}/components/screens"

#### Dosyalardaki değişecek text
CHANGE_TEXT="TEMPNAME"
T1="\/\/...  add other reducer imports"
T2="\/\/... add reducer"
T3="\/\/...  add other screen imports"
T4="\/\/... add screens"

#### redux dosyası kopyalandı.
cp "${SOURCE_ACTION_FILE_PATH}" "${ACTIONS_PATH}/"

#### ismi değiştirildi
mv "${ACTIONS_PATH}/0987654" "${ACTIONS_PATH}/A_${1}.js"

#### reducer dosyası kopyalandı.
cp "${SOURCE_REDUCER_FILE_PATH}" "${REDUCERS_PATH}/"
#### ismi değiştirildi
mv "${REDUCERS_PATH}/45678" "${REDUCERS_PATH}/R_${1}.js"

#### düzeltmeler yapıldı
sed -i "s/${CHANGE_TEXT}/${1}/" "${REDUCERS_PATH}/R_${1}.js"

#### ekran dosyaları için klasörü oluştur.
mkdir "${SCREEN_PATH}/S_${1}"

#### ekran dosyalarını kopyala ve ismini değiştir.
cp "${SOURCE_INDEX_FILE_PATH}" "${SCREEN_PATH}/S_${1}"
mv "${SCREEN_PATH}/S_${1}/4467679" "${SCREEN_PATH}/S_${1}/index.js"  
cp "${SOURCE_STYLE_FILE_PATH}" "${SCREEN_PATH}/S_${1}"
mv "${SCREEN_PATH}/S_${1}/28767" "${SCREEN_PATH}/S_${1}/style.js"  
#### düzeltmeler yapıldı
sed -i "s/${CHANGE_TEXT}/${1}/" "${SCREEN_PATH}/S_${1}/index.js" 

#### Reducer indexindeki importlar halledildi.
sed -i "s/${T1}/import R_${1} from \".\/R_${1}\";\n${T1}/" "${REDUCERS_PATH}/index.js"
sed -i "s/${T2}/R_${1},\n  ${T2}/" "${REDUCERS_PATH}/index.js"

#### src/indexindeki ekran importlar halledildi.
sed -i "s/${T3}/import S_${1} from \".\/components\/screens\/S_${1}\";\n${T3}/" "${SOURCE}/index.js"
sed -i "s/${T4}/${1}: {\n      screen: S_${1},\n    },\n    ${T4}/" "${SOURCE}/index.js"

