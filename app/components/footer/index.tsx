import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Footer() {
    return (
        <footer className="flex flex-col justify-between items-center gap-x-3 w-full gap-y-10 p-5 bg-black mt-20">
            <h2 className="text-3xl self-start font-bold text-[#00f8b7]">Partners</h2>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5 mx-auto">
                <Image
                    alt="Logo Solana Allstars Latam"
                    src="/images/logo-allstars-latam.png"
                    width={2424}
                    height={1055}
                    className="w-full h-auto max-w-[140px] relative z-50 mx-auto"
                />
                <Image
                    alt="Logo Solana Allstars Latam"
                    src="/images/logo-allstars-latam.png"
                    width={2424}
                    height={1055}
                    className="w-full h-auto max-w-[140px] relative z-50 mx-auto"
                />
                <Image
                    alt="Logo Solana Allstars Latam"
                    src="/images/logo-allstars-latam.png"
                    width={2424}
                    height={1055}
                    className="w-full h-auto max-w-[140px] relative z-50 mx-auto"
                />
                <Image
                    alt="Logo Solana Allstars Latam"
                    src="/images/logo-allstars-latam.png"
                    width={2424}
                    height={1055}
                    className="w-full h-auto max-w-[140px] relative z-50 mx-auto"
                />
                <Image
                    alt="Logo Solana Allstars Latam"
                    src="/images/logo-allstars-latam.png"
                    width={2424}
                    height={1055}
                    className="w-full h-auto max-w-[140px] relative z-50 mx-auto"
                />
                <Image
                    alt="Logo Solana Allstars Latam"
                    src="/images/logo-allstars-latam.png"
                    width={2424}
                    height={1055}
                    className="w-full h-auto max-w-[140px] relative z-50 mx-auto"
                />
                <Image
                    alt="Logo Solana Allstars Latam"
                    src="/images/logo-allstars-latam.png"
                    width={2424}
                    height={1055}
                    className="w-full h-auto max-w-[140px] relative z-50 mx-auto"
                />
                <Image
                    alt="Logo Solana Allstars Latam"
                    src="/images/logo-allstars-latam.png"
                    width={2424}
                    height={1055}
                    className="w-full h-auto max-w-[140px] relative z-50 mx-auto"
                />
            </div>

            <Link href="https://get-in.com/en/crossroads">
                <button className="rounded-full border border-[#00f8b7] text- px-4 py-2 hover:bg-[#00f8b7] hover:text-black transition-all">OBTENER TICKETS</button>
            </Link>

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
                <Link href="https://www.step.finance/" target="_blank" className="text-[#00f8b7] underline">
                    Step Finance
                </Link>
            </div>

        </footer>
    )
}