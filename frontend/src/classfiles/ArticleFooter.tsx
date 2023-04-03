import React from 'react'
class ArticleFooter extends React.Component{

    render() {  
      return (
  <footer id='footer'>
  <ul className="icons">
          <li><a href="#top" className="icon brands fa-twitter">Twitter</a></li>
          <li><a href="#top" className="icon brands fa-facebook-f">Facebook</a></li>
          <li><a href="#top" className="icon brands fa-instagram">Instagram</a></li>
          <li><a href="#top" className="icon solid fa-rss">RSS</a></li>
          <li><a href="#top" className="icon solid fa-envelope">Email</a></li>
      </ul>
      <p className="copyright">BipDev<a href="#top">リンク？</a>. Images: <a href="#top">リンク2</a>.</p>
  </footer>
      );
    }
  }
  
  export default ArticleFooter