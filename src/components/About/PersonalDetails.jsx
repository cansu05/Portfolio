import AboutList from "./AboutList";

const PersonalDetails = () => {
  return (
    <section className=" max-w-7xl align-element flex flex-col items-start justify-center  lg:mt-0 mt-20">
      <h1 className="text-3xl font-black mb-4">Hakkımda</h1>

      <div className="flex flex-col gap-5 mt-5">
        <div className="flex flex-col self-start">
          <div className="flex flex-col items-start justify-start gap-1">
            <h5 className="text-xl font-black">CANSU UGUR</h5>
            <h6 className="text-gray-800 font-medium">Frontend Developer</h6>
          </div>
        </div>

        <div className="mb-2">
          <p className="text-gray-800 text-base font-medium ">
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
            Benim için önemli olan; kodun okunabilir, düzenli ve uzun vadede
            sürdürülebilir olması. Ürün geliştirme sürecinde ihtiyacı net analiz
            etmeye, işlevselliği önceliklendirmeye ve arayüzü kullanıcı deneyimi
            açısından tutarlı şekilde tasarlamaya özen gösteriyorum.
          </p>
        </div>
        <AboutList />
      </div>
    </section>
  );
};
export default PersonalDetails;
