import { Box, Container, Link, Stack, Typography } from "@mui/material";
import portfolio from "../assets/portfolio-image.png";
import Icon from "../components/Icon";
import Seo from "../components/Seo";
import TypeWriter from "../components/TypeWriter";
import { socials } from "../data";

const HERO_WIDTH = 362;
const HERO_HEIGHT = 293;

const Landing = () => {
  return (
    <>
      <Seo
        title="Ana Sayfa | Portföy"
        description="Frontend developer portföy ana sayfası."
      />
      <Container
        component="section"
        maxWidth="xl"
        sx={{
          minHeight: "calc(100vh - 80px)",
          height: "100vh",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: "40px", lg: "80px" },
        }}
      >
        <Box>
          <Box
            component="img"
            src={portfolio}
            alt="Cansu Uğur portföy görseli"
            width={HERO_WIDTH}
            height={HERO_HEIGHT}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            sx={{ width: { xs: "100%", md: 500 }, height: "auto" }}
          />
        </Box>

        <Stack spacing={2}>
          <Stack spacing={2} justifyContent="center">
            <Typography component="h1" variant="h3" fontWeight={700}>
              CANSU UĞUR
            </Typography>
            <TypeWriter text="Front-end Developer" />
            <Typography
              variant="body1"
              color="text.primary"
              fontWeight={500}
              sx={{ letterSpacing: "0.05em", maxWidth: "32rem" }}
            >
              Kullanıcıyı merkeze alan, performanslı ve sürdürülebilir web
              arayüzleri geliştiriyorum. Modern frontend teknolojileriyle
              ölçeklenebilir çözümler üretiyorum.
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} justifyContent="center">
            {socials.map(({ id, href, name }) => (
              <Link
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                title={name}
              >
                <Icon name={name} />
              </Link>
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Landing;
