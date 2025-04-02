
import Aos from "aos";
import React, { useEffect, useState } from "react";

export default function useWordFade(word = "Word Fade", styleFade = "fade-up") {
  const [elementWordFade, setElementWordFade] = useState("");
  const generateWordFade = (word, styleFade) => {
    var wordArr = word.split("");
    var elm = [];
    elm.push(
      wordArr.map((v, k) => {
        return (
          <span
            key={new Date().getTime + k}
            data-aos={styleFade}
            data-aos-delay={200 * k}
            data-aos-duration="1000"
            data-aos-once={false}
          >
            {v}
          </span>
        );
      })
    );

    return <div className="group-word-fade">{elm}</div>;
  };
    
    useEffect(() => {
        Aos.init();
        setElementWordFade(() => {
            return generateWordFade(word, styleFade);
        });
  }, []);

  return elementWordFade;
}
