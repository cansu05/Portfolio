import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const TypeWriter = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayText("");
    setIndex(0);
  }, [text]);

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
    <Typography
      component="p"
      variant="h6"
      fontWeight={500}
      sx={{
        letterSpacing: "0.04em",
        minHeight: "1.5em",
        minWidth: `${text.length}ch`,
      }}
    >
      {displayText}
    </Typography>
  );
};

TypeWriter.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TypeWriter;
