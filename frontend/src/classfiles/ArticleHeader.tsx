import React from 'react'

class ArticleHeader extends React.Component {
  render() {
    return (
      <header id='header'>
        <h1>
          <a href='index.html'>BipDev</a>
        </h1>
        <nav className='links'>
          <ul>
            <li>
              <a href='#top'>Lorem</a>
            </li>
            <li>
              <a href='#top'>Ipsum</a>
            </li>
            <li>
              <a href='#top'>Feugiat</a>
            </li>
            <li>
              <a href='#top'>Tempus</a>
            </li>
            <li>
              <a href='#top'>Adipiscing</a>
            </li>
          </ul>
        </nav>
        <nav className='main'>
          <ul>
            <li className='search'>
              <a
                className='fa-search'
                href='#search'
              >
                Search
              </a>
              <form
                id='search'
                method='get'
                action='#top'
              >
                <input
                  type='text'
                  name='query'
                  placeholder='Search'
                />
              </form>
            </li>
            <li className='menu'>
              <a
                className='fa-bars'
                href='#menu'
              >
                Menu
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default ArticleHeader
