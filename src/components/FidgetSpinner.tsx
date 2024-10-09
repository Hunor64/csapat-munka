import { useState } from 'react';
const FidgetSpinner = () => {
    const [spinning, setSpinning] = useState(false);

    const handleClick = () => {
        setSpinning(true);
        setTimeout(() => setSpinning(false), 1000);
    };

    return (
        <img
            alt="finger spinner"
            src="./src/spina.pgn"
            onClick={handleClick}
            style={{
                animation: spinning ? 'spin 1s linear' : 'none'
            }}
        >

        </img>
    );
}

export default FidgetSpinner