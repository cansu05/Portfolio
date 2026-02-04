import portfolio from "../assets/portfolio-image.png";
import Icon from "../components/Icon";
import TypeWriter from "../components/TypeWriter";
import { socials } from "../data";
import { Box, Container, Link, Stack, Typography } from "@mui/material";

const Landing = () => {
  return (
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
        mt: { lg: 0 },
      }}
    >
      <Box>
        <Box
          component="img"
          src={portfolio}
          alt="portfolio"
          sx={{ width: { xs: "100%", md: 500 }, height: "auto" }}
        />
      </Box>

      <Stack spacing={2}>
        <Stack spacing={2} justifyContent="center">
          <Typography variant="h3" fontWeight={900}>
            CANSU UĞUR
          </Typography>
          <TypeWriter text="Front-end Developer" />
          <Typography
            variant="body1"
            color="text.primary"
            fontWeight={500}
            sx={{ letterSpacing: "0.05em", maxWidth: "32rem" }}
          >
            Kullanıcı deneyimini merkeze alan, performanslı ve sürdürülebilir
            web arayüzleri geliştiriyorum. Modern frontend teknolojileriyle
            ölçeklenebilir çözümler üretiyorum.
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} justifyContent="center">
          {socials.map((social) => {
            const { id, href, name } = social;
            return (
              <Link key={id} href={href} target="_blank" rel="noreferrer">
                <Icon name={name} />
              </Link>
            );
          })}
        </Stack>
      </Stack>
    </Container>
  );
};
export default Landing;
