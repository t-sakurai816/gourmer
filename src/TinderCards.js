import React, { useState, /*useEffect*/ } from 'react';
import TinderCard from 'react-tinder-card';
// import database from './firebase'
import LaunchIcon from '@material-ui/icons/Launch';
import './TinderCards.css'

const TinderCards = () => {
  const [shopInfos] = useState([
    {
      "name": "白木屋 新潟駅前店",
      "address": "新潟県新潟市中央区花園１-２-１　フォーサイト花園ビル４Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/04/15/P035780415/P035780415_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000691520/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "大衆酒蔵 天下一 新潟 駅前店",
      "address": "新潟県新潟市中央区花園１丁目２番２号　ガレッソ１階",
      "img": "https://imgfp.hotp.jp/IMGH/89/90/P031688990/P031688990_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000331331/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "もみじ苑 新潟駅店",
      "address": "新潟県新潟市中央区花園１-２－２　コープシティ花園GARESSO ３F",
      "img": "https://imgfp.hotp.jp/IMGH/63/06/P028086306/P028086306_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001179522/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "新潟屋 新潟本店",
      "address": "新潟県新潟市中央区花園１－２－２コープシティ花園GARESSO ３F",
      "img": "https://imgfp.hotp.jp/IMGH/14/96/P028181496/P028181496_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001179523/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "健康寿司 海鮮家",
      "address": "新潟県新潟市中央区花園１-1-1 　新潟駅ビルCoCoLo東",
      "img": "https://imgfp.hotp.jp/IMGH/25/77/P012472577/P012472577_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000331169/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "コート・ダジュール 新潟駅前店",
      "address": "新潟県新潟市中央区花園１-2-2　コープシティ花園2F",
      "img": "https://imgfp.hotp.jp/IMGH/63/26/P027836326/P027836326_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000981134/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "庄や ガレッソ新潟駅前店",
      "address": "新潟県新潟市中央区花園１-2-2　コープシティ花園 ガレッソ3F",
      "img": "https://imgfp.hotp.jp/IMGH/26/89/P035212689/P035212689_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000331626/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "マリスコ Marisco スパニッシュ&amp;オイスター",
      "address": "新潟県新潟市中央区花園１-２-２　コープシティ花園ガレッソ２F",
      "img": "https://imgfp.hotp.jp/IMGH/53/58/P036175358/P036175358_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001045472/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "つぼ八 新潟駅前店",
      "address": "新潟県新潟市中央区花園１－２－２　ガレッソ３F",
      "img": "https://imgfp.hotp.jp/IMGH/81/98/P033868198/P033868198_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000029469/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "大衆酒蔵 天下二 てんかに 新潟駅前店",
      "address": "新潟県新潟市中央区花園１－2－2ガレッソビル２Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/27/12/P031942712/P031942712_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001193145/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "ビッグエコー BIG ECHO 新潟駅前花園店",
      "address": "新潟県新潟市中央区花園１－２－６　通商ビル３Ｆ・４Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/16/57/P035961657/P035961657_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001010594/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "とんかつ政ちゃん 新潟駅前店",
      "address": "新潟県新潟市中央区花園１丁目3-2　IMA２ビル2階",
      "img": "https://imgfp.hotp.jp/IMGH/39/66/P036313966/P036313966_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001215821/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "鶏料理個室ダイニング 風花 かざはな 新潟駅前店",
      "address": "新潟県新潟市中央区花園１－３－２　ＩＭＡビル２F　３F",
      "img": "https://imgfp.hotp.jp/IMGH/28/83/P035082883/P035082883_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001215794/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "個室居酒屋 宴丸 新潟駅前店",
      "address": "新潟県新潟市中央区花園１-３-２　IMAビル2　4Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/43/82/P030724382/P030724382_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001187556/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "酒と和みと肉と野菜 新潟駅前店",
      "address": "新潟県新潟市中央区花園１－３－２　IMAビル２ ３F",
      "img": "https://imgfp.hotp.jp/IMGH/83/66/P034678366/P034678366_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001193780/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "一軒め酒場 新潟駅前店",
      "address": "新潟県新潟市中央区花園１-3-2  IMAビル2 1F",
      "img": "https://imgfp.hotp.jp/IMGH/49/67/P032404967/P032404967_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001210476/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "長岡小嶋屋 CoCoLo新潟店",
      "address": "新潟県新潟市中央区花園１-1-1 新潟駅内",
      "img": "https://imgfp.hotp.jp/IMGH/55/19/P034745519/P034745519_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000331354/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "日本海庄や 新潟駅店",
      "address": "新潟県新潟市中央区花園１－１－１　ＪＲ新潟駅コンコース構内",
      "img": "https://imgfp.hotp.jp/IMGH/84/61/P035258461/P035258461_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000331168/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "お肉で乾杯個室居酒屋 鶏まろ 新潟駅前店",
      "address": "新潟県新潟市中央区花園１-3-2　IMAビル2 3F",
      "img": "https://imgfp.hotp.jp/IMGH/41/30/P035484130/P035484130_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001246108/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "個室居酒屋 いろどり 新潟駅前店",
      "address": "新潟県新潟市中央区花園１－３番２　IMAビル　３F",
      "img": "https://imgfp.hotp.jp/IMGH/69/96/P036316996/P036316996_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001251048/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "かっぽうぎ 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１-5-31 プレジール野中１Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/31/49/P012623149/P012623149_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000331160/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "炭火焼とワイン NAPA ナパ ニイガタバル",
      "address": "新潟県新潟市中央区花園１-3-23 1F",
      "img": "https://imgfp.hotp.jp/IMGH/55/42/P028445542/P028445542_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001013636/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "新潟メシとうまい酒 カドフク 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１丁目5-31プレジール野中2F",
      "img": "https://imgfp.hotp.jp/IMGH/26/08/P036022608/P036022608_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001208344/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "新潟の時",
      "address": "新潟県新潟市中央区東大通１－5－3",
      "img": "https://imgfp.hotp.jp/IMGH/37/26/P036123726/P036123726_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001134464/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "亜麺坊 あめんぼう 新潟店",
      "address": "新潟県新潟市中央区花園１-1-1 新潟駅新幹線コンコースCoCoLo東",
      "img": "https://imgfp.hotp.jp/IMGH/85/48/P035528548/P035528548_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000331559/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "カラオケマイム 花園店",
      "address": "新潟県新潟市中央区花園１-3-10 積新第1ビル2階、3階",
      "img": "https://imgfp.hotp.jp/IMGH/69/09/P028176909/P028176909_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001117271/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "壱勢 いっせい 新潟店",
      "address": "新潟県新潟市中央区東大通１-5-30",
      "img": "https://imgfp.hotp.jp/IMGH/04/85/P029520485/P029520485_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000331301/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "目利きの銀次 新潟駅前店",
      "address": "新潟県新潟市中央区花園１－４－６ 柳都ビル１F",
      "img": "https://imgfp.hotp.jp/IMGH/90/61/P035789061/P035789061_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001184534/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "おきがるBAR&amp;and",
      "address": "新潟県新潟市中央区東大通１-5-7 第3小竹ビル3F",
      "img": "https://imgfp.hotp.jp/IMGH/93/74/P030209374/P030209374_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001200577/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "BAR1983",
      "address": "新潟県新潟市中央区東大通１丁目5-6",
      "img": "https://imgfp.hotp.jp/IMGH/59/95/P036255995/P036255995_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001247049/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "佐渡夕鶴伝説 ひげ組合",
      "address": "新潟県新潟市中央区東大通１-5-28-2Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/96/70/P025869670/P025869670_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001010054/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "焼肉 藤虎 ふじとら",
      "address": "新潟県新潟市中央区東大通１丁目5-7第3小竹ビル1階",
      "img": "https://imgfp.hotp.jp/IMGH/58/28/P033275828/P033275828_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001211171/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "Spanish&amp;ItalianBar CHASU 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１丁目5-6",
      "img": "https://imgfp.hotp.jp/IMGH/57/65/P036255765/P036255765_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001247050/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "飲むなら ここ屋 東大通店",
      "address": "新潟県新潟市中央区東大通１-5-6",
      "img": "https://imgfp.hotp.jp/IMGH/63/72/P028766372/P028766372_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001185898/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "まんまや 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１－５－３０ HOKUYUビル２F",
      "img": "https://imgfp.hotp.jp/IMGH/87/51/P036178751/P036178751_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001192568/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "柚柚 yuyu 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１－１－１　マルカビル２F",
      "img": "https://imgfp.hotp.jp/IMGH/24/60/P032662460/P032662460_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001039921/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "全席完全個室 鶏料理居酒屋 鶏ぷる 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１－１－１　マルカビル２Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/79/14/P035177914/P035177914_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001239188/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "全席個室 お肉酒場 我家我家 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１－１－１　マルカビル２Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/77/66/P035077766/P035077766_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001135662/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "和が家 新潟",
      "address": "新潟県新潟市中央区東大通１-5-7",
      "img": "https://imgfp.hotp.jp/IMGH/00/37/P032670037/P032670037_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000724918/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "はなの舞 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１－１－１６堀川ビル2Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/38/20/P034663820/P034663820_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000030577/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "さかなや道場 新潟駅前1号店",
      "address": "新潟県新潟市中央区東大通１－１－１６　１Ｆ・Ｂ１Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/28/54/P036352854/P036352854_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000724234/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "スパイシーマーケット Spicy Market 新潟 駅前店",
      "address": "新潟県新潟市中央区東大通１-5-27　新潟セーヌビル2Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/92/82/P034279282/P034279282_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000029467/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "パーティーポイント プラスサード 新潟",
      "address": "新潟県新潟市中央区東大通１－１－１　第５マルカビル３Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/70/20/P020507020/P020507020_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000677382/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "和食割烹 越後庵 けんしん 新潟本店",
      "address": "新潟県新潟市中央区東大通１-5-27　駅前セーヌビル1階",
      "img": "https://imgfp.hotp.jp/IMGH/61/23/P033996123/P033996123_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001227279/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "新潟地場もん 越たんたん 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１丁目1-7　来々軒ビル５階",
      "img": "https://imgfp.hotp.jp/IMGH/28/58/P036182858/P036182858_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000989159/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "須坂屋そば 東大通店",
      "address": "新潟県新潟市中央区東大通１丁目６－１",
      "img": "https://imgfp.hotp.jp/IMGH/98/70/P035119870/P035119870_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001239279/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "洋食&amp;ぶどう酒のお店 ぼじょ",
      "address": "新潟県新潟市中央区東大通１-5-10　松原ビル1F",
      "img": "https://imgfp.hotp.jp/IMGH/87/65/P036128765/P036128765_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001041707/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "花柚子",
      "address": "新潟県新潟市中央区東大通１-5-10　松原第一ビル3F",
      "img": "https://imgfp.hotp.jp/IMGH/88/62/P027878862/P027878862_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001109633/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "日本酒スローフード にいがた 方舟 はこぶね",
      "address": "新潟県新潟市中央区花園１-1-21　CoCoLo南館内",
      "img": "https://imgfp.hotp.jp/IMGH/76/21/P030947621/P030947621_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001154940/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "ザ リフィー タヴァーン The Liffey Tavern 1 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１-1-15",
      "img": "https://imgfp.hotp.jp/IMGH/03/22/P035330322/P035330322_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000767281/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "生ラムジンギスカン 吉祐栄門 よしえもん",
      "address": "新潟県新潟市中央区花園１-3-15",
      "img": "https://imgfp.hotp.jp/IMGH/66/57/P032196657/P032196657_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001185064/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "みかく",
      "address": "新潟県新潟市中央区東大通１-6-31",
      "img": "https://imgfp.hotp.jp/IMGH/24/02/P013482402/P013482402_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000331393/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "カラオケ まねきねこ 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１丁目1-16堀川ビル2F3F",
      "img": "https://imgfp.hotp.jp/IMGH/27/93/P031902793/P031902793_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001135407/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "居酒屋 満腹バル 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１-1-16 ホリカワビルB1A",
      "img": "https://imgfp.hotp.jp/IMGH/36/97/P036023697/P036023697_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001245862/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "チーズと肉バル DELICA デリカ 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１-1-16 ホリカワビルB1B",
      "img": "https://imgfp.hotp.jp/IMGH/80/40/P036058040/P036058040_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001245865/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "旬彩庵",
      "address": "新潟県新潟市中央区東大通１－６－１",
      "img": "https://imgfp.hotp.jp/IMGH/28/90/P012432890/P012432890_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000029465/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "サルヴァトーレ クオモ SALVATORE CUOMO &amp;BAR 新潟",
      "address": "新潟県新潟市中央区弁天１-1-26　オセオ弁天１Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/94/81/P031809481/P031809481_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001098692/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "まぐろ亭",
      "address": "新潟県新潟市中央区東大通１-６-２９-２F",
      "img": "https://imgfp.hotp.jp/IMGH/95/82/P029849582/P029849582_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001178072/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "Rock cafe &amp; bar HINDEE ヒンデー",
      "address": "新潟県新潟市中央区東大通１-6-29",
      "img": "https://imgfp.hotp.jp/IMGH/47/10/P024154710/P024154710_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001133654/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "しののめ ピコ Picots",
      "address": "新潟県新潟市中央区東大通 1-6-29 共同ビル2F",
      "img": "https://imgfp.hotp.jp/IMGH/55/55/P036115555/P036115555_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001102142/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "asian dining Lotus Lagoon ロータスラグーン",
      "address": "新潟県新潟市中央区花園１‐5‐3　ネットワークビル1F",
      "img": "https://imgfp.hotp.jp/IMGH/50/66/P035815066/P035815066_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001161271/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "うんめ魚が食いてぇ 駅前漁港 炙りや あぶりや",
      "address": "新潟県新潟市中央区花園１-5-5 鳴海ビル1階",
      "img": "https://imgfp.hotp.jp/IMGH/89/30/P034568930/P034568930_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001001492/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "酔亭 とよ蔵 花園店",
      "address": "新潟県新潟市中央区花園１丁目5-5　鳴海ビル2F",
      "img": "https://imgfp.hotp.jp/IMGH/24/40/P036272440/P036272440_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001238624/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "ヤサイ串巻マグロしゃぶしゃぶアッパレ",
      "address": "新潟県新潟市中央区花園１-5-4",
      "img": "https://imgfp.hotp.jp/IMGH/09/88/P024550988/P024550988_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001108982/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "阿具楽 agura 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１-1-10　来々軒ビル2階",
      "img": "https://imgfp.hotp.jp/IMGH/03/38/P036410338/P036410338_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001129277/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "匠 TAKUMI 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１-1-10  来々軒ビル2階",
      "img": "https://imgfp.hotp.jp/IMGH/71/23/P034417123/P034417123_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001129280/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "くいもの屋 わん 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１-1-10 来々軒ビル地下1階",
      "img": "https://imgfp.hotp.jp/IMGH/33/95/P030583395/P030583395_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001147460/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "肉バル ベジリッチ 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１丁目１-１０　来々軒ビル3F",
      "img": "https://imgfp.hotp.jp/IMGH/79/99/P036247999/P036247999_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001194174/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "胡坐屋 あぐらや 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１－６－２８",
      "img": "https://imgfp.hotp.jp/IMGH/77/16/P035207716/P035207716_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000636755/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "グランパ南極",
      "address": "新潟県新潟市中央区花園１-6-1",
      "img": "https://imgfp.hotp.jp/IMGH/51/69/P025945169/P025945169_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001161397/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "肉バル PERORI ペロリ 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１丁目１-１０　来々軒ビル3F",
      "img": "https://imgfp.hotp.jp/IMGH/42/43/P035864243/P035864243_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001154838/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "村さ来 新潟駅前店",
      "address": "新潟県新潟市東大通１－１－１０",
      "img": "https://imgfp.hotp.jp/IMGH/79/85/P032457985/P032457985_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001127287/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "カラオケマイム 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１-1-10　来々軒ビル4F",
      "img": "https://imgfp.hotp.jp/IMGH/71/64/P028177164/P028177164_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000030282/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "炭鮮 sumisen すみせん 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１-6-2",
      "img": "https://imgfp.hotp.jp/IMGH/98/70/P034339870/P034339870_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000748019/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "アンドカフェ &amp;CAFE",
      "address": "新潟県新潟市中央区弁天１-1-26　オセオ弁天2Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/28/55/P035492855/P035492855_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001246239/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "居酒屋 くいしんぼ 新潟駅前店",
      "address": "新潟県新潟市中央区弁天１-1-26　オセオ弁天2F",
      "img": "https://imgfp.hotp.jp/IMGH/49/44/P029984944/P029984944_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001223579/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "個室居酒屋 楓 かえで 新潟駅前店",
      "address": "新潟県新潟市中央区弁天１-1-26オセオ弁天2階",
      "img": "https://imgfp.hotp.jp/IMGH/21/84/P035932184/P035932184_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001119212/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "コリアンダイニング けなり 駅前店",
      "address": "新潟県新潟市中央区弁天１-1-26　オセオ弁天3F",
      "img": "https://imgfp.hotp.jp/IMGH/06/79/P035970679/P035970679_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000739510/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "団欒 炎 新潟駅前店",
      "address": "新潟県新潟市中央区弁天１－１－２６　オセオ弁天３Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/48/68/P034364868/P034364868_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000030565/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "笑喰処 つまようじ 新潟",
      "address": "新潟県新潟市中央区東大通１-６-２",
      "img": "https://imgfp.hotp.jp/IMGH/94/10/P030809410/P030809410_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000690093/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "串カツ田中 新潟駅前店",
      "address": "新潟県新潟市中央区花園１-６-１",
      "img": "https://imgfp.hotp.jp/IMGH/92/44/P036149244/P036149244_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001236305/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "居酒屋 きのした 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１-６-２７",
      "img": "https://imgfp.hotp.jp/IMGH/08/64/P035060864/P035060864_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001170597/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "味美 ミミ",
      "address": "新潟県新潟市中央区東大通１-５-１４",
      "img": "https://imgfp.hotp.jp/IMGH/64/96/P036036496/P036036496_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001207663/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "Oven Bar STOVE ストーブ",
      "address": "新潟県新潟市中央区東大通１-1-10 来々軒ビル1F",
      "img": "https://imgfp.hotp.jp/IMGH/09/80/P027530980/P027530980_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001152548/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "麦酒喝采 とも家",
      "address": "新潟県新潟市中央区東大通１－６－２  2F",
      "img": "https://imgfp.hotp.jp/IMGH/69/66/P034816966/P034816966_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000748059/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "いかの墨",
      "address": "新潟県新潟市中央区東大通１－５－２４　まるよし第８ビル１棟",
      "img": "https://imgfp.hotp.jp/IMGH/28/02/P036222802/P036222802_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000033438/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "ミライザカ 新潟駅前東大通り店",
      "address": "新潟県新潟市中央区東大通１-2-1　第２マルカビル3F～5F",
      "img": "https://imgfp.hotp.jp/IMGH/27/09/P036412709/P036412709_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000631148/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "三代目鳥メロ 新潟駅前東大通り店",
      "address": "新潟県新潟市中央区東大通１－２－１　第２マルカビル２Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/64/44/P036266444/P036266444_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000042280/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "ビッグエコー BIG ECHO 新潟駅前店",
      "address": "新潟県新潟市中央区東大通１－２－１　第２マルカビル6・7・8F（受付7F）",
      "img": "https://imgfp.hotp.jp/IMGH/41/22/P036204122/P036204122_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000050956/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "明神そば きやり 新潟店",
      "address": "新潟県新潟市中央区花園１－１－２１　CoCoLo南館3階",
      "img": "https://imgfp.hotp.jp/IMGH/58/55/P028905855/P028905855_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000743566/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "馬肉酒場 馬喰ろう 新潟店",
      "address": "新潟県新潟市中央区花園１-5-6-2F",
      "img": "https://imgfp.hotp.jp/IMGH/10/09/P036341009/P036341009_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001179275/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "百織 ひゃくしき 新潟市中央区",
      "address": "新潟県新潟市中央区東大通１丁目５-１３　１F",
      "img": "https://imgfp.hotp.jp/IMGH/70/12/P029097012/P029097012_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001027513/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "てっぱん海鮮家 Umi 海",
      "address": "新潟県新潟市中央区東大通１-5-14　1F",
      "img": "https://imgfp.hotp.jp/IMGH/00/03/P023580003/P023580003_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001125703/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "しゃぶ禅 和楽 新潟店",
      "address": "新潟県新潟市中央区弁天１-2-4　ホテル　グローバルビュー新潟（旧東急イン）",
      "img": "https://imgfp.hotp.jp/IMGH/93/86/P025229386/P025229386_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000331561/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "焼鳥酒場トリマル",
      "address": "新潟県新潟市中央区東大通１‐6‐28‐5　1階",
      "img": "https://imgfp.hotp.jp/IMGH/96/39/P034929639/P034929639_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001233273/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "カラオケフードバーMimi",
      "address": "新潟県新潟市中央区東大通１-6-26ソフィアビル4階A",
      "img": "https://imgfp.hotp.jp/IMGH/89/14/P031558914/P031558914_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001209482/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "居酒屋 きんぎょ 新潟駅前",
      "address": "新潟県新潟市中央区東大通１－６－３",
      "img": "https://imgfp.hotp.jp/IMGH/75/76/P036407576/P036407576_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000032689/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "レストランバル エルドラド",
      "address": "新潟県新潟市中央区弁天１‐2－4",
      "img": "https://imgfp.hotp.jp/IMGH/98/73/P028099873/P028099873_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001169753/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "居酒屋 維吹 いぶき",
      "address": "新潟県新潟市中央区東大通１-６-２７",
      "img": "https://imgfp.hotp.jp/IMGH/44/52/P035184452/P035184452_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001168688/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "鯛の目",
      "address": "新潟県新潟市中央区東大通１-6-3",
      "img": "https://imgfp.hotp.jp/IMGH/60/59/P018766059/P018766059_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000993323/?vos=nhppalsa000016",
      "card": "利用不可"
    },
  ]);

  const onSwipe = (direction) => { //スワイプの方向
    console.log('You swiped: ' + direction)
    // if(direction === 'right'){
    //   alert("右スワイプ")
    // }else if(direction === 'left') {
    //   alert("左スワイプ")
    // }
  }


  const onCardLeftScreen = (myidentifier) => {
    console.log(myidentifier + 'left the screen')
  }





  // BAD
  // const shopInfos = [];
  // shopInfos.push('sonny', 'qazi')

  // GOOD(Push to an array in React)
  // setshopInfos([...shopInfos, 'sonny','qazi'])

  return (
    <React.Fragment>
      {/* <h1>Tinder Cards</h1> */}
      <div className="tinderCards__cardContainer">
        {shopInfos.map(shopInfo => (
          <TinderCard
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen('fooBar')} //スワイプ終了後に呼び出される
            className="swipe"
            key={shopInfo.name}
            preventSwipe={['up', 'down']} //up, downにスワイプを阻止
          >
            <div
              style={{ backgroundImage: `url(${shopInfo.img})` }}
              className="card"
            >
              <div className="shopInfo" ontouchstart="">
                <h3>{shopInfo.name}</h3>
                <a href={shopInfo.url} target="_blank" rel="noopener noreferrer">お店のHP<LaunchIcon fontSize="small"></LaunchIcon></a>
              </div>

              {/* <h4>カード{shopInfo.card}</h4> */}
              {/* <Link to={shopInfo.url} target="_blank">hogehoge</Link> */}
            </div>
          </TinderCard>
        ))}
      </div>
    </React.Fragment>
  )
}

export default TinderCards;