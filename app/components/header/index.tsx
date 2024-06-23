"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation';
import { SignUpButton } from "../sign-up-button";

export function Header() {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false)

    const pathList = [
        {
            name: "Inicio",
            path: "/",
        },
        {
            name: "Agenda",
            path: "/agenda",
        },
        {
            name: "FAQ",
            path: "/faq",
        },
        {
            name: "Team",
            path: "/team",
        },
        {
            name: "Ubicación",
            path: "/ubicacion",
        },
    ]

    useEffect(() => {
        setIsOpen(false)
    }, [path])

    return (
        <header className="flex justify-between items-center gap-x-5 w-full px-5 py-6 fixed top-0 z-[100] bg-black max-w-[1920px]">
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
                                {
                                    pathList.map(({ name, path }) => (
                                        <li key={path} className="text-2xl hover:text-secondary transition-all md:text-xl">
                                            <Link href={path}>{name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>

                        <SignUpButton className="absolute bottom-6" />
                    </div>
                )
            }

            <div className="hidden md:flex justify-between w-full items-center gap-x-5">
                <nav>
                    <ul className="flex justify-start gap-x-3 items-center">
                        {
                            pathList.map(({ name, path }) => (
                                <li key={path} className="text-2xl hover:text-secondary transition-all md:text-xl">
                                    <Link href={path}>{name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <SignUpButton />
            </div>
        </header>
    )
}