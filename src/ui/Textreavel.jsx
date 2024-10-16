import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Textreavel = (props) => {
  const text = props.words;
  const wordsArray = text.split(" ");


    useGSAP(() => {
      gsap.fromTo(
        "#text",
        {
          opacity: 0,
          x: 20,
        },
        {
          delay: 0.5,
          opacity: 1,
          x: 0,
          stagger: 0.2,
        }
      );
    });

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, id) => {
          return (
            <span
              key={id}
              className={`${
                id == props.textColor ? "linear-gradient-sekerliyogurtt-text": "text-black"
              }`}
              id={props.id}
            >
              {word}{" "}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="my-2">
        <div className={`leading-snug tracking-wide ${props.otherclass}`}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default Textreavel;