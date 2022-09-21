import { useState, useEffect } from 'react';

function getRefDimensions(ref) {
    if (typeof ref !== 'undefined') {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    return false;
}

export default function useWindowDimensions({ props }) {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const { ref } = props;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                setWindowDimensions(getRefDimensions(ref));
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [ref]);

    return windowDimensions;
}
