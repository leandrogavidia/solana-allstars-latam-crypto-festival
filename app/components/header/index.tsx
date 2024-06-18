"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation';

export function Header() {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(false)
    }, [path])
    return (
        <header className="flex justify-between items-center gap-x-5 w-full p-5 fixed top-0 z-[100] bg-black">
            <Link href="/" className="cursor-pointer">
                <Image
                    alt="Logo Solana Allstars Latam"
                    src={"/images/logo-allstars-latam.png"}
                    width={2424}
                    height={1055}
                    className="w-full h-auto max-w-[140px] relative z-50"
                />
            </Link>

            {
                isOpen ? <Image
                    className="relative z-50 md:hidden" onClick={() => setIsOpen(!isOpen)}
                    alt="Menu abierto"
                    src={"/icons/x-icon.svg"}
                    width={32}
                    height={32}
                /> : <Image
                    className="relative z-50 md:hidden" onClick={() => setIsOpen(!isOpen)}
                    alt="Menu abierto"
                    src={"/icons/menu-icon.svg"}
                    width={32}
                    height={32}
                />
            }

            {
                isOpen && (
                    <div className="w-full h-screen absolute top-0 right-0 z-40 bg-black flex flex-col justify-center items-center md:hidden">

                        <nav>
                            <ul className="flex flex-col gap-y-3 items-center">
                                <li className="text-2xl hover:text-[#00f8b7] transition-all md:text-xl">
                                    <Link href="/">Inicio</Link>
                                </li>
                                <li className="text-2xl hover:text-[#00f8b7] transition-all md:text-xl">
                                    <Link href="/agenda">Agenda</Link>
                                </li>
                                <li className="text-2xl hover:text-[#00f8b7] transition-all md:text-xl">
                                    <Link href="/faq">FAQ</Link>
                                </li>
                                <li className="text-2xl hover:text-[#00f8b7] transition-all md:text-xl">
                                    <Link href="/team">Team</Link>
                                </li>
                                <li className="text-2xl hover:text-[#00f8b7] transition-all md:text-xl">
                                    <Link href="/ubicacion">Ubicación</Link>
                                </li>
                            </ul>
                        </nav>

                        <Link href="https://get-in.com/en/crossroads" className="absolute bottom-6">
                            <button className="rounded-full border border-[#00f8b7] text-white px-4 py-2 hover:bg-[#00f8b7] hover:text-black transition-all">OBTENER TICKETS</button>
                        </Link>
                    </div>
                )
            }

            <div className="hidden md:flex justify-between w-full items-center gap-x-5">
                <nav>
                    <ul className="flex justify-start gap-x-3 items-center">
                        <li className="text-2xl hover:text-[#00f8b7] transition-all md:text-xl">
                            <Link href="/">Inicio</Link>
                        </li>
                        <li className="text-2xl hover:text-[#00f8b7] transition-all md:text-xl">
                            <Link href="/agenda">Agenda</Link>
                        </li>
                        <li className="text-2xl hover:text-[#00f8b7] transition-all md:text-xl">
                            <Link href="/faq">FAQ</Link>
                        </li>
                        <li className="text-2xl hover:text-[#00f8b7] transition-all md:text-xl">
                            <Link href="/team">Team</Link>
                        </li>
                        <li className="text-2xl hover:text-[#00f8b7] transition-all md:text-xl">
                            <Link href="/ubicacion">Ubicación</Link>
                        </li>
                    </ul>
                </nav>

                <Link href="https://get-in.com/en/crossroads">
                    <button className="rounded-full border border-[#00f8b7] text-white px-4 py-2 hover:bg-[#00f8b7] hover:text-black transition-all">OBTENER TICKETS</button>
                </Link>
            </div>
        </header>
    )
}