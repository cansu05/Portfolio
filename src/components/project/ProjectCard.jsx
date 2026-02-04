import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  MobileStepper,
  Stack,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ProjectCard = ({ project }) => {
  const { title, images = [], text, url, github } = project;
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length || 0;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        bgcolor: "primary.main",
        p: { xs: 2, sm: 2.5 },
        width: "100%",
        minWidth: 0,
        maxWidth: "100%",
        overflow: "hidden",
        height: { xs: "auto", md: "100%" },
      }}
    >
      {images.length > 0 && (
        <Box
          sx={{
            position: "relative",
            borderRadius: 2,
            overflow: "hidden",
            height: { xs: 180, sm: 220, md: 280 },
            width: "100%",
            minWidth: 0,
          }}
        >
          <LazyLoadImage
            src={images[activeStep]}
            alt={title}
            effect="blur"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          {maxSteps > 1 && (
            <>
              <IconButton
                type="button"
                onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
                aria-label="Previous image"
                disabled={activeStep === 0}
                sx={{
                  position: "absolute",
                  left: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  width: 36,
                  height: 36,
                  bgcolor: "rgba(223, 213, 201, 0.9)",
                  border: "1px solid rgba(144, 130, 117, 0.4)",
                  "&:hover": { bgcolor: "primary.main" },
                }}
              >
                <ChevronLeftIcon sx={{ color: "secondary.main" }} />
              </IconButton>

              <IconButton
                type="button"
                onClick={() =>
                  setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1))
                }
                aria-label="Next image"
                disabled={activeStep === maxSteps - 1}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  width: 36,
                  height: 36,
                  bgcolor: "rgba(223, 213, 201, 0.9)",
                  border: "1px solid rgba(144, 130, 117, 0.4)",
                  "&:hover": { bgcolor: "primary.main" },
                }}
              >
                <ChevronRightIcon sx={{ color: "secondary.main" }} />
              </IconButton>
            </>
          )}
        </Box>
      )}
      {maxSteps > 1 && (
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            mt: 1,
            bgcolor: "transparent",
            width: "100%",
            justifyContent: "center",
            "& .MuiMobileStepper-dots": { margin: 0 },
            "& .MuiMobileStepper-dot": { bgcolor: "rgba(255, 255, 255, 0.5)" },
            "& .MuiMobileStepper-dotActive": { bgcolor: "#DFD5C9" },
          }}
          nextButton={null}
          backButton={null}
        />
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 1,
          mt: 2,
          px: { xs: 0, sm: 2 },
        }}
      >
        <Box>
          <Typography
            variant="h6"
            fontWeight={900}
            color="#fff"
            sx={{
              minHeight: "2.3rem",
              textAlign: "center",
              mb: { xs: 1, md: 0 },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="#fff"
            fontWeight={500}
            sx={{
              letterSpacing: "0.03em",
              fontSize: { xs: 14, sm: 16 },
            }}
          >
            {text}
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={1.5}
          sx={{ mt: 2.5, flexWrap: "wrap", rowGap: 1.5 }}
        >
          {url && (
            <Button
              component="a"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                minWidth: 120,
                px: 2,
                py: 1.25,
                bgcolor: "background.default",
                color: "text.primary",
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 2,
                textTransform: "none",
                "&:hover": { bgcolor: "secondary.main" },
              }}
            >
              Canlı Site
            </Button>
          )}
          {github && (
            <Button
              component="a"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                minWidth: 120,
                px: 2,
                py: 1.25,
                bgcolor: "background.default",
                color: "text.primary",
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 2,
                textTransform: "none",
                "&:hover": { bgcolor: "secondary.main" },
              }}
            >
              Kaynak Kod
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
    github: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
