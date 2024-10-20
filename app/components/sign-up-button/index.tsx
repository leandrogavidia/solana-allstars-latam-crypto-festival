"use client"

import Link from "next/link"
import { useContext } from "react";
import { ModalContext } from "@/app/modal-context";
import { useWallet } from "@solana/wallet-adapter-react";

export function SignUpButton({
    className
}: {
    className?: string
}) {
    const { setIsOpen } = useContext(ModalContext)
    const { connected } = useWallet();

    const dynamicStyles = connected ? "border-secondary text-secondary hover:bg-secondary hover:text-black " : "border-gray-500 text-gray-500 pointer-events-none cursor-default select-none "

    return (
        <button  
            onClick={() => setIsOpen(true)}
            className={"rounded-full font-semibold border px-4 py-2 transition-all " +  dynamicStyles + className }
        >
            {
                connected ? "¡REGISTRATE AQUí!" : "¡Conecta tu wallet para registrarte!"
            } 
        </button>
    )
}