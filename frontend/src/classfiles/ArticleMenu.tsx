import React from 'react'
class ArticleMenu extends React.Component{

    render() {  
      return (
  <section id="menu">
  
    <section>
      <form className="search" method="get" action="#top">
        <input type="text" name="query" placeholder="Search" />
      </form>
    </section>
  
    <section>
      <ul className="links">
        <li>
          <a href="#top">
            <h3>Lorem ipsum</h3>
            <p>Feugiat tempus veroeros dolor</p>
          </a>
        </li>
        <li>
          <a href="#top">
            <h3>Dolor sit amet</h3>
            <p>Sed vitae justo condimentum</p>
          </a>
        </li>
        <li>
          <a href="#top">
            <h3>Feugiat veroeros</h3>
            <p>Phasellus sed ultricies mi congue</p>
          </a>
        </li>
        <li>
          <a href="#top">
            <h3>Etiam sed consequat</h3>
            <p>Porta lectus amet ultricies</p>
          </a>
        </li>
      </ul>
    </section>
  
    <section>
      <ul className="actions stacked">
        <li><a href="#top" className="button large fit">Log In</a></li>
      </ul>
    </section>
  
  </section>
  
  
      );
    }
  }

  export default ArticleMenu