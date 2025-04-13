import Aos from "aos";
import React, { useEffect, useState } from "react";

export default function useWordFade(
  word = "Word Fade",
  styleFade = "fade-up",
  delay = 200
) {
  const [elementWordFade, setElementWordFade] = useState("");
  function getRandomText() {
    const animations = ["fade-up", "fade-left", "fade-down", "fade-right"];
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
            data-aos-duration="1000"
            data-aos-once={true}
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
