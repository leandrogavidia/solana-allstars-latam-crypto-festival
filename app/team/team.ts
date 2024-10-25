enum ROLE {
  // GLOBAL_MANAGER = "Global Manager",
  COUNTRY_MANAGER = "Country Manager",
  REGIONAL_MANAGER = "Regional Manager",
//   EMBAJADOR_A = "Embajador/a",
  COLABORADOR_A = "Colaborador/a",
}

export const roleList = [
  // ROLE.GLOBAL_MANAGER,
  ROLE.COUNTRY_MANAGER,
  ROLE.REGIONAL_MANAGER,
//   ROLE.EMBAJADOR_A,
  ROLE.COLABORADOR_A,
];

interface Team {
  name: string;
  xUsername: string;
  xUrl: string;
  imagePath: string;
  role: ROLE;
}

export const team: Team[] = [
  // {
  //   name: "Theptilla",
  //   xUsername: "Theptilla",
  //   xUrl: "https://x.com/Theptilla",
  //   imagePath:
  //     "https://pbs.twimg.com/profile_images/1650310622448439298/D7gcXUGB_400x400.jpg",
  //   role: ROLE.GLOBAL_MANAGER,
  // },
  {
    name: "Jesus Silva - Venezuela",
    xUsername: "elchuo160",
    xUrl: "https://x.com/elchuo160",
    imagePath:
      "/images/team/elchuo160.png",
    role: ROLE.COUNTRY_MANAGER,
  },
  {
    name: "Wookie - Argentina",
    xUsername: "SOLWookie",
    xUrl: "https://x.com/solwookie",
    imagePath:
      "/images/team/SOLWookie.png",
    role: ROLE.COUNTRY_MANAGER,
  },
  {
    name: "Maikol Castellano",
    xUsername: "soymaikoldev",
    xUrl: "https://x.com/soymaikoldev",
    imagePath:
      "/images/team/soymaikoldev.png",
    role: ROLE.REGIONAL_MANAGER,
  },
  {
    name: "Yunerbis Hernández",
    xUsername: "YuneHRI6",
    xUrl: "https://x.com/YuneHRI6",
    imagePath:
      "/images/team/YuneHRI6.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Laura Quintana",
    xUsername: "lauqch",
    xUrl: "https://x.com/lauqch",
    imagePath:
      "/images/team/lauqch.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Valeria Anzola",
    xUsername: "valvalentina24",
    xUrl: "https://x.com/valvalentina24",
    imagePath:
      "/images/team/valvalentina24.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Kaily Benites",
    xUsername: "kailybv",
    xUrl: "https://x.com/kailybv",
    imagePath:
      "/images/team/kailybv.png",
    role: ROLE.REGIONAL_MANAGER,
  },
  {
    name: "Jesus Parra",
    xUsername: "cryptojesus32",
    xUrl: "https://x.com/cryptojesus32",
    imagePath:
      "/images/team/cryptojesus32.png",
    role: ROLE.REGIONAL_MANAGER,
  },
  {
    name: "Arianna Cabrera",
    xUsername: "AriCR18",
    xUrl: "https://x.com/AriCR18",
    imagePath:
      "/images/team/AriCR18.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Andersón Mendez",
    xUsername: "Criptodruu",
    xUrl: "https://x.com/Criptodruu",
    imagePath:
      "/images/team/Criptodruu.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Estefani Arzola",
    xUsername: "arzkyu97_",
    xUrl: "https://x.com/arzkyu97_",
    imagePath:
      "/images/team/arzkyu97_.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Ángela Núñez",
    xUsername: "CrypTravels",
    xUrl: "https://x.com/CrypTravels",
    imagePath:
      "/images/team/CrypTravels.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Yorman Castillo",
    xUsername: "cryptoyorman",
    xUrl: "https://x.com/cryptoyorman",
    imagePath:
      "/images/team/cryptoyorman.png",
    role: ROLE.REGIONAL_MANAGER,
  },
  {
    name: "Jhonny Johnson",
    xUsername: "jhonnyjohnson",
    xUrl: "https://x.com/jhonnyjohnson",
    imagePath:
      "/images/team/jhonnyjohnson.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Leandro Gavidia",
    xUsername: "androgavidia",
    xUrl: "https://x.com/androgavidia",
    imagePath:
      "/images/team/androgavidia.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Yorbin Gelves",
    xUsername: "Yorbin_Gelves",
    xUrl: "https://x.com/Yorbin_Gelves",
    imagePath:
      "/images/team/Yorbin_Gelves.png",
    role: ROLE.REGIONAL_MANAGER,
  },
  {
    name: "Sky",
    xUsername: "skyempire90",
    xUrl: "https://x.com/skyempire90",
    imagePath:
      "/images/team/skyempire90.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Ronald Moreno",
    xUsername: "RonaldM45675766",
    xUrl: "https://x.com/RonaldM45675766",
    imagePath:
      "https://pbs.twimg.com/profile_images/1391548164872753154/oC0t14Go_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Reidys Rojas",
    xUsername: "XRei_investor",
    xUrl: "https://x.com/XRei_investor",
    imagePath:
      "/images/team/XRei_investor.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Carlos Cano",
    xUsername: "carloscanov",
    xUrl: "https://x.com/carloscanov",
    imagePath:
      "https://pbs.twimg.com/profile_images/1808241155399704576/SEb3MlGO_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Anthony Coronado",
    xUsername: "Anthonyjcr7",
    xUrl: "https://x.com/Anthonyjcr7",
    imagePath:
      "https://pbs.twimg.com/profile_images/1749097810190868480/GrqK0mHx_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Emmanuel Ojeda",
    xUsername: "Montero_077",
    xUrl: "https://x.com/Montero_077",
    imagePath:
      "https://pbs.twimg.com/profile_images/1708648329574240256/gBSGebij_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Manuel Aguilera",
    xUsername: "MANNYVE2",
    xUrl: "https://x.com/MANNYVE2",
    imagePath:
      "https://pbs.twimg.com/profile_images/1464919263937015810/9F0IIzY3_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Eliud González",
    xUsername: "Eliudgnzlz",
    xUrl: "https://x.com/Eliudgnzlz",
    imagePath:
      "https://pbs.twimg.com/profile_images/1815821196044156928/Xr18Xz7z_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Lilian Quintana",
    xUsername: "lililuki1",
    xUrl: "https://x.com/lililuki1",
    imagePath:
      "/images/team/lililuki1.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Eglis SIlva",
    xUsername: "Cata_yanez179",
    xUrl: "https://x.com/Cata_yanez179",
    imagePath:
      "https://pbs.twimg.com/profile_images/1801359601943588864/YMrsZ1on_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Victor Aranguren",
    xUsername: "arangurendev",
    xUrl: "https://x.com/arangurendev",
    imagePath:
      "https://pbs.twimg.com/profile_images/1847369483096379397/TZwYFWJl_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Andres Cabrera",
    xUsername: "andresittoweb3",
    xUrl: "https://x.com/andresittoweb3",
    imagePath:
      "https://pbs.twimg.com/profile_images/1843685883561582597/DLAJcUGy_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Ronald Rosales",
    xUsername: "_ronaldro_",
    xUrl: "https://x.com/_ronaldro_",
    imagePath:
      "https://pbs.twimg.com/profile_images/1843132356040761344/_nKFHKcN_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Erick Carvajal",
    xUsername: "xGtsn",
    xUrl: "https://x.com/xGtsn",
    imagePath:
      "https://pbs.twimg.com/profile_images/1440538759225745409/Y7RlMYhw_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Alexander Parra",
    xUsername: "",
    xUrl: "",
    imagePath:
      "/images/team/default.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Héctor Urbina",
    xUsername: "CriptoClifford",
    xUrl: "https://x.com/CriptoClifford",
    imagePath:
      "https://pbs.twimg.com/profile_images/1531957478094675968/-aZQhwpx_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Ivan Pinto",
    xUsername: "ivanpintoh",
    xUrl: "https://x.com/ivanpintoh",
    imagePath:
      "https://pbs.twimg.com/profile_images/1445481775434584071/wSpICrhR_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Sugeyli Perez",
    xUsername: "sugeilyperez",
    xUrl: "https://x.com/sugeilyperez",
    imagePath:
      "https://pbs.twimg.com/profile_images/1835373830669238272/BpdtN-rY_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Eduardo Bravo",
    xUsername: "E_uler",
    xUrl: "https://x.com/E_uler",
    imagePath:
      "https://pbs.twimg.com/profile_images/1623167984012300288/OT3LmW9q_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Oscar Ovalles",
    xUsername: "OscarAOvalles",
    xUrl: "https://x.com/OscarAOvalles",
    imagePath:
      "https://pbs.twimg.com/profile_images/1545407516196147203/WxLfAJf4_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Hector Cobis",
    xUsername: "hcobis",
    xUrl: "https://x.com/hcobis",
    imagePath:
      "https://pbs.twimg.com/profile_images/1841958220417413120/ME5-6AG4_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Iván Abreu",
    xUsername: "reevesnephew",
    xUrl: "https://x.com/reevesnephew",
    imagePath:
      "https://pbs.twimg.com/profile_images/1836541448910442496/T3kmsz5y_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Friedrich Ruiz",
    xUsername: "Friedrichruz",
    xUrl: "https://x.com/Friedrichruz",
    imagePath:
      "https://pbs.twimg.com/profile_images/1820675696844242945/gwSr-ceE_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Yindrid Sulbaran",
    xUsername: "DiannorDiannora",
    xUrl: "https://x.com/DiannorDiannora",
    imagePath:
      "https://pbs.twimg.com/profile_images/964177216413323264/zSyOxwVo_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "José Quilarque",
    xUsername: "JoseQuilarque11",
    xUrl: "https://x.com/JoseQuilarque11",
    imagePath:
      "https://pbs.twimg.com/profile_images/954256526516150272/xwe3g3rM_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Mililus Chacin",
    xUsername: "Milichacin",
    xUrl: "https://x.com/Milichacin",
    imagePath:
      "https://pbs.twimg.com/profile_images/1522279561899220992/e5ClDvVT_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "David Altuve",
    xUsername: "",
    xUrl: "",
    imagePath:
      "/images/team/default.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Elías González",
    xUsername: "",
    xUrl: "",
    imagePath:
      "/images/team/default.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Jose Corona",
    xUsername: "",
    xUrl: "",
    imagePath:
      "/images/team/default.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Luis Lopez",
    xUsername: "",
    xUrl: "",
    imagePath:
      "/images/team/default.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "José Navas",
    xUsername: "Elfino28",
    xUrl: "https://x.com/Elfino28",
    imagePath:
      "https://pbs.twimg.com/profile_images/1673855079122608129/1LslecBI_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Gustavo Márquez",
    xUsername: "CryptoVzla14",
    xUrl: "https://x.com/CryptoVzla14",
    imagePath:
      "https://pbs.twimg.com/profile_images/1812289746623680512/OTsJotSu_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Adean Garcia",
    xUsername: "yancar2",
    xUrl: "https://x.com/yancar2",
    imagePath:
      "https://pbs.twimg.com/profile_images/523268729053143040/T-IpTqm0_400x400.jpeg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Felipe Guerra",
    xUsername: "",
    xUrl: "",
    imagePath:
      "/images/team/default.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Richell Alaniz",
    xUsername: "richell0442",
    xUrl: "https://x.com/richell0442",
    imagePath:
      "https://pbs.twimg.com/profile_images/1840857172726431744/IJYzxwo-_400x400.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Herminia Barriento",
    xUsername: "hermib",
    xUrl: "https://x.com/hermib",
    imagePath:
      "https://pbs.twimg.com/profile_images/1818110572220604416/ZddavTqr_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Francisco Vargas",
    xUsername: "turbobitx",
    xUrl: "https://x.com/turbobitx",
    imagePath:
      "/images/team/default.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Jesus Molleda",
    xUsername: "Jesuaolleda2",
    xUrl: "https://x.com/Jesuaolleda2",
    imagePath:
      "https://pbs.twimg.com/profile_images/1613697933974593536/GhsWZ_e1_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Jesus Piñerua",
    xUsername: "",
    xUrl: "",
    imagePath:
      "/images/team/default.png",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Joel Parra",
    xUsername: "joelparrah19",
    xUrl: "https://x.com/joelparrah19",
    imagePath:
      "https://pbs.twimg.com/profile_images/861684103216857089/wh1V-F-i_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
  {
    name: "Lisbeth Sarabia",
    xUsername: "Lisbethdecuevas",
    xUrl: "https://x.com/Lisbethdecuevas",
    imagePath:
      "https://pbs.twimg.com/profile_images/649700424866467840/8UBGFtMj_400x400.jpg",
    role: ROLE.COLABORADOR_A,
  },
];
 