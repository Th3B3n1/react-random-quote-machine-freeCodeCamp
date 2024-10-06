import './App.css';
import { useEffect, useState } from 'react';
import { RandomInt } from './RandomInt';
import twitterImg from './assets/twitter.png';

function App() 
{
  const [colors] = useState(new Array<string>(
    "rgb(71, 46, 50)",
    "rgb(119, 177, 169)",
    "rgb(22, 160, 133)",
    "rgb(44, 62, 80)"
  ));
  const [quotes] = useState([
    {author: "Maya Angelou", quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away."},
    {author: "Mark Twain", quote: "The two most important days in your life are the day you are born and the day you find out why."},
    {author: "Amelia Earhart", quote: "The most difficult thing is the decision to act, the rest is merely tenacity."},
    {author: "Unknown", quote: "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground."},
  ]);
  const [color, setColor] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  function setNewQuote()
  {
    let quoteIndex = RandomInt(0, quotes.length);
    setColor(colors[RandomInt(0, colors.length)]);
    setQuote(quotes[quoteIndex].quote);
    setAuthor(quotes[quoteIndex].author);
  }

  useEffect(setNewQuote);

  return (
    <>
      <div id="quote-box">
        <h1 id="text" style={{color: color}}>{quote}</h1>
        <p id="author" style={{color: color}}>- {author}</p>
        <button id="new-quote" onClick={setNewQuote}>New quote</button>
        <button id="tweet-button"><a id="tweet-quote" href="twitter.com/intent/tweet"><img src={twitterImg} alt="" /></a></button>
      </div>
      <p id="site-author"><a href="https://github.com/Th3B3n1/" target="_blank">by Th3B3n1</a></p>
    </>

  )
}

export default App
