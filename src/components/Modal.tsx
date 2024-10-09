import { useState } from 'react'
  
const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
    <>
    {isOpen ? <div className="modal">
        <div onClick={toggle}>
            <button onClick={toggle}>X</button>
        </div>
    </div> :
    <button onClick={toggle}>Trigger Modal</button>}
    </>
  )
}

export default Modal