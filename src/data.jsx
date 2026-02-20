import { nanoid } from "nanoid";

import rickAndMorty from "./assets/rickAndMorty.png";

import scandleted1 from "./assets/images/scandleted/scandleted-1.png";
import scandleted2 from "./assets/images/scandleted/scandleted-2.png";
import scandleted3 from "./assets/images/scandleted/scandleted-3.png";
import scandleted4 from "./assets/images/scandleted/scandleted-4.png";
import scandleted5 from "./assets/images/scandleted/scandleted-5.png";

import lilyaEstate1 from "./assets/images/realEstate/lilya-estate-1.png";
import lilyaEstate2 from "./assets/images/realEstate/lilya-estate-2.png";
import lilyaEstate3 from "./assets/images/realEstate/real-estate-3.png";

import taskManagement from "./assets/taskManagement.jpeg";
import arekaWebsite from "./assets/areka-website.png";

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

import blossom from "./assets/blossom.png";

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
    href: "https://drive.google.com/file/d/1KaavUq2PZpmDGkuKlmz1WmNpM2eq_Fv-/view?usp=sharing",
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
    skills: ["API Entegrasyonu", "Middleware Geliştirme"],
  },
  {
    category: "UI/UX & Tasarım",
    skills: ["Figma", "Adobe Photoshop", "Canva"],
  },
  {
    category: "Ek Teknolojiler",
    skills: ["Node.js", "Express.js", "React Native", "PostgreSQL"],
  },
];

export const projects = [
  {
    id: nanoid(),
    images: [lilyaEstate1, lilyaEstate2, lilyaEstate3],
    url: "https://lilya-estate-web.vercel.app/",
    github: "https://github.com/cansu05/Lilya-Estate",
    title: "Lilya Estate - Emlak Platformu",
    text: "Kullanıcıların konum, filtre ve harita desteğiyle ilan arayabildiği, detaylı mülk bilgilerine ulaşabildiği kapsamlı bir emlak platformu geliştirdim. Platform, gayrimenkul keşfini kolay ve hızlı hale getirmeyi hedefliyor.",
  },
  {
    id: nanoid(),
    images: [scandleted1, scandleted2, scandleted3, scandleted4, scandleted5],
    url: "https://scandleted-five.vercel.app/",
    github: "https://github.com/cansu05/Scandleted",
    title: "Scandleted – E-Ticaret Web Uygulaması",
    text: "Mum ürünlerinin sergilenmesi ve satın alınmasına yönelik modern bir e-ticaret deneyimi sunan web uygulaması geliştirdim. Kullanıcıların ürünleri inceleyip kolayca sipariş oluşturabilmesini sağlayan uçtan uca bir alışveriş akışı tasarladım.",
  },
  {
    id: nanoid(),
    images: [arekaWebsite],
    url: "https://areka-corporate-website.vercel.app",
    github: "https://github.com/cansu05/Areka-Corporate-Website",
    title: "Areka Carbon Hub - İklim Teknolojisi Platformu",
    text: "Bireylerin ve kurumların karbon ayak izini anlamasına yardımcı olan, çok dilli içerik sunan modern bir kurumsal web sitesi geliştirdim. Platform, sürdürülebilirlik çözümlerini anlaşılır ve erişilebilir bir şekilde sunmayı amaçlıyor.",
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
    text: "Kurumsal kullanıcıların sipariş, müşteri talepleri ve operasyon süreçlerini tek bir panel üzerinden yönetmesini sağlayan kapsamlı bir dashboard geliştirilmesine katkı sağladım.",
  },
  {
    id: nanoid(),
    images: [rickAndMorty],
    url: "https://ricky-and-morty-omega-seven.vercel.app/character",
    github: "https://github.com/cansu05/RickyAndMorty",
    title: "Rick and Morty – Karakter Kataloğu Uygulaması",
    text: "Rick and Morty evrenindeki karakterleri keşfetmeye yönelik, filtreleme ve detay inceleme özellikleri sunan interaktif bir katalog uygulaması geliştirdim.",
  },
  {
    id: nanoid(),
    images: [taskManagement],
    url: "",
    github: "https://github.com/cansu05/Task-Flow",
    title: "TaskFlow – Görev Yönetim Uygulaması",
    text: "Ekiplerin görevleri planlayıp takip edebileceği, sürükle-bırak destekli modern bir görev yönetim uygulaması geliştirdim. Kullanıcıların iş akışlarını görsel olarak organize etmesini kolaylaştırır.",
  },
  {
    id: nanoid(),
    images: [blossom],
    github: "https://github.com/cansu05/Blossom",
    title: "Blossom – Mobil Ürün Kataloğu Uygulaması",
    text: "Çiçek ve bitki ürünlerinin mobil ortamda kolayca keşfedilmesini sağlayan bir ürün katalog uygulaması geliştirdim. Kullanıcıların favori ürünlerini kaydedip daha sonra inceleyebilmesine olanak tanır.",
  },
];
