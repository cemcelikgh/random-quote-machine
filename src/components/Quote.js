import { useEffect } from "react";
import quotes from "../data/quotes";
import colors from "../data/colors";

export default function Quote({qi, tci}) {

  useEffect(() => {}, [qi, tci])

  return(
    <div>
      <i className="fa-solid fa-quote-left"></i>
      <p id='text'
        style={{color: colors[tci[tci.length - 1]]}}
      > {quotes[qi[qi.length - 1]].quote} </p>
      <i className="fa-solid fa-quote-right"></i>
      <p id='author'
        style={{color: colors[tci[tci.length - 1]]}}
      >
        - {quotes[qi[qi.length - 1]].author}
      </p>
    </div>
  );

};
