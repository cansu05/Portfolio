import { Box, Container, Stack, Typography } from "@mui/material";
import AboutList from "./AboutList";

const PersonalDetails = () => {
  return (
    <Container
      component="section"
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        mt: { xs: 10, lg: 0 },
      }}
    >
      <Typography component="h1" variant="h4" fontWeight={700} sx={{ mb: 2 }}>
        Hakkımda
      </Typography>

      <Stack spacing={3} sx={{ mt: 2 }}>
        <Stack spacing={0.5} alignItems="flex-start">
          <Typography variant="h5" fontWeight={700}>
            CANSU UĞUR
          </Typography>
          <Typography variant="subtitle1" color="text.primary" fontWeight={500}>
            Frontend Developer
          </Typography>
        </Stack>

        <Box>
          <Typography variant="body1" color="text.primary" fontWeight={500}>
            Merhaba, ben kullanıcı odaklı ve performanslı web uygulamaları
            geliştiren bir Frontend Developer&apos;ım. React ve Next.js
            ekosistemiyle çalışarak dashboard&apos;lar, kurumsal paneller ve ürün
            odaklı arayüzler tasarlıyor ve geliştiriyorum.
            <br />
            <br />
            Profesyonel deneyimimde, tasarımın koda dönüştürülmesinden bileşen
            mimarisinin kurulmasına ve backend entegrasyonlarına kadar ürün
            geliştirme sürecinin birçok aşamasında aktif rol aldım.
            Ölçeklenebilir, sürdürülebilir ve gerçek kullanım senaryolarına
            uygun arayüzler üretmeye odaklanıyorum.
            <br />
            <br />
            Teknik yetkinliğimi genişletmek için backend ve mobil geliştirme
            alanlarında da çalışıyorum. Node.js, Express ve React Native ile
            full-stack bakış açımı güçlendirerek ürün geliştirme süreçlerine
            daha bütüncül katkı sağlamayı hedefliyorum.
            <br />
            <br />
            Benim için önemli olan kodun okunabilir, düzenli ve uzun vadede
            sürdürülebilir olması. Ürün geliştirme sürecinde ihtiyacı net analiz
            etmeye, işlevselliği önceliklendirmeye ve arayüzü kullanıcı
            deneyimi açısından tutarlı şekilde tasarlamaya özen gösteriyorum.
          </Typography>
        </Box>

        <AboutList />
      </Stack>
    </Container>
  );
};

export default PersonalDetails;

