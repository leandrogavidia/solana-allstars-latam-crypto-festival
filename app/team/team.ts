enum ROLE {
    GLOBAL_MANAGER = "Global Manager",
    COUNTRY_MANAGER = "Country Manager",
    REGIONAL_MANAGER = "Regional Manager",
    EMBAJADOR_A = "Embajador/a",
    COLABORADOR_A = "Colaborador/a"
}

export const roleList = [
    ROLE.GLOBAL_MANAGER,
    ROLE.COUNTRY_MANAGER,
    ROLE.REGIONAL_MANAGER,
    ROLE.EMBAJADOR_A,
    ROLE.COLABORADOR_A
]

interface Team {
    name: string,
    xUsername: string,
    xUrl: string,
    imagePath: string,
    role: ROLE
}

export const team: Team[] = [
    {
        name: "Thep ◎",
        xUsername: "Theptilla",
        xUrl: "https://x.com/Theptilla",
        imagePath: "https://pbs.twimg.com/profile_images/1650310622448439298/D7gcXUGB_400x400.jpg",
        role: ROLE.GLOBAL_MANAGER
    },
    {
        name: "Jesus Silva",
        xUsername: "elchuo160",
        xUrl: "https://x.com/elchuo160",
        imagePath: "https://pbs.twimg.com/profile_images/1796250481833996288/sntT-I6i_400x400.jpg",
        role: ROLE.COUNTRY_MANAGER
    },
    {
        name: "Maikol Castellano",
        xUsername: "soymaikoldev",
        xUrl: "https://x.com/soymaikoldev",
        imagePath: "https://pbs.twimg.com/profile_images/1765002596970901504/cwQ49ZVK_400x400.jpg",
        role: ROLE.REGIONAL_MANAGER
    },
    {
        name: "Yunerbis Hernández",
        xUsername: "YuneHRI6",
        xUrl: "https://x.com/YuneHRI6",
        imagePath: "https://pbs.twimg.com/profile_images/1777040570893881344/RZKAMaiz_400x400.jpg",
        role: ROLE.EMBAJADOR_A
    },
    {
        name: "Laura QCh | @lqch",
        xUsername: "lauqch",
        xUrl: "https://x.com/lauqch",
        imagePath: "https://pbs.twimg.com/profile_images/1727860386303455232/Fy8NC8GH_400x400.jpg",
        role: ROLE.EMBAJADOR_A
    },
    {
        name: "Valeria Valentina",
        xUsername: "valvalentina24",
        xUrl: "https://x.com/valvalentina24",
        imagePath: "https://pbs.twimg.com/profile_images/1731813055221084160/G9dh3ojv_400x400.jpg",
        role: ROLE.EMBAJADOR_A
    },
    {
        name: "Kaily Benites",
        xUsername: "kailybv",
        xUrl: "https://x.com/kailybv",
        imagePath: "https://pbs.twimg.com/profile_images/1796352473172434944/NABRtg5i_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "Ari | aricr.sol",
        xUsername: "AriCR18",
        xUrl: "https://x.com/AriCR18",
        imagePath: "https://pbs.twimg.com/profile_images/1733191053438541824/Yos4FWvB_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "Andersón Mendez",
        xUsername: "Criptodruu",
        xUrl: "https://x.com/AriCR18",
        imagePath: "https://pbs.twimg.com/profile_images/1806864282048438272/XOBcXvUE_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "Estefani Arzola",
        xUsername: "arzkyu_97",
        xUrl: "https://x.com/arzkyu_97",
        imagePath: "https://pbs.twimg.com/profile_images/1584910748538601472/hkXVLIS7_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "Alegna CrypTravels",
        xUsername: "CrypTravels",
        xUrl: "https://x.com/CrypTravels",
        imagePath: "https://pbs.twimg.com/profile_images/1789282449412734976/Y-pSQsbA_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "Yorman | sosad.sol",
        xUsername: "cryptoyorman",
        xUrl: "https://x.com/cryptoyorman",
        imagePath: "https://pbs.twimg.com/profile_images/1802884655193980928/Sic4ssYL_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "jjohnson1.sol",
        xUsername: "jhonnyjohnson",
        xUrl: "https://x.com/jhonnyjohnson",
        imagePath: "https://pbs.twimg.com/profile_images/1628936191620837376/TPtyQmrA_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "Leandro Gavidia",
        xUsername: "androgavidia",
        xUrl: "https://x.com/androgavidia",
        imagePath: "https://pbs.twimg.com/profile_images/1792739864904957952/9V9SSzlt_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "Yorbin Gelves",
        xUsername: "Yorbin_Gelves",
        xUrl: "https://x.com/Yorbin_Gelves",
        imagePath: "https://pbs.twimg.com/profile_images/1497470971753766912/7hDGapgd_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "skyempire90",
        xUsername: "skyempire90",
        xUrl: "https://x.com/skyempire90",
        imagePath: "https://pbs.twimg.com/profile_images/1730285118265204736/8Io_-V8e_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "Ronald Moreno",
        xUsername: "RonaldM45675766",
        xUrl: "https://x.com/RonaldM45675766",
        imagePath: "https://pbs.twimg.com/profile_images/1391548164872753154/oC0t14Go_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "Rei",
        xUsername: "XRei_investor",
        xUrl: "https://x.com/XRei_investor",
        imagePath: "https://pbs.twimg.com/profile_images/1794793850571001857/PCTCh95M_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "Carlos Cano",
        xUsername: "carloscanov",
        xUrl: "https://x.com/carloscanov",
        imagePath: "https://pbs.twimg.com/profile_images/1808241155399704576/SEb3MlGO_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "『『Anthonyjcr』 |¦|",
        xUsername: "Anthonyjcr7",
        xUrl: "https://x.com/Anthonyjcr7",
        imagePath: "https://pbs.twimg.com/profile_images/1749097810190868480/GrqK0mHx_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "Emmanuel",
        xUsername: "Montero_077",
        xUrl: "https://x.com/Montero_077",
        imagePath: "https://pbs.twimg.com/profile_images/1708648329574240256/gBSGebij_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "MANNYVE",
        xUsername: "MANNYVE2",
        xUrl: "https://x.com/MANNYVE2",
        imagePath: "https://pbs.twimg.com/profile_images/1464919263937015810/9F0IIzY3_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "Eliud Gonzalez",
        xUsername: "Eliudgnzlz",
        xUrl: "https://x.com/Eliudgnzlz",
        imagePath: "https://pbs.twimg.com/profile_images/1815821196044156928/Xr18Xz7z_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "Lililuki",
        xUsername: "lililuki1",
        xUrl: "https://x.com/lililuki1",
        imagePath: "https://pbs.twimg.com/profile_images/1800621033172373504/tZVSYWaj_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "kl3n",
        xUsername: "kl3n88",
        xUrl: "https://x.com/kl3n88",
        imagePath: "https://pbs.twimg.com/profile_images/1804263448441745408/DOK4QA43_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
    {
        name: "Cata",
        xUsername: "Cata_yanez179",
        xUrl: "https://x.com/Cata_yanez179",
        imagePath: "https://pbs.twimg.com/profile_images/1801359601943588864/YMrsZ1on_400x400.jpg",
        role: ROLE.COLABORADOR_A
    },
]