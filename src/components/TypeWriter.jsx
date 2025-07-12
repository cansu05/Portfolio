import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TypeWriter = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <h3 className="text-xl font-medium tracking-wide">{displayText}</h3>;
};

TypeWriter.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TypeWriter;
