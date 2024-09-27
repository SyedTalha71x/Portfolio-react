/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; // Ensure you're importing the right package

const TypedComponent = ({ strings = [] }) => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    // Ensure the strings prop is a valid array
    if (!Array.isArray(strings) || strings.length === 0) {
      console.error("The 'strings' prop should be an array with at least one string.");
      return;
    }

    const options = {
      strings,
      typeSpeed: 55,
      backSpeed: 55,
      loop: true,
    };

    // Initialize the Typed instance
    const typed = new Typed(typedTextRef.current, options);

    // Clean up the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, [strings]);

  return <span className="typed-text" ref={typedTextRef} />;
};

export default TypedComponent;
