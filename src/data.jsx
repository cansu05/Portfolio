import { nanoid } from "nanoid";

import rickAndMorty from "./assets/rickAndMorty.png";

import scandleted1 from "./assets/images/scandleted/scandleted-1.png";
import scandleted2 from "./assets/images/scandleted/scandleted-2.png";
import scandleted3 from "./assets/images/scandleted/scandleted-3.png";
import scandleted4 from "./assets/images/scandleted/scandleted-4.png";
import scandleted5 from "./assets/images/scandleted/scandleted-5.png";

import taskManagement from "./assets/taskManagement.jpeg";

import wessexDashboard1 from "./assets/images/wessex-dashboard/dashboard1.png";
import wessexDashboard2 from "./assets/images/wessex-dashboard/dashboard2.png";
import wessexDashboard3 from "./assets/images/wessex-dashboard/dashboard3.png";
import wessexDashboard4 from "./assets/images/wessex-dashboard/dashboard4.png";
import wessexDashboard5 from "./assets/images/wessex-dashboard/dashboard5.png";
import wessexDashboard6 from "./assets/images/wessex-dashboard/dashboard6.png";
import wessexDashboard7 from "./assets/images/wessex-dashboard/dashboard7.png";
import wessexDashboard8 from "./assets/images/wessex-dashboard/dashboard8.png";
import wessexDashboard9 from "./assets/images/wessex-dashboard/dashboard9.png";
import wessexDashboard10 from "./assets/images/wessex-dashboard/dashboard10.png";
import wessexDashboard11 from "./assets/images/wessex-dashboard/dashboard11.png";
import wessexDashboard12 from "./assets/images/wessex-dashboard/dashboard12.png";
import wessexDashboard13 from "./assets/images/wessex-dashboard/dashboard13.png";
import wessexDashboard14 from "./assets/images/wessex-dashboard/dashboard14.png";
import wessexDashboard15 from "./assets/images/wessex-dashboard/dashboard15.png";

export const links = [
  {
    id: nanoid(),
    href: "/",
    text: "Anasayfa",
    iconName: "home",
  },
  {
    id: nanoid(),
    href: "about",
    text: "Hakkımda",
    iconName: "person",
  },

  {
    id: nanoid(),
    href: "projects",
    text: "Projelerim",
    iconName: "work",
  },
];

export const experienceData = [
  {
    year: "08.25 - halen",
    position: "Frontend Developer",
    company: "Areka Carbon Hub",
  },
  {
    year: "11.23 - 01.25",
    position: "Frontend Developer",
    company: "Veriland Consulting Ltd.",
  },
  {
    year: "09.23 - 10.23",
    position: "Volunteer Frontend Developer",
    company: "Fogo Team",
  },
  {
    year: "05.23 - 10.23",
    position: "Frontend Developer",
    company: "Altıncı Kat",
  },
  {
    year: "09.22 - 11.21",
    position: "Intern R&D Engineer",
    company: "Mechanica",
  },
];

export const aboutData = {
  Telefon: "+90 531 509 93 80",
  Email: "cansuugurr0@gmail.com",
  Adres: "Ankara",
};

export const socials = [
  {
    id: nanoid(),
    href: "https://github.com/cansu05",
    name: "github",
  },
  {
    id: nanoid(),
    href: "https://www.linkedin.com/in/cansuugur/",
    name: "linkedin",
  },
  {
    id: nanoid(),
    href: "https://drive.google.com/file/d/1hdn7k9j6PPJDl1kf_rXiPtRLZWZ6O-jr/view?usp=sharing",
    name: "resume",
  },
];

export const skillsData = [
  {
    category: "Frontend Geliştirme",
    skills: [
      "HTML, CSS, JavaScript, TypeScript",
      "React.js, Next.js",
      "Redux Toolkit, Zustand",
      "Responsive Web Design",
    ],
  },
  {
    category: "Stil & UI Kütüphaneleri",
    skills: ["CSS, Sass", "Tailwind CSS, Bootstrap", "Material UI, shadcn/ui"],
  },
  {
    category: "Backend & Veri Katmanı",
    skills: [
      "API Entegrasyonu",
      "Middleware Geliştirme",
      "PostgreSQL",
      "Prisma ORM",
    ],
  },
  {
    category: "UI/UX & Tasarım",
    skills: ["Figma", "Adobe Photoshop", "Canva"],
  },
  {
    category: "Ek Teknolojiler",
    skills: ["Node.js", "Express.js", "React Native"],
  },
];

