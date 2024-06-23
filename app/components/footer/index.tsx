import Image from "next/image"
import Link from "next/link"
import { SignUpButton } from "../sign-up-button"

export function Footer() {
    const sponsorList = [
        {
            name: "Solana Allstars LATAM",
            imagePath: "/images/logo-allstars-latam.png"
        },
        {
            name: "Solana Allstars LATAM",
            imagePath: "/images/logo-allstars-latam.png"
        },
        {
            name: "Solana Allstars LATAM",
            imagePath: "/images/logo-allstars-latam.png"
        },
        {
            name: "Solana Allstars LATAM",
            imagePath: "/images/logo-allstars-latam.png"
        },
        {
            name: "Solana Allstars LATAM",
            imagePath: "/images/logo-allstars-latam.png"
        },
        {
            name: "Solana Allstars LATAM",
            imagePath: "/images/logo-allstars-latam.png"
        },
        {
            name: "Solana Allstars LATAM",
            imagePath: "/images/logo-allstars-latam.png"
        },
        {
            name: "Solana Allstars LATAM",
            imagePath: "/images/logo-allstars-latam.png"
        },
    ]

    return (
        <footer className="flex flex-col justify-between items-center gap-x-3 w-full gap-y-10 p-5 bg-black mt-20 max-w-[1920px]">
            <h2 className="text-3xl self-start font-bold text-secondary">Partners</h2>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5 mx-auto justify-items-center">
                {
                    sponsorList.map(({ imagePath, name }) => (
                        <Image
                            alt={name}
                            src={imagePath}
                            width={2424}
                            height={1055}
                            className="w-full h-auto max-w-[140px] relative z-50"
                            key={name}
                        />
                    ))
                }
            </div>

            <SignUpButton />

            <Link href="/">
                <Image
                    alt="Logo Solana Allstars Latam"
                    src="/images/logo-allstars-latam.png"
                    width={2424}
                    height={1055}
                    className="w-full h-auto max-w-[140px] relative z-50"
                />
            </Link>

            <div className="flex flex-col justify-center items-center gap-y-2">
                <p>Powered by</p>
                <Link href="https://www.step.finance/" target="_blank" className="text-secondary underline">
                    Step Finance
                </Link>
            </div>
        </footer>
    )
}