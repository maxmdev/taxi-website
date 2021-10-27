import React, {useState} from "react";

export default function useWindowSize() {
    if (typeof window !== 'undefined') {
        return {
            width: 1200,
            height: 800
        }
    }

    const [windowSize, setWindowSize] = useState();

    function updateWindowSize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    React.useEffect(() => {
        window.addEventListener('resize', updateWindowSize);

        return () => {
            window.removeEventListener('resize', updateWindowSize);
        }
    }, [])

    return windowSize
}