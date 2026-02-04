import AboutList from "./AboutList";
import { Box, Container, Stack, Typography } from "@mui/material";

const PersonalDetails = () => {
  return (
    <Container
      component="section"
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        mt: { xs: 10, lg: 0 },
      }}
    >
      <Typography variant="h4" fontWeight={900} sx={{ mb: 2 }}>
        Hakkımda
      </Typography>

      <Stack spacing={3} sx={{ mt: 2 }}>
        <Stack spacing={0.5} alignItems="flex-start">
          <Typography variant="h5" fontWeight={900}>
            CANSU UGUR
          </Typography>
          <Typography variant="subtitle1" color="text.primary" fontWeight={500}>
            Frontend Developer
          </Typography>
        </Stack>

        <Box>
          <Typography variant="body1" color="text.primary" fontWeight={500}>
            Merhaba, ben kullanıcı odaklı ve performanslı arayüzler geliştiren
            bir Frontend Developer’ım. React ve Next.js gibi modern web
            teknolojileriyle çalışarak, işlevsel ve sürdürülebilir arayüz
            çözümleri üretiyorum.
            <br /> <br />
            Profesyonel deneyimimde; yönetim panelleri, bileşen kütüphaneleri ve
            ürün odaklı arayüzler geliştirdim. Proje süreçlerinde tasarımın
            uygulanması, bileşen mimarisinin kurulması ve backend
            entegrasyonları üzerine aktif rol aldım. Ayrıca web sitesi tasarlama
            ve görsel içerik hazırlama konularında da çalıştım.
            <br /> <br />
            Bunun yanında, teknik yetkinliğimi derinleştirmek ve ürün geliştirme
            sürecine daha bütüncül katkı sağlayabilmek için backend ve mobil
            geliştirme alanlarında da çalışmalar yapıyorum. Node.js, Express ve
            React Native gibi teknolojilerle stack’imi genişletiyorum.
            <br /> <br />
            Benim için önemli olan; kodun okunabilir, düzenli ve uzun vadede
            sürdürülebilir olması. Ürün geliştirme sürecinde ihtiyacı net analiz
            etmeye, işlevselliği önceliklendirmeye ve arayüzü kullanıcı deneyimi
            açısından tutarlı şekilde tasarlamaya özen gösteriyorum.
          </Typography>
        </Box>

        <AboutList />
      </Stack>
    </Container>
  );
};
export default PersonalDetails;
