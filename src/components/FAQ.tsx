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
      {isOpen ? <p>{props.answer}</p> : <></>}
    </div>
  );
};

export default FAQ;
