import Image from "next/image"
import Link from "next/link"

export default function Team() {
    const roleList = [
        "Global Manager",
        "Country Manager",
        "Regional Manager",
        "Embajador/a",
        "Colaborador/a"
    ]

    const team = [
        {
            name: "Thep ◎",
            xUsername: "Theptilla",
            xUrl: "https://x.com/Theptilla",
            imagePath: "https://pbs.twimg.com/profile_images/1650310622448439298/D7gcXUGB_400x400.jpg",
            role: "Global Manager"
        },
        {
            name: "Jesus Silva",
            xUsername: "elchuo160",
            xUrl: "https://x.com/elchuo160",
            imagePath: "https://pbs.twimg.com/profile_images/1796250481833996288/sntT-I6i_400x400.jpg",
            role: "Country Manager"
        },
        {
            name: "Maikol Castellano",
            xUsername: "soymaikoldev",
            xUrl: "https://x.com/soymaikoldev",
            imagePath: "https://pbs.twimg.com/profile_images/1765002596970901504/cwQ49ZVK_400x400.jpg",
            role: "Regional Manager"
        },
        {
            name: "Yunerbis Hernández",
            xUsername: "YuneHRI6",
            xUrl: "https://x.com/YuneHRI6",
            imagePath: "https://pbs.twimg.com/profile_images/1777040570893881344/RZKAMaiz_400x400.jpg",
            role: "Embajador/a"
        },
        {
            name: "Laura QCh | @lqch",
            xUsername: "lauqch",
            xUrl: "https://x.com/lauqch",
            imagePath: "https://pbs.twimg.com/profile_images/1727860386303455232/Fy8NC8GH_400x400.jpg",
            role: "Embajador/a"
        },
        {
            name: "Valeria Valentina",
            xUsername: "valvalentina24",
            xUrl: "https://x.com/valvalentina24",
            imagePath: "https://pbs.twimg.com/profile_images/1731813055221084160/G9dh3ojv_400x400.jpg",
            role: "Embajador/a"
        },
        {
            name: "Kaily Benites",
            xUsername: "kailybv",
            xUrl: "https://x.com/kailybv",
            imagePath: "https://pbs.twimg.com/profile_images/1796352473172434944/NABRtg5i_400x400.jpg",
            role: "Colaborador/a"
        },
        {
            name: "Ari | aricr.sol",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "https://pbs.twimg.com/profile_images/1733191053438541824/Yos4FWvB_400x400.jpg",
            role: "Colaborador/a"
        },
        {
            name: "Andersón Mendez",
            xUsername: "Criptodruu",
            xUrl: "https://x.com/AriCR18",
            imagePath: "https://pbs.twimg.com/profile_images/1806864282048438272/XOBcXvUE_400x400.jpg",
            role: "Colaborador/a"
        },
        {
            name: "Estefani Arzola",
            xUsername: "arzkyu_97",
            xUrl: "https://x.com/arzkyu_97",
            imagePath: "https://pbs.twimg.com/profile_images/1584910748538601472/hkXVLIS7_400x400.jpg",
            role: "Colaborador/a"
        },
        {
            name: "Alegna CrypTravels",
            xUsername: "CrypTravels",
            xUrl: "https://x.com/CrypTravels",
            imagePath: "https://pbs.twimg.com/profile_images/1789282449412734976/Y-pSQsbA_400x400.jpg",
            role: "Colaborador/a"
        },
        {
            name: "Yorman | sosad.sol",
            xUsername: "cryptoyorman",
            xUrl: "https://x.com/cryptoyorman",
            imagePath: "https://pbs.twimg.com/profile_images/1802884655193980928/Sic4ssYL_400x400.jpg",
            role: "Colaborador/a"
        },
        {
            name: "Keily Benites",
            xUsername: "Kbenites04",
            xUrl: "https://x.com/Kbenites04",
            imagePath: "https://pbs.twimg.com/profile_images/1767726272631767040/ryioCUJs_400x400.jpg",
            role: "Colaborador/a"
        },
        {
            name: "jjohnson1.sol",
            xUsername: "jhonnyjohnson",
            xUrl: "https://x.com/jhonnyjohnson",
            imagePath: "https://pbs.twimg.com/profile_images/1628936191620837376/TPtyQmrA_400x400.jpg",
            role: "Colaborador/a"
        },
        {
            name: "Leandro Gavidia",
            xUsername: "androgavidia",
            xUrl: "https://x.com/androgavidia",
            imagePath: "https://pbs.twimg.com/profile_images/1792739864904957952/9V9SSzlt_400x400.jpg",
            role: "Colaborador/a"
        },
    ]
    return (
        <section className="mt-[140px] px-5">
            <h1 className="text-3xl font-bold text-white my-16">Team Solana Allstars Venezuela</h1>
            {
                roleList.map(role => (
                    <div key={role}> 
                        <h2 className="text-2xl font-semibold text-secondary mt-12 mb-4">{role}</h2>

                        <div className="h-[1px] bg-white opacity-25 w-full mb-12"></div>

                        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mx-auto">
                            { 
                                team.filter((member) => member.role === role).map(({ imagePath, name, xUrl, xUsername }) => (
                                    <div key={xUsername} className="flex flex-col justify-center items-center gap-y-2 text-center">
                                        <Image
                                            alt=""
                                            src={imagePath}
                                            width={80} 
                                            height={80}
                                            className="rounded-full"
                                        />
                                        <h3 className="font-semibold text-secondary text-xl">{name}</h3>
                                        <p>Usuario de X: <Link href={xUrl} target="_blank" className="text-secondary underline">@{xUsername}</Link></p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }

        </section>
    );
}
