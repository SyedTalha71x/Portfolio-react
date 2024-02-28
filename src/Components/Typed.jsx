import React, { useEffect, useRef } from 'react';
import typo from 'typed.js';

const Typed = ({ strings }) => {
    const typedTextRef = useRef(null);

    useEffect(() => {
        const options = {
            strings,
            typeSpeed: 55,
            backSpeed: 55,
            loop: true
        };

        const typed = new typo(typedTextRef.current, options);

        return () => {
            typed.destroy();
        };
    }, [strings]);

    return <span className="typedtext " ref={typedTextRef} />;
}
export default Typed