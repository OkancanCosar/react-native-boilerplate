#!/bin/bash
KAYNAK="src/lib/src"
SOURCE="src"

#### Kaynak dosyalar için değişkenleştirilmiş dosya yolları
SOURCE_ACTION_FILE_PATH="${KAYNAK}/17174"
SOURCE_REDUCER_FILE_PATH="${KAYNAK}/17175"
SOURCE_INDEX_FILE_PATH="${KAYNAK}/12479"
SOURCE_STYLE_FILE_PATH="${KAYNAK}/12478"
SOURCE_HEADER_FILE_PATH="${KAYNAK}/3332"
SOURCE_COMPINDEX_FILE_PATH="${KAYNAK}/3333"
SOURCE_LISTITEM_FILE_PATH="${KAYNAK}/3334"
SOURCE_DB_FILE_PATH="${KAYNAK}/8614786"

#### Proje dosyaları için değişkenleştirilmiş dosya yolları
ACTIONS_PATH="${SOURCE}/redux/actions"
REDUCERS_PATH="${SOURCE}/redux/reducers"
SCREEN_PATH="${SOURCE}/components/screens"
CONFIG_PATH="${SOURCE}/config"
DB_PATH="${SOURCE}/database"

#### Dosyalardaki değişecek text
CHANGE_TEXT="TEMPNAME"
T1="\/\/...  add other reducer imports"
T2="\/\/... add reducer"
T3="\/\/...  add other screen imports"
T4="\/\/... add screens"
T5="\/\/ endpoints"
T6="\/\/... other created functions"
T61="\/\/... other functions"
T7="\/\/... other filter columns"
T8="\/\/... other sort columns"
T9="\/\*otherTables\*\/"
T10="\/\/... other scheme init"
T11="\/\/... add other scheme"

#### action dosyası kopyalandı.
cp "${SOURCE_ACTION_FILE_PATH}" "${ACTIONS_PATH}/"
#### ismi değiştirildi
mv "${ACTIONS_PATH}/17174" "${ACTIONS_PATH}/A_${1}.js"

#### reducer dosyası kopyalandı.
cp "${SOURCE_REDUCER_FILE_PATH}" "${REDUCERS_PATH}/"
#### ismi değiştirildi
mv "${REDUCERS_PATH}/17175" "${REDUCERS_PATH}/R_${1}.js"

#### db dosyası kopyalandı.
cp "${SOURCE_DB_FILE_PATH}" "${DB_PATH}/"
#### ismi değiştirildi
mv "${DB_PATH}/8614786" "${DB_PATH}/${1}DB.js"

#### dosya düzeltmesi yapıldı
sed -i "s/${CHANGE_TEXT}/${1}/" "${REDUCERS_PATH}/R_${1}.js"
sed -i "s/${CHANGE_TEXT}/${1}/" "${ACTIONS_PATH}/A_${1}.js"
sed -i "s/${CHANGE_TEXT}/${1}/" "${DB_PATH}/${1}DB.js"

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

#### endpoint'e link eklendi eklendi.
sed -i "s/${T5}/${T5}\n  Get${1}Url: \`\${EndPoint1}\/${1}\`,/" "${CONFIG_PATH}/EndPoints.js"
#### newtork'e fonksiyon eklendi eklendi eklendi.
sed -i "s/${T6}/const get${1}Network = async () => {\n  const URL = \`\${EndPoints.Get${1}Url}\`;\n  const PARAMS = {};\n  return await _fetchGet(URL, PARAMS);\n};\n${T6}/" "${CONFIG_PATH}/Network.js"
sed -i "s/${T61}/get${1}Network,\n  ${T61}/" "${CONFIG_PATH}/Network.js"

#### constant'a eklemeler yapıldı.
sed -i "s/${T7}/${1}: [\"title\"],\n    ${T7}/" "${CONFIG_PATH}/Constants.js"
sed -i "s/${T8}/${1}: ${1}.ID,\n    ${T8}/" "${CONFIG_PATH}/Constants.js"
sed -i "s/${T9}/, ${1} ${T9}/" "${CONFIG_PATH}/Constants.js"

#### realm.js düzenleme
sed -i "s/${T10}/export class ${1} {\n  static DbName = \"tbl_${1}\";\n\n    static SYNCTIME = \"syncTime\";\n    static ID = \"id\";\n\n  static schema = {\n    name: ${1}.DbName,\n    primaryKey: ${1}.ID,\n    properties: {\n      [${1}.SYNCTIME]: \"int\",\n      [${1}.ID]: \"int\",\n    },\n  };\n}\n${T10}/" "${DB_PATH}/realm.js"
sed -i "s/${T11}/${1}.schema,\n    ${T11}/" "${DB_PATH}/realm.js"

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
