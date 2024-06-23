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
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Global Manager"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Country Manager"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Regional Manager"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Embajador/a"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Country Manager"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Country Manager"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Country Manager"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Country Manager"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Embajador/a"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Regional Manager"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Regional Manager"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Regional Manager"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Regional Manager"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Regional Manager"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Regional Manager"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Regional Manager"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Regional Manager"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Regional Manager"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Regional Manager"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Colaborador/a"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Colaborador/a"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Colaborador/a"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Colaborador/a"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Colaborador/a"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Colaborador/a"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Colaborador/a"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Colaborador/a"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Embajador/a"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Embajador/a"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Embajador/a"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Embajador/a"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png",
            role: "Embajador/a"
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
                                team.filter((member) => member.role === role).map(({ description, imagePath, name, xUrl, xUsername }) => (
                                    <div key={xUsername} className="flex flex-col justify-center items-center gap-y-2 text-center">
                                        <Image
                                            alt=""
                                            src={imagePath}
                                            width={80} 
                                            height={80}
                                            className="rounded-full"
                                        />
                                        <h3 className="font-semibold text-secondary text-xl">{name}</h3>
                                        <h3>{description}</h3>
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
