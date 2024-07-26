"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation';
import { SignUpButton } from "../sign-up-button";
import { pathList } from "./path-list";

export function Header() {
    const currentPath = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const currentStylesPath = 'pointer-events-none cursor-default select-none hover:text-secondary after:!left-0 after:!bg-primary before:right-0 before:!bg-primary text-primary'

    useEffect(() => {
        setIsOpen(false);
    }, [currentPath])

    return (
        <header className="flex justify-between items-center mx-auto gap-x-5 w-full px-5 py-6 fixed top-0 z-[100] bg-black max-w-[1920px] left-1/2 -translate-x-1/2 ">
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
                    className="relative z-50 md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}
                    alt="Menu abierto"
                    src={"/icons/x-icon.svg"}
                    width={32}
                    height={32}
                /> : <Image
                    className="relative z-50 md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}
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
                                        <li
                                            key={path}
                                            className="text-2xl hover:text-secondary transition-all md:text-xl"
                                        >
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
                                <li key={path} className={`overflow-hidden py-1 text-2xl transition-all md:text-xl hover:text-secondary relative after:content-[''] after:w-full after:h-[2px] after:bg-secondary after:absolute after:bottom-0 after:-left-full after:transition-all after:hover:left-0 before:content-[''] before:w-full before:h-[2px] before:bg-secondary before:absolute before:top-0 before:-right-full before:transition-all before:hover:right-0 ${currentPath === path ? currentStylesPath : ''}`}>
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