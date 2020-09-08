import React, { useState, /*useEffect*/ } from 'react';
import TinderCard from 'react-tinder-card';
// import database from './firebase'
import './TinderCards.css'

const TinderCards = () => {
  const [shopInfos, /*setshopInfos*/] = useState([
    {
      name: '天喜代 東京駅グランルーフ店',
      imgUrl: 'https://imgfp.hotp.jp/IMGH/10/20/P022161020/P022161020_238.jpg',
      hpUrl: 'https://www.hotpepper.jp/strJ001038697/?vos=nhppalsa000016',
      place: '東京都千代田区丸の内１－９－１　グランルーフＢ１',
      card: '利用可'
    },
    {
      name: 'はせがわ酒店 東京駅グランスタ店',
      imgUrl: 'https://imgfp.hotp.jp/IMGH/81/68/P012258168/P012258168_238.jpg',
      hpUrl: 'https://www.hotpepper.jp/strJ000699253/?vos=nhppalsa000016',
      place: '東京都千代田区丸の内１-9-1　JR東京駅構内地下1F',
      card: '利用可'
    },
    {
      name: 'Japanese Malt Whisky SAKURA グランスタ東京店',
      imgUrl: 'https://imgfp.hotp.jp/IMGH/48/66/P036294866/P036294866_238.jpg',
      hpUrl: 'https://www.hotpepper.jp/strJ001249579/?vos=nhppalsa000016',
      place: '東京都千代田区丸の内１-9-1 JR東日本東京駅改札内 グランスタ東京地下1階',
      card: '利用可'
    },
    {
      name: '果実園 東京店',
      imgUrl: 'https://imgfp.hotp.jp/IMGH/97/48/P023319748/P023319748_238.jpg',
      hpUrl: 'https://www.hotpepper.jp/strJ001011923/?vos=nhppalsa000016',
      place: '東京都千代田区丸の内１-9-1 東京駅　改札外 1F キッチンストリート',
      card: '利用可'
    },
    {
      name: 'マンゴツリーキッチン グランスタ',
      imgUrl: 'https://imgfp.hotp.jp/IMGH/26/18/P017032618/P017032618_238.jpg',
      hpUrl : 'https://www.hotpepper.jp/strJ001026595/?vos=nhppalsa000016',
      place : '東京都千代田区丸の内１-9-1　ＪＲ東日本東京駅構内B1GRANSTA内',
      card : '利用不可'
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

  //Piece of code which runs based on a condition
  // useEffect(() => {
  //   //this is where the code runs...

  //   const unsubscribe = database
  //     .collection('shopInfos')
  //     .onSnapshot((snapshot) =>
  //       setshopInfos(snapshot.docs.map(doc => doc.data()))
  //     );

  //   return () => {
  //     //this is cleanup...
  //     // unsubscribe();
  //   };
  // }, []);

  // BAD
  // const shopInfos = [];
  // shopInfos.push('sonny', 'qazi')

  // GOOD(Push to an array in React)
  // setshopInfos([...shopInfos, 'sonny','qazi'])

  return (
    <div>
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
              style={{ backgroundImage: `url(${shopInfo.imgUrl})` }}
              className="card"
            >
              <h3>{shopInfo.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="swipeDirection">
        {/* <p>hoge</p> */}
        <p></p>
      </div>
    </div>
  )
}

export default TinderCards;