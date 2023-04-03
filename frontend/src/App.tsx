import React from 'react'
import './App.css'
import ArticleHeader from './classfiles/ArticleHeader'
import ArticleMenu from './classfiles/ArticleMenu'
import ArticleFooter from './classfiles/ArticleFooter'
import ArticleMain from './classfiles/ArticleMain'


class ArticleWrapper extends React.Component{
  render(){
    return (
      <div id="wrapper">
        <ArticleHeader />
        <ArticleMain />
        <ArticleFooter />
    </div>

    );
  }

} 

  class Article extends React.Component{

    render() {  
      return (
        <div id='article'>
        <ArticleWrapper />
        <ArticleMenu />
        </div>
      );
    }
  }
  
  // ========================================
  function App() {
    return (
      <Article />
    )
  }


export default App
