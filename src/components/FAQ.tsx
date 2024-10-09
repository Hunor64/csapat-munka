type FAQProp = {
    question: string,
    answer: string
}

const faq = (props:FAQProp) => {
  return (
    <div className='faq-element'>
      <div>
        <h1>
            {props.question}
        </h1>
      </div>
        <p>
            {props.answer}
        </p>
    </div>
  )
}

export default faq