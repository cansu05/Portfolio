import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { alpha } from "@mui/material/styles";
import {
  Box,
  Button,
  IconButton,
  MobileStepper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ProjectCard = ({ project, priority = false }) => {
  const { title, images = [], text, url, github } = project;
  const [activeStep, setActiveStep] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(images.length > 0);
  const imageRef = useRef(null);
  const maxSteps = images.length || 0;
  const IMAGE_ASPECT_RATIO = "16 / 10";
  const navButtonSx = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    width: 36,
    height: 36,
    bgcolor: (theme) => alpha(theme.palette.background.default, 0.9),
    border: (theme) =>
      `1px solid ${alpha(theme.palette.background.paper, 0.45)}`,
    "&:hover": { bgcolor: "primary.main" },
  };
  const actionButtonSx = {
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
  };

  useEffect(() => {
    if (activeStep > Math.max(maxSteps - 1, 0)) {
      setActiveStep(0);
    }
  }, [activeStep, maxSteps]);

  useEffect(() => {
    const currentImage = images[activeStep];
    if (!currentImage) {
      setIsImageLoading(false);
      return;
    }

    setIsImageLoading(true);

    // Cached images can skip onLoad in dev StrictMode; handle it explicitly.
    if (imageRef.current?.complete) {
      setIsImageLoading(false);
    }
  }, [activeStep, images]);

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
            overflow: "hidden",
            width: "100%",
            minWidth: 0,
            borderRadius: 1.5,
            aspectRatio: IMAGE_ASPECT_RATIO,
            flexShrink: 0,
          }}
        >
          <Box
            component="img"
            ref={imageRef}
            src={images[activeStep]}
            alt={title}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "low"}
            onLoad={() => setIsImageLoading(false)}
            onError={() => setIsImageLoading(false)}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              opacity: isImageLoading ? 0 : 1,
              transition: "opacity 240ms ease",
            }}
          />
          {isImageLoading && (
            <Skeleton
              variant="rectangular"
              animation="wave"
              sx={{
                position: "absolute",
                inset: 0,
                bgcolor: (theme) =>
                  alpha(theme.palette.background.default, 0.22),
              }}
            />
          )}
          {maxSteps > 1 && (
            <>
              <IconButton
                type="button"
                onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
                aria-label="Previous image"
                disabled={activeStep === 0}
                sx={{
                  left: 8,
                  ...navButtonSx,
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
                  right: 8,
                  ...navButtonSx,
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
            mt: 1.25,
            bgcolor: "transparent",
            width: "100%",
            justifyContent: "center",
            "& .MuiMobileStepper-dots": { margin: 0 },
            "& .MuiMobileStepper-dot": {
              bgcolor: (theme) => alpha(theme.palette.common.white, 0.5),
            },
            "& .MuiMobileStepper-dotActive": {
              bgcolor: "background.default",
            },
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
          mt: 1.5,
          px: { xs: 0, sm: 2 },
          gap: 1.25,
        }}
      >
        <Box>
          <Typography
            component="h2"
            variant="h6"
            fontWeight={700}
            color="common.white"
            sx={{
              minHeight: "2.3rem",
              textAlign: "center",
              mb: 1,
              lineHeight: 1.25,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="common.white"
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
              sx={actionButtonSx}
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
              sx={actionButtonSx}
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
  priority: PropTypes.bool,
};

export default ProjectCard;