export const projects = [
  {
    id: nanoid(),
    images: [scandleted1, scandleted2, scandleted3, scandleted4, scandleted5],
    url: "https://scandleted-five.vercel.app/",
    github: "https://github.com/cansu05/Scandleted",
    title: "Scandleted – E-Ticaret Web Uygulaması",
    text: "Mum ürünlerinin sergilenmesi ve satışa sunulması amacıyla mobil uyumlu, modern bir e-ticaret web uygulaması geliştirilmiştir. Uygulama; ürün listeleme, ürün detay görüntüleme ve sepet üzerinden satın alma akışını kapsayan uçtan uca bir alışveriş deneyimi sunmaktadır. Proje Next.js 15 ve TypeScript ile geliştirilmiş, veri yönetimi için Prisma ve Supabase entegre edilmiştir. Kullanıcı kimlik doğrulama süreçleri Clerk ile sağlanmış, arayüz Tailwind CSS ve shadcn/ui kullanılarak tasarlanmıştır. Uygulama, yüksek performans ve ölçeklenebilirlik hedeflenerek Vercel üzerinde yayına alınmıştır.",
  },
  {
    id: nanoid(),
    images: [rickAndMorty],
    url: "https://ricky-and-morty-omega-seven.vercel.app/character",
    github: "https://github.com/cansu05/RickyAndMorty",
    title: "Rick and Morty – Karakter Kataloğu Uygulaması",
    text: "Rick and Morty açık API’si kullanılarak geliştirilen, karakter listeleme ve detay inceleme odaklı bir web uygulamasıdır. Proje Next.js 15 ve TypeScript ile geliştirilmiş; global state yönetimi için Redux Toolkit kullanılmıştır. Dinamik filtreleme ve sayfalama yapıları uygulanarak kullanıcı deneyimi güçlendirilmiş, responsive tasarım prensipleri doğrultusunda farklı cihazlara uyum sağlanmıştır. Uygulama Vercel üzerinde yayına alınmıştır.",
  },
  {
    id: nanoid(),
    images: [taskManagement],
    url: "",
    github: "https://github.com/cansu05/Task-Flow",
    title: "TaskFlow – Görev Yönetim Uygulaması",
    text: "Ekip içi iş birliğini destekleyen, sürükle-bırak özellikli modern bir görev yönetim web uygulaması geliştirilmiştir. Uygulama; görev oluşturma, düzenleme ve görevlerin farklı durumlar arasında taşınmasını destekleyen bir yapı sunmaktadır. Proje Next.js ve TypeScript ile geliştirilmiş, state yönetimi için Zustand tercih edilmiştir. Arayüz Material-UI ile tasarlanmış, performans ve kullanım kolaylığı ön planda tutulmuştur.",
  },
  {
    id: nanoid(),
    images: [
      wessexDashboard1,
      wessexDashboard2,
      wessexDashboard3,
      wessexDashboard4,
      wessexDashboard5,
      wessexDashboard6,
      wessexDashboard7,
      wessexDashboard8,
      wessexDashboard9,
      wessexDashboard10,
      wessexDashboard11,
      wessexDashboard12,
      wessexDashboard13,
      wessexDashboard14,
      wessexDashboard15,
    ],
    url: "https://searches.csu.azureapp.net/user/login",
    github: "",
    title: "Wessex Searches – Kurumsal Dashboard Uygulaması",
    text: "Veriland bünyesinde, İngiltere merkezli Wessex Searches firması için geliştirilen web tabanlı kurumsal bir dashboard uygulamasıdır. Uygulama; çok adımlı kullanıcı kayıt süreci, harita üzerinden lokasyon seçimi, ürün belirleme, sepet ve ödeme adımlarını kapsayan uçtan uca bir sipariş akışı sunmaktadır. Dashboard tarafında sipariş yönetimi, müşteri taleplerinin (queries/cases) oluşturulması ve takibi, kullanıcı ve şube yönetimi ile fatura ve ödeme süreçlerine yönelik operasyonel modüller geliştirilmiştir. Proje Next.js ve TypeScript kullanılarak geliştirilmiş; state yönetimi için Zustand ve Context API birlikte kullanılmıştır. Arayüz Tailwind CSS ve Material-UI ile modüler ve ölçeklenebilir bir mimariyle tasarlanmıştır.",
  },
];
