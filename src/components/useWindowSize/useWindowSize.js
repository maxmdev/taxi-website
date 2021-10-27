import React, {useState} from "react";

export default function useWindowSize() {
    const defaultWidth = 1200;
    const defaultHeight = 800;

    const [windowSize, setWindowSize] = useState(() => {
        return {
            width: window.innerWidth || defaultWidth,
            height: window.innerHeight || defaultHeight
        }
    });

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