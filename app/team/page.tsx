import Image from "next/image"
import Link from "next/link"

export default function Team() {
    const team = [
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
        {
            name: "Ari de Solana",
            description: "Segunda al mando",
            xUsername: "AriCR18",
            xUrl: "https://x.com/AriCR18",
            imagePath: "/images/ari-image.png"
        },
    ]
    return (
        <section className="mt-[140px] px-5">
            <h1 className="text-3xl font-bold text-[#00f8b7] my-16">Team Solana Allstars Venezuela</h1>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mx-auto">
                {
                    team.map(({ description, imagePath, name, xUrl, xUsername }) => (
                        <div key={xUsername} className="flex flex-col justify-center items-center gap-y-2 text-center">
                            <Image
                                alt=""
                                src={imagePath}
                                width={80}
                                height={80}
                                className="rounded-full"
                            />
                            <h3 className="font-semibold text-[#00f8b7] text-xl">{name}</h3>
                            <h3>{description}</h3>
                            <p>Usuario de X: <Link href={xUrl} target="_blank" className="text-[#00f8b7] underline">@{xUsername}</Link></p>
                        </div>
                    ))
                }

            </div>
        </section>
    );
}
