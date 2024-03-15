import './App.css';
import { useEffect, useState } from 'react';
import News from './news';

function App() {
  
  let  [articles, setArticles]= useState([]);
  let [category, setCategory]= useState("india")

  useEffect(() => {

    fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=c4afaf3d4c9c44498993cf67ab285b5f`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[category])

  return (
    <div className="App">
      <header className='header'>

        <h1>Parso Tak</h1>
        <input 
  type='text' 
  onChange={(event) => {
    setCategory(event.target.value !== "" ? event.target.value : "india");
  }} 
  placeholder='search News'
/>

      </header>
      <section className='news-articles'>
  {articles && articles.length !== 0 ? (
    
    articles.map((article, index) => (
      <News key={index} article={article} />
    ))
  ) : (
    <h3>No news Found for searched</h3>
  )}
</section>
      </div>
  );
}

export default App;
