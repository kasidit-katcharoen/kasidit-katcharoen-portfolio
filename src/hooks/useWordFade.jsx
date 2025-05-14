import Aos from "aos";
import React, { useEffect, useState } from "react";

export default function useWordFade(
  word = "Word Fade",
  styleFade = "fade-in",
  delay = 200
) {
  const [elementWordFade, setElementWordFade] = useState("");
  function getRandomText() {
    const animations = ["fade-in", "fade-left", "fade-down", "fade-right"];
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
  }
  const generateWordFade = (word, styleFade) => {
    var wordArr = word.split("");
    var elm = [];
    elm.push(
      wordArr.map((v, k) => {
        return (
          <span
            key={new Date().getTime + k}
            data-aos={styleFade == "random" ? getRandomText() : styleFade}
            data-aos-delay={delay * k}
            data-aos-duration="500"
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
