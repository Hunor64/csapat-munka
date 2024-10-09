import { useState } from 'react';
const FidgetSpinner = () => {
    const [spinning, setSpinning] = useState(false);

    const handleClick = () => {
        setSpinning(true);
        setTimeout(() => setSpinning(false), 10000);
    };

    return (
        <img
            alt="finger spinner"
            src="./src/spina.pgn"
            onClick={handleClick}
            style={{
                animation: spinning ? 'spin 10s linear' : 'none'
            }}
        >

        </img>
    );
}

export default FidgetSpinner