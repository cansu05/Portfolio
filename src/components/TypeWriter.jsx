import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

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

  return (
    <Typography variant="h6" fontWeight={500} sx={{ letterSpacing: "0.04em" }}>
      {displayText}
    </Typography>
  );
};

TypeWriter.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TypeWriter;
