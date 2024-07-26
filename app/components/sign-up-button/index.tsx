"use client"

import Link from "next/link"
import { useContext } from "react";
import { ModalContext } from "@/app/modal-context";

export function SignUpButton({
    className
}: {
    className?: string
}) {
    const { setIsOpen } = useContext(ModalContext)
    return (
        <button  
            onClick={() => setIsOpen(true)}
            className={"rounded-full font-semibold border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-black transition-all " + className}
        >
            ¡REGISTRATE AQUí!
        </button>
    )
}