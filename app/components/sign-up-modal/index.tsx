"use client"

import Image from "next/image"
import { useContext } from "react"
import { ModalContext } from "@/app/modal-context"

export function SignUpModal() {
    const { isOpen, setIsOpen } = useContext(ModalContext)
    return (
        <>
            {
                isOpen ? (
                    <div
                        className="bg-[rgba(0,0,0,0.7)] z-[200] h-screen w-full fixed flex justify-center items-center p-10 top-0 right-0"
                        onClick={() => setIsOpen(false)}
                    >
                        <div
                            className="bg-zinc-950 rounded-2xl flex flex-col justify-center items-start gap-6 px-5 pt-14 pb-6 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-5 right-5 z-[250]" onClick={() => setIsOpen(false)}>
                                <Image
                                    className={"cursor-pointer"}
                                    alt="Modal abierto"
                                    src={"/icons/x-icon.svg"}
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <h3 className="text-2xl font-semibold">¡Registrate al <span className="text-secondary">LATAM Crypto Festival</span>!</h3>
                            <form className="flex flex-col justify-center items-start gap-5 w-full">
                                <div className="flex flex-col justify-center items-start gap-2 w-full">
                                    <label htmlFor="phone">Telefono <span className="text-red-600">*</span></label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+58 412 1234567"
                                        className="w-full bg-zinc-900 rounded-xl h-9 outline-none px-3 text-sm border-zinc-700 border-1 focus:outline-secondary placeholder:text-zinc-700 focus:bg-zinc-950"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-start gap-2 w-full">
                                    <label htmlFor="country">País de donde nos visita</label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        placeholder="Venezuela"
                                        className="w-full bg-zinc-900 rounded-xl h-9 outline-none px-3 text-sm border-zinc-700 border-1 focus:outline-secondary placeholder:text-zinc-700 focus:bg-zinc-950"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full h-10 rounded-full font-semibold border border-primary text-primary text-base hover:bg-primary hover:text-black transition-all"
                                >Registrarse</button>
                            </form>
                        </div>
                    </div>
                ) : ""
            }
        </>

    )
}