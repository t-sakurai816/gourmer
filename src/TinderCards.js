import React, { useState, /*useEffect*/ } from 'react';
import TinderCard from 'react-tinder-card';
// import database from './firebase'
import LaunchIcon from '@material-ui/icons/Launch';
import './TinderCards.css'

const TinderCards = () => {
  const [shopInfos] = useState([
    {
      "name": "天喜代 東京駅グランルーフ店",
      "address": "東京都千代田区丸の内１－９－１　グランルーフＢ１",
      "img": "https://imgfp.hotp.jp/IMGH/10/20/P022161020/P022161020_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001038697/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "はせがわ酒店 東京駅グランスタ店",
      "address": "東京都千代田区丸の内１-9-1　JR東京駅構内地下1F",
      "img": "https://imgfp.hotp.jp/IMGH/81/68/P012258168/P012258168_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000699253/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "Japanese Malt Whisky SAKURA グランスタ東京店",
      "address": "東京都千代田区丸の内１-9-1 JR東日本東京駅改札内 グランスタ東京地下1階",
      "img": "https://imgfp.hotp.jp/IMGH/48/66/P036294866/P036294866_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001249579/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "果実園 東京店",
      "address": "東京都千代田区丸の内１-9-1 東京駅　改札外 1F キッチンストリート",
      "img": "https://imgfp.hotp.jp/IMGH/97/48/P023319748/P023319748_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001011923/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "マンゴツリーキッチン グランスタ",
      "address": "東京都千代田区丸の内１-9-1　ＪＲ東日本東京駅構内B1GRANSTA内 ",
      "img": "https://imgfp.hotp.jp/IMGH/26/18/P017032618/P017032618_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001026595/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "Gigas 東京駅グランルーフ店",
      "address": "東京都千代田区丸の内１－９－１　グランルーフ内",
      "img": "https://imgfp.hotp.jp/IMGH/38/19/P033233819/P033233819_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001051523/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "北海道バル 海",
      "address": "東京都千代田区丸の内１－９－１　グランルーフ内",
      "img": "https://imgfp.hotp.jp/IMGH/38/96/P036473896/P036473896_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001051521/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "鳥元 東京駅グランルーフ店",
      "address": "東京都千代田区丸の内１-9-1　東京駅グランルーフB1F",
      "img": "https://imgfp.hotp.jp/IMGH/47/68/P033414768/P033414768_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001038342/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "オールドステーション THE OLD STATION 東京店",
      "address": "東京都千代田区丸の内１-9-1 東京駅八重洲北口2Ｆ北町ダイニング内",
      "img": "https://imgfp.hotp.jp/IMGH/04/72/P033860472/P033860472_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001126450/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "東京屋台",
      "address": "東京都千代田区丸の内１-9-1 東京駅八重洲北口２Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/29/66/P022202966/P022202966_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001125580/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "米沢牛黄木 東京駅黒塀横丁店",
      "address": "東京都千代田区丸の内１-9-1 東京駅八重洲北口　B1F　黒塀横丁内",
      "img": "https://imgfp.hotp.jp/IMGH/59/90/P030285990/P030285990_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001103083/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "リコロ RICOLO",
      "address": "東京都千代田区丸の内１－９－１　大丸東京店１２Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/91/90/P020969190/P020969190_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000711187/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "うに屋のあまごころ",
      "address": "東京都千代田区丸の内１-9-1 東京駅1F キッチンストリート",
      "img": "https://imgfp.hotp.jp/IMGH/99/24/P024379924/P024379924_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001103202/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "ハンバーグワークス 東京駅グランルーフフロント店",
      "address": "東京都千代田区丸の内１-9-1東京駅八重洲中央口地下一階グランルーフフロント内",
      "img": "https://imgfp.hotp.jp/IMGH/55/67/P035015567/P035015567_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001103154/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "プロント イルバール PRONTO IL BAR 東京駅一番街店",
      "address": "東京都千代田区丸の内１-9",
      "img": "https://imgfp.hotp.jp/IMGH/76/67/P023617667/P023617667_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000806220/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "ワイン食堂 旅する子ブタ 東京駅グランルーフフロント店",
      "address": "東京都千代田区丸の内１-9-1 東京駅グランルーフフロントB1",
      "img": "https://imgfp.hotp.jp/IMGH/99/11/P034859911/P034859911_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001103152/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "サイアムセラドン SIAM CELADON 東京",
      "address": "東京都千代田区丸の内１-8-2　鉄鋼ビルB1",
      "img": "https://imgfp.hotp.jp/IMGH/82/80/P034518280/P034518280_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001136175/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "ACORN エイコーン 東京駅グランルーフフロント店",
      "address": "東京都千代田区丸の内１-9-1八重洲中央口Ｂ1　グランルーフフロント内",
      "img": "https://imgfp.hotp.jp/IMGH/03/09/P032920309/P032920309_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001038343/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "サバティーニ・ディ・フィレンツェ SABATINI di Firenze 大丸東京店",
      "address": "東京都千代田区丸の内１－９－１大丸東京店12階",
      "img": "https://imgfp.hotp.jp/IMGH/66/54/P018006654/P018006654_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000739396/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "茶寮 都路里 つじり 大丸東京店",
      "address": "東京都千代田区丸の内１-９-１　大丸東京店１０階",
      "img": "https://imgfp.hotp.jp/IMGH/57/41/P014475741/P014475741_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000797458/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "ブラッスリー ポール ボキューズ 大丸東京",
      "address": "東京都千代田区丸の内１-9-1　グラントウキョウノースタワー（大丸東京）12F",
      "img": "https://imgfp.hotp.jp/IMGH/43/42/P020354342/P020354342_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000760470/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "銀座ハゲ天 東京駅店",
      "address": "東京都千代田区丸の内１－９－１　東京駅黒塀横丁（鉄道会館/黒塀横丁）",
      "img": "https://imgfp.hotp.jp/IMGH/95/41/P012289541/P012289541_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000010304/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "まい泉 大丸東京店",
      "address": "東京都千代田区丸の内１-９-１　大丸東京店１２階",
      "img": "https://imgfp.hotp.jp/IMGH/90/84/P012269084/P012269084_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000712498/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "たん熊北店 大丸東京店",
      "address": "東京都千代田区丸の内１-９-１　大丸東京店１２階",
      "img": "https://imgfp.hotp.jp/IMGH/77/94/P012267794/P012267794_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000797428/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "カフェ英國屋 大丸東京店",
      "address": "東京都千代田区丸の内１-９-１　大丸東京店７階",
      "img": "https://imgfp.hotp.jp/IMGH/54/21/P012265421/P012265421_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000797377/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "東京 コトブキ 壽",
      "address": "東京都千代田区丸の内１-９-１　東京駅１番街2F",
      "img": "https://imgfp.hotp.jp/IMGH/13/41/P030071341/P030071341_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001195902/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "日本橋 伊勢定 いせさだ 大丸東京店",
      "address": "東京都千代田区丸の内１-９-１　大丸東京店１２階",
      "img": "https://imgfp.hotp.jp/IMGH/52/27/P012285227/P012285227_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000797481/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "イノダコーヒ 東京大丸支店",
      "address": "東京都千代田区丸の内１-９-１　大丸東京店８階",
      "img": "https://imgfp.hotp.jp/IMGH/21/21/P034232121/P034232121_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000797480/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "羅かん",
      "address": "東京都千代田区丸の内１‐９‐１　ＪＲ東京駅Ｂ１Ｆ　（鉄道会館/黒塀横丁）",
      "img": "https://imgfp.hotp.jp/IMGH/40/45/P012374045/P012374045_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000805569/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "日本ばし すし鉄 大丸東京店",
      "address": "東京都千代田区丸の内１-９-１　大丸東京店１２階",
      "img": "https://imgfp.hotp.jp/IMGH/82/37/P012248237/P012248237_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000116068/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "ブルディガラ カフェ 大丸東京店",
      "address": "東京都千代田区丸の内１-９-１　大丸東京店５階",
      "img": "https://imgfp.hotp.jp/IMGH/97/86/P012269786/P012269786_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000797435/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "天津飯店 東京駅黒塀横丁店",
      "address": "東京都千代田区丸の内１‐９‐１東京駅八重洲北口Ｂ１Ｆ黒塀横丁内 （鉄道会館/黒塀横丁）",
      "img": "https://imgfp.hotp.jp/IMGH/01/71/P034780171/P034780171_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000010302/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "為御菜 おさいのため 黒塀横丁",
      "address": "東京都千代田区丸の内１-9-1　黒塀横丁内（鉄道会館/黒塀横丁）",
      "img": "https://imgfp.hotp.jp/IMGH/75/56/P012427556/P012427556_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000229344/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "新橋鶏繁どんぶり子",
      "address": "東京都千代田区丸の内１‐９‐１　東京駅１Ｆ　キッチンストリート内（鉄道会館）",
      "img": "https://imgfp.hotp.jp/IMGH/10/54/P012381054/P012381054_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000233769/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "ウォルプタス VOLPUTAS 東京駅グランルーフ店",
      "address": "東京都千代田区丸の内１丁目９‐１ グランルーフ　２F",
      "img": "https://imgfp.hotp.jp/IMGH/09/12/P030300912/P030300912_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001094133/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "永坂更科 布屋太兵衛 大丸東京店",
      "address": "東京都千代田区丸の内１-９-１　大丸東京店１２階",
      "img": "https://imgfp.hotp.jp/IMGH/81/56/P012248156/P012248156_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000797365/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "DA CIBO TOKYO STAZIONE ダチーボ 東京駅店",
      "address": "東京都千代田区丸の内１－９－１　東京駅１階　キッチンストリート　（キッチンストリート内（鉄道会館））",
      "img": "https://imgfp.hotp.jp/IMGH/71/71/P033717171/P033717171_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000010946/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "くしあげ処 串はん",
      "address": "東京都千代田区丸の内１‐９‐１東京駅Ｂ１Ｆ黒塀横丁内（鉄道会館/黒塀横丁）",
      "img": "https://imgfp.hotp.jp/IMGH/42/93/P012374293/P012374293_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000229343/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "沼津魚がし鮨 東京駅店 キッチンストリート",
      "address": "東京都千代田区丸の内１‐９‐１　東京駅1F　キッチンストリート内（鉄道会館）",
      "img": "https://imgfp.hotp.jp/IMGH/31/98/P012343198/P012343198_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000010663/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "喜助 東京駅 キッチンストリート",
      "address": "東京都千代田区丸の内１‐９‐１東京駅１階　キッチンストリート内（鉄道会館）",
      "img": "https://imgfp.hotp.jp/IMGH/61/06/P012386106/P012386106_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000228908/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "ビモン Vimon",
      "address": "東京都千代田区丸の内１‐９‐１東京駅１Ｆ　キッチンストリート内（鉄道会館）",
      "img": "https://imgfp.hotp.jp/IMGH/51/87/P012425187/P012425187_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000010531/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "茶らく 東京駅キッチンストリート店",
      "address": "東京都千代田区丸の内１-９-１東京駅八重洲北口１Ｆ　キッチンストリート内（鉄道会館）",
      "img": "https://imgfp.hotp.jp/IMGH/49/46/P012294946/P012294946_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000731786/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "ヒロプリモ HiRo Primo",
      "address": "東京都千代田区丸の内１‐９‐１　東京駅１Ｆ　キッチンストリート内（鉄道会館）",
      "img": "https://imgfp.hotp.jp/IMGH/08/59/P016290859/P016290859_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000233755/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "築地奈可嶋 黒塀横丁",
      "address": "東京都千代田区丸の内１‐９‐１ 東京駅八重洲北口Ｂ１黒塀横丁内（鉄道会館/黒塀横丁）",
      "img": "https://imgfp.hotp.jp/IMGH/01/48/P027580148/P027580148_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000759217/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "繁乃井",
      "address": "東京都千代田区丸の内１‐９‐１ＪＲ東京駅Ｂ１Ｆ黒塀横丁（鉄道会館/黒塀横丁）",
      "img": "https://imgfp.hotp.jp/IMGH/43/56/P012374356/P012374356_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000229339/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "たけがみ 一轍そば",
      "address": "東京都千代田区丸の内１－９－１　東京駅八重洲北口１階　キッチンストリート内（鉄道会館）",
      "img": "https://imgfp.hotp.jp/IMGH/46/89/P012224689/P012224689_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000010462/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "博多 うま馬 東京店",
      "address": "東京都千代田区丸の内１‐９‐１　東京駅１Ｆキッチンストリート内（鉄道会館）",
      "img": "https://imgfp.hotp.jp/IMGH/51/68/P012425168/P012425168_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000010526/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "バーバー 東京",
      "address": "東京都千代田区丸の内１－９－１　東京駅地下１階黒塀横丁（鉄道会館/黒塀横丁）",
      "img": "https://imgfp.hotp.jp/IMGH/42/00/P022144200/P022144200_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000010433/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "The Cave De Oyster カーブ・ド・オイスター 東京駅八重洲地下街",
      "address": "東京都中央区八重洲２-1番  八重洲地下街南1号",
      "img": "https://imgfp.hotp.jp/IMGH/35/14/P031423514/P031423514_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001119489/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "そじ坊 八重洲北口店",
      "address": "東京都中央区八重洲２-1八重洲地下街北1号",
      "img": "https://imgfp.hotp.jp/IMGH/34/98/P027633498/P027633498_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001184916/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "プロント PRONTO ビアテリア BEERTERIA 東京駅店",
      "address": "東京都千代田区丸の内１-9-1東京駅１Fキッチンストリート",
      "img": "https://imgfp.hotp.jp/IMGH/68/51/P035056851/P035056851_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000662477/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "鐵一 てついち 八重洲地下街店",
      "address": "東京都中央区八重洲２－１　八重洲地下街南一号",
      "img": "https://imgfp.hotp.jp/IMGH/67/46/P013276746/P013276746_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000962533/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "ハイボールバー東京駅1923",
      "address": "東京都千代田区丸の内１-９-１　東京駅一番街２F　東京グルメゾン内",
      "img": "https://imgfp.hotp.jp/IMGH/28/52/P030142852/P030142852_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001195903/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "やえす 初藤",
      "address": "東京都中央区八重洲２-1  八重洲地下街北1号",
      "img": "https://imgfp.hotp.jp/IMGH/03/72/P018320372/P018320372_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000002498/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "和彩酒蔵 だるま 八重洲地下街",
      "address": "東京都中央区八重洲２-1 八重洲地下街北1号",
      "img": "https://imgfp.hotp.jp/IMGH/90/19/P035959019/P035959019_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000653287/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "日本海庄や 八重洲店",
      "address": "東京都中央区八重洲１－９－１３八重洲駅前合同ビルB3～B1",
      "img": "https://imgfp.hotp.jp/IMGH/76/98/P035357698/P035357698_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000119211/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "銀座ライオン LEO 八重洲鉄鋼ビル店",
      "address": "東京都千代田区丸の内１-8-2",
      "img": "https://imgfp.hotp.jp/IMGH/73/32/P035547332/P035547332_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001135653/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "鼎泰豊 東京駅八重洲口店",
      "address": "東京都千代田区丸の内１-8-2 TEKKOU  avenue 地下1階",
      "img": "https://imgfp.hotp.jp/IMGH/27/74/P029022774/P029022774_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001137316/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "ドンピエールハート 東京",
      "address": "東京都千代田区丸の内２-7-2 JPタワーKITTE5F",
      "img": "https://imgfp.hotp.jp/IMGH/94/24/P034919424/P034919424_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001071582/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "串の味 東八 八重洲地下街店",
      "address": "東京都中央区八重洲２-1-1　八重洲地下街　外堀地下2番通り",
      "img": "https://imgfp.hotp.jp/IMGH/29/10/P031502910/P031502910_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000119238/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "個室と和食 和菜美 wasabi 東京駅八重洲店",
      "address": "東京都中央区八重洲１-7-17　八重洲ロータリービルB１F",
      "img": "https://imgfp.hotp.jp/IMGH/10/62/P027571062/P027571062_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000839705/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "音音 八重洲鉄鋼ビル店",
      "address": "東京都千代田区丸の内１-８-２鉄鋼ビル南館地下１階",
      "img": "https://imgfp.hotp.jp/IMGH/91/15/P024939115/P024939115_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001134692/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "ふくじゅう",
      "address": "東京都中央区八重洲２‐１　八重洲大地下街内４３",
      "img": "https://imgfp.hotp.jp/IMGH/99/58/P028129958/P028129958_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000682237/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "プロント PRONTO 東京シティアイカフェ店",
      "address": "東京都千代田区丸の内２－7－2 JPタワーB１F",
      "img": "https://imgfp.hotp.jp/IMGH/89/41/P029588941/P029588941_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001026035/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "琉球市場 やちむん",
      "address": "東京都千代田区丸の内２-７-２　B１　KITTE　グランシェ",
      "img": "https://imgfp.hotp.jp/IMGH/50/86/P021645086/P021645086_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001048565/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "サイアムオーキッド 八重洲地下街店",
      "address": "東京都中央区八重洲２－１　八重洲地下街南1号",
      "img": "https://imgfp.hotp.jp/IMGH/17/07/P011511707/P011511707_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000248594/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "龍潭 りゅうたん 黒塀横丁 東京駅B1階",
      "address": "東京都千代田区丸の内１－９－１　東京駅八重洲北口地下１Ｆ　黒塀横丁（鉄道会館/黒塀横丁）",
      "img": "https://imgfp.hotp.jp/IMGH/64/78/P036466478/P036466478_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000010488/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "味噌煮込みうどん 玉丁本店",
      "address": "東京都中央区八重洲２－１　八重洲地下街南一番街",
      "img": "https://imgfp.hotp.jp/IMGH/97/25/P010459725/P010459725_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000002640/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "バビーズヤエチカ TRIBECA TOKYO",
      "address": "東京都中央区八重洲２-1  八重洲地下街　中3号",
      "img": "https://imgfp.hotp.jp/IMGH/08/90/P015570890/P015570890_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001001062/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "948 串to饂飩",
      "address": "東京都中央区八重洲２-1　 八重洲地下街　1番通り　[23番(日本橋・神田)入口すぐ]",
      "img": "https://imgfp.hotp.jp/IMGH/24/88/P014512488/P014512488_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000979868/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "札幌ラーメン どさん子 八重洲店",
      "address": "東京都中央区八重洲２－１　八重洲地下街　八重洲地下２番通り",
      "img": "https://imgfp.hotp.jp/IMGH/90/77/P028239077/P028239077_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001065227/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "鳳鳴春",
      "address": "東京都中央区八重洲２‐１　八重洲地下街中１５",
      "img": "https://imgfp.hotp.jp/IMGH/41/13/P012934113/P012934113_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000682234/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "B.C.T. BAR CARDINAL TOKYO バー カーディナル トーキョー",
      "address": "東京都千代田区丸の内１-９-１　大丸東京店１２Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/73/91/P011257391/P011257391_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000759661/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "アリーズバー ALLY‘S BAR",
      "address": "東京都中央区八重洲１－７－２０ 八重洲口会館１F",
      "img": "https://imgfp.hotp.jp/IMGH/80/78/P032398078/P032398078_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000742857/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "ばいこうけん 東京 KITTE丸の内",
      "address": "東京都千代田区丸の内２－７－２　ＪＰタワーＫＩＴＴＥ丸の内５Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/39/70/P021263970/P021263970_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001078307/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "虎連坊 八重洲店",
      "address": "東京都中央区八重洲１-7-20八重洲口会館B1",
      "img": "https://imgfp.hotp.jp/IMGH/06/90/P036390690/P036390690_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001125271/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "ヱビスバー YEBISU BAR 黒塀横丁店",
      "address": "東京都千代田区丸の内１-9-1 東京駅八重洲北口B1 黒塀横丁",
      "img": "https://imgfp.hotp.jp/IMGH/33/53/P032463353/P032463353_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000989936/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "吾照里 オジョリ 東京駅八重洲口店",
      "address": "東京都千代田区丸の内１－９－１　東京駅 八重洲北口Ｂ１　黒塀横丁（鉄道会館）",
      "img": "https://imgfp.hotp.jp/IMGH/64/32/P036026432/P036026432_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000000746/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "讃岐うどん 麦まる",
      "address": "東京都中央区八重洲２-2－1八重洲地下街南１号Ｂ１Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/81/33/P012068133/P012068133_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000767214/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "とんかつ和幸 八重洲地下街八重洲店",
      "address": "東京都中央区八重洲２－１　八重洲地下街内Ｂ１",
      "img": "https://imgfp.hotp.jp/IMGH/89/61/P012988961/P012988961_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000004454/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "魚匠 銀平 KITTE 丸の内店",
      "address": "東京都千代田区丸の内２－７－２ JPタワーKITTE６F",
      "img": "https://imgfp.hotp.jp/IMGH/26/63/P031772663/P031772663_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001019088/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "operetta 丸の内トラストタワー店",
      "address": "東京都千代田区丸の内１－８－３　丸の内トラストタワー本館２階",
      "img": "https://imgfp.hotp.jp/IMGH/01/48/P032190148/P032190148_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000839662/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "ミンミン 八重洲店 東京駅サウスタワー内",
      "address": "東京都千代田区丸の内１－９－２　グラントウキョウサウスタワーB1階（鉄道会館/グランアージュ）",
      "img": "https://imgfp.hotp.jp/IMGH/41/89/P030894189/P030894189_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000010899/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "東京 八重洲 ぐう",
      "address": "東京都中央区八重洲１‐７‐３",
      "img": "https://imgfp.hotp.jp/IMGH/59/85/P012895985/P012895985_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000658869/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "杵屋 八重州北口店",
      "address": "東京都中央区八重洲２-1　八重洲地下街　北1号　地下1階",
      "img": "https://imgfp.hotp.jp/IMGH/37/07/P012313707/P012313707_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000004324/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "角打 丸の内店",
      "address": "東京都千代田区丸の内１-7-5",
      "img": "https://imgfp.hotp.jp/IMGH/88/73/P026558873/P026558873_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000687238/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "東京から揚げバル",
      "address": "東京都千代田区丸の内２－７－２　JPタワーB1",
      "img": "https://imgfp.hotp.jp/IMGH/08/44/P021850844/P021850844_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001118664/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "豚捨 KITTE 丸の内",
      "address": "東京都千代田区丸の内２丁目7-2　KITTE　５階",
      "img": "https://imgfp.hotp.jp/IMGH/79/26/P034577926/P034577926_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001098341/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "すし京辰 東京駅サウスタワー店",
      "address": "東京都千代田区丸の内１－９－２ グラントウキョウサウスタワーB1（鉄道会館/グランアージュ）",
      "img": "https://imgfp.hotp.jp/IMGH/06/61/P014290661/P014290661_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000696632/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "BRUNO ブルーノ 東京 東京駅八重洲店",
      "address": "東京都中央区八重洲１-6-16 H.T八重洲ビル1～3F",
      "img": "https://imgfp.hotp.jp/IMGH/29/21/P022092921/P022092921_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001109927/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "千や 八重洲本店",
      "address": "東京都中央区八重洲１－７－４　ナリカワビル1F・B1F",
      "img": "https://imgfp.hotp.jp/IMGH/70/97/P029917097/P029917097_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000684501/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "Bar&amp;Cafe codename MIXOLOGY ミクソロジー",
      "address": "東京都中央区八重洲１‐６‐１　第三パークビル２Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/26/03/P012952603/P012952603_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000745186/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "個室肉バル Trattoria シバザキ 八重洲店",
      "address": "東京都中央区八重洲１－6-15 キングビル4F",
      "img": "https://imgfp.hotp.jp/IMGH/62/48/P032026248/P032026248_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001203817/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "九州個室居酒屋 博多花蔵 八重洲店",
      "address": "東京都中央区八重洲１－6-15 キングビル4F",
      "img": "https://imgfp.hotp.jp/IMGH/88/15/P031928815/P031928815_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001203813/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "過門香 KITTE丸の内店",
      "address": "東京都千代田区丸の内２-7-2 JPタワー6F",
      "img": "https://imgfp.hotp.jp/IMGH/49/17/P033304917/P033304917_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001019072/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "串武",
      "address": "東京都中央区八重洲１‐６‐１５　アリービル１Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/89/67/P026148967/P026148967_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000229297/?vos=nhppalsa000016",
      "card": "利用不可"
    }, {
      "name": "串粋 くしすい 八重洲",
      "address": "東京都中央区八重洲１‐６‐１５　登代田ビルＢ１Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/05/86/P017890586/P017890586_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000119170/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "隠れ家個室 和食バル 御庭 ONIWA 八重洲店",
      "address": "東京都中央区八重洲１-7-13 大竹ビル第６ビル2Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/84/64/P030048464/P030048464_238.jpg",
      "url": "https://www.hotpepper.jp/strJ001155152/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "だんや 八重洲北口本店",
      "address": "東京都中央区八重洲１－７－５　太田紙興八重洲ビル1F ",
      "img": "https://imgfp.hotp.jp/IMGH/23/62/P029022362/P029022362_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000025094/?vos=nhppalsa000016",
      "card": "利用可"
    }, {
      "name": "居酒屋 ひょっとこ 東京駅 八重洲店",
      "address": "東京都中央区八重洲１‐７‐５　太田紙興ビル２Ｆ",
      "img": "https://imgfp.hotp.jp/IMGH/17/99/P017511799/P017511799_238.jpg",
      "url": "https://www.hotpepper.jp/strJ000056437/?vos=nhppalsa000016",
      "card": "利用可"
    }
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

              <h4>カード{shopInfo.card}</h4>
              {/* <Link to={shopInfo.url} target="_blank">hogehoge</Link> */}
            </div>
          </TinderCard>
        ))}
      </div>
    </React.Fragment>
  )
}

export default TinderCards;