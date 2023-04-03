import React from 'react'
class ArticleMain extends React.Component{
    render() { 
      return (
        <div id="main">
          <article className="post">
            <header>
              <div className="title">
                <h2><a href="#top">記事タイトルを読み込む。</a></h2>
              </div>
              <div className="meta">
                <time className="published" dateTime="2015-11-02">2023/11/11</time>
                <time className="published" dateTime="2015-11-02">2023/11/11</time>
                <a href="#top" className="author"><span className="name">name name</span><img src="" alt="顔画像" /></a>
              </div>
            </header>
            
            <p>私はその人を常に先生と呼んでいた。</p>
            <p>だからここでもただ先生と書くだけで本名は打ち明けない。</p>
            <p>これは世間を憚かる遠慮というよりも、その方が私にとって自然だからである。</p>
            <p>私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。</p>
            <p>筆を執っても心持は同じ事である。</p>
            <p>よそよそしい頭文字などはとても使う気にならない。</p>
            <p>私が先生と知り合いになったのは鎌倉である。</p>
            <p>その時私はまだ若々しい書生であった。</p>
            <p>暑中休暇を利用して海水浴に行った友達からぜひ来いという端書を受け取ったので、私は多少の金を工面して、出掛ける事にした。</p>
            <p>私は金の工面に二、三日を費やした。</p>
            <p>ところが私が鎌倉に着いて三日と経たないうちに、私を呼び寄せた友達は、急に国元から帰れという電報を受け取った。</p>
            <p>電報には母が病気だからと断ってあったけれども友達はそれを信じなかった。</p>
            <p>友達はかねてから国元にいる親たちに勧まない結婚を強いられていた。</p>
            <p>彼は現代の習慣からいうと結婚するにはあまり年が若過ぎた。</p>
            <p>それに肝心の当人が気に入らなかった。</p>
            <p>それで夏休みに当然帰るべきところを、わざと避けて東京の近くで遊んでいたのである。</p>
            <p>彼は電報を私に見せてどうしようと相談をした。</p>
  
            <span className="image featured"><img src="" alt="画像を入れる場合" /></span>
  
            <footer>
              <ul className="stats">
                <li><a href="#top">General</a></li>
                <li><a href="#top" className="icon solid fa-heart">♡28</a></li>
                <li><a href="#top" className="icon solid fa-comment">💬128</a></li>
              </ul>
            </footer>
          </article>
  
      </div>
                );
    
  }}

  export default ArticleMain