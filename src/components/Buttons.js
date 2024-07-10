import { useEffect } from "react";
import quotes from "../data/quotes";
import colors from "../data/colors";

export default function Buttons({randomValue, qi, tci}) {

  const quo = quotes[qi[qi.length - 1]].quote.replace(' ', '%20');
  const aut = quotes[qi[qi.length - 1]].author.replace(' ', '%20');

  useEffect(() => {}, [qi, tci]);

  return(
    <div className='buttons'>
      <div>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?hashtags=quotes&text=%22${quo}%22%20-%20${aut}`}
        rel="noreferrer"
        target="_blank"
      >
        <i className="fa-brands fa-square-twitter"
          style={{color: colors[tci[tci.length - 1]]}}
        ></i>
      </a>
      <i className="fa-brands fa-square-tumblr"
        style={{color: colors[tci[tci.length - 1]]}}
      ></i>
      </div>
      <button
        id="new-quote"
        style={{backgroundColor: colors[tci[tci.length - 1]]}}
        onClick={() => {
          randomValue('quote', 13, qi);
          randomValue('color', 9, tci);
        }}
      >New quote</button>
    </div>
  );

};
