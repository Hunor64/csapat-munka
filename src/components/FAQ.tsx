import { useState } from "react";

type FAQProp = {
  question: string;
  answer: string;
};

const FAQ = (props: FAQProp) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="faq-element">
      <div>
        <button onClick={toggle}>⌄</button>
        <h1>{props.question}</h1>
      </div>
      <p style={{
        // height: isOpen ? Math.floor(props.answer.length/50) + "em" : 0
        height: isOpen ? "200px" : 0
      }}>
        {props.answer}
      </p>
    </div>
  )
}

export default FAQ