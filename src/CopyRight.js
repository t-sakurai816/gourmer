import React from 'react';
import './CopyRight.css'

const CopyRight = () => {
  return (
    <div>
      <div className="copyRight">
        <p>ホットペッパーグルメのAPIからデータを取得しています。</p>
        <p>そのうち現在地をもとに探せるようにします</p>
        <p>スマホだとお店のURLがクリックできなくなっています。そのうち対応します</p>
        <div className="hotpaper">
          <a href="http://webservice.recruit.co.jp/"><img src="http://webservice.recruit.co.jp/banner/hotpepper-m.gif" alt="ホットペッパー Webサービス" width="88" height="35" border="0" title="ホットペッパー Webサービス" target="_blank" rel="noopener noreferrer"/></a>
        </div>
        <div className="github_logo">
          <a href="https://github.com/t-sakurai816/query" target="_blank" rel="noopener noreferrer"><img
            alt="github-logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
            height="40px" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default CopyRight;