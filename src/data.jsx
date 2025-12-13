import { nanoid } from "nanoid";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaFileAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

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
    icon: <FaHome className="h-5 w-5 text-gray-800  active:text-gray-950 " />,
  },
  {
    id: nanoid(),
    href: "about",
    text: "Hakkımda",
    icon: <FaUser className="h-5 w-5  text-gray-800" />,
  },

  {
    id: nanoid(),
    href: "projects",
    text: "Projelerim",
    icon: <FaBriefcase className="h-5 w-5 text-gray-800" />,
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
    icon: <FaGithub className="h-6 w-6 text-gray-700 hover:text-gray-950" />,
  },
  {
    id: nanoid(),
    href: "https://www.linkedin.com/in/cansuugur/",
    icon: <FaLinkedin className="h-6 w-6 text-gray-700 hover:text-gray-950" />,
  },
  {
    id: nanoid(),
    href: "https://drive.google.com/file/d/1hdn7k9j6PPJDl1kf_rXiPtRLZWZ6O-jr/view?usp=sharing",
    icon: <FaFileAlt className="h-6 w-6 text-gray-700 hover:text-gray-950" />,
  },
];

export const skillsData = [
  {
    category: "Frontend Geliştirme",
    skills: [
      "HTML, CSS, JavaScript, TypeScript React.js, Next.js, Redux, Zustand",
      "CSS, Sass, Tailwind CSS, Bootstrap, Material UI,Shadcn/UI",
    ],
  },
  {
    category: "Backend & Entegrasyon",
    skills: [
      "API entegrasyonu",
      "Middleware geliştirme",
      "PostgreSQL, Prisma ORM",
    ],
  },
  {
    category: "UI/UX & Tasarım",
    skills: ["Adobe Photoshop", "Figma", "Canva"],
  },
];

export const projects = [
  {
    id: nanoid(),
    images: [scandleted1, scandleted2, scandleted3, scandleted4, scandleted5],
    url: "https://scandleted-five.vercel.app/",
    github: "https://github.com/cansu05/Scandleted",
    title: "Scandleted – E-ticaret Uygulaması",
    text: "Mum ürünlerini sergilemek ve satışa sunmak için mobil uyumlu bir e-ticaret uygulaması geliştirildi. Kullanıcılar ürünleri listeleyebilir, detaylarını inceleyebilir ve sepet üzerinden satın alma sürecini yönetebilir. Uygulama Next.js 15, TypeScript ve Prisma ile geliştirildi; Supabase backend olarak entegre edildi ve Clerk ile kullanıcı kimlik doğrulaması sağlandı. Arayüz Tailwind CSS ve shadcn/ui ile tasarlandı. Yüksek performans ve ölçeklenebilirlik için Vercel üzerinde yayına alındı.",
  },
  {
    id: nanoid(),
    images: [rickAndMorty],
    url: "https://ricky-and-morty-omega-seven.vercel.app/character",
    github: "https://github.com/cansu05/RickyAndMorty",
    title: "Rick and Morty Karakter Kataloğu",
    text: "Next.js 15 ve TypeScript ile geliştirilen, Rick and Morty açık API’si üzerinden veri alan bir karakter katalog uygulaması. Redux Toolkit ile global state yönetimi, dinamik filtreleme ve sayfalama yapıları kuruldu. Responsive arayüz ve Vercel deployment sağlandı.",
  },
  {
    id: nanoid(),
    images: [taskManagement],
    url: "",
    github: "https://github.com/cansu05/Task-Flow",
    title: "TaskFlow – Görev Yönetim Uygulaması",
    text: "Next.js, Zustand, TypeScript ve Material-UI kullanılarak sürükle-bırak özellikli modern bir görev yönetim uygulaması geliştirildi. Görevlerin oluşturulması, düzenlenmesi ve durumlar arasında taşınmasını destekleyen, ekip içi iş birliği odaklı ve mobil uyumlu bir arayüz tasarlandı. Hafif state yönetimi ve performans odaklı bir yapı oluşturuldu.",
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
    title: "Dashboard – Wessex Searches (UK)",
    text: "Veriland bünyesinde, İngiltere merkezli Wessex Searches firması için geliştirilen çok adımlı bir web tabanlı sipariş ve yönetim dashboard uygulamasıdır.Uygulama; çok adımlı kayıt süreciyle başlayan kullanıcı akışının ardından, harita üzerinden lokasyon seçimi, ürün belirleme, sepet ve ödeme adımlarını kapsayan uçtan uca bir sipariş süreci sunar.Dashboard tarafında siparişlerin görüntülenmesi ve yönetilmesi, müşteri taleplerinin (queries/cases) oluşturulması ve takibi, kullanıcı ve şube yönetimi, fatura ve ödeme süreçleri gibi operasyonel modüller geliştirilmiştir.Proje, Next.js ve TypeScript kullanılarak geliştirilmiş; state yönetimi için Zustand ve Context API birlikte kullanılmıştır. Arayüz yapısı Tailwind CSS ve Material UI ile modüler, ölçeklenebilir ve kurumsal bir mimariyle oluşturulmuştur.",
  },
];
