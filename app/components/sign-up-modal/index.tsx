"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { ModalContext } from "@/app/modal-context";
import { useWallet } from "@solana/wallet-adapter-react";
import { useForm } from "react-hook-form";

export function SignUpModal() {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { publicKey } = useWallet();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      phone: "",
      email: "",
      translation_issue: "",
      solana_wallet: publicKey?.toString(),
    },
  });

  const dynamicStyles = isConfirmed ? "pointer-events-none cursor-default select-none bg-secondary border-secondary text-black" : isLoading ? "pointer-events-none cursor-default select-none bg-gray-500 border-gray-500 text-black" : "border-primary text-primary text-base hover:bg-primary hover:text-black"

  const onSubmit = async (data: any) => {
    try {
        setIsLoading(true)

        console.log("DATA", data);
    
        const body = JSON.stringify({
            "coupon_code": null,
            "currency": null,
            "email": data.email,
            "eth_address_info": null,
            "event_api_id": "evt-j8xzYdaztck8elu",
            "event_invite_api_id": null,
            "expected_amount_cents": 0,
            "expected_amount_discount": 0,
            "expected_amount_tax": 0,
            "for_waitlist": false,
            "name": data.fullname,
            "payment_method": null,
            "phone_number": data.phone,
            "registration_answers": [
                {
                    "answer": data.translation_issue,
                    "label": "Tienes algun problema para trasladarte al evento?",
                    "question_id": "i0g5xggi",
                    "question_type": "text"
                },
                {
                    "answer": publicKey?.toString(),
                    "label": "Solana Wallet",
                    "question_id": "cnnbic9p",
                    "question_type": "text"
                }
            ],
            "solana_address": publicKey?.toString(),
            "solana_address_info": null,
            "ticket_type_to_selection": {
                "evtticktyp-UGNC4jFVH44bOU8": {
                    "amount": 0,
                    "count": 1
                }
            },
            "timezone": "America/Caracas",
            "token_gate_info": null
        })
    
        const response = await fetch("https://api.lu.ma/event/independent/register", {
            method: "POST",
            body,
            headers: {
                "Content-Type": "application/json",
                "x-luma-api-key": process.env.NEXT_PUBLIC_LUMA_SECRET_KEY || ""
            },
        });
    
        console.log(response)

        setIsLoading(false)
        setIsConfirmed(true)
    } catch (e) {
        console.error("Error:", e)
        setIsLoading(false)
    }
  };
  console.log("errors: ", errors);
  return (
    <>
      {isOpen ? (
        <div
          className="bg-[rgba(0,0,0,0.7)] z-[200] h-screen w-full fixed flex justify-center items-center p-10 top-0 right-0"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="max-h-[95%] overflow-auto bg-zinc-950 rounded-2xl flex flex-col justify-start items-start gap-6 px-5 pt-14 pb-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute top-5 right-5 z-[250]"
              onClick={() => setIsOpen(false)}
            >
              <Image
                className={"cursor-pointer"}
                alt="Modal abierto"
                src={"/icons/x-icon.svg"}
                width={20}
                height={20}
              />
            </div>
            <h3 className="text-2xl font-semibold">
              ¡Registrate al{" "}
              <span className="text-secondary">LATAM Crypto Festival</span>!
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-start items-start gap-5 w-full"
            >
              <div className="flex flex-col justify-center items-start gap-2 w-full">
                <label htmlFor="full-name">
                  Nombre completo <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("fullname", { required: true })}
                  type="text"
                  id="fullname"
                  placeholder="e.g. Juan Perez"
                  className="w-full bg-zinc-900 rounded-xl h-9 outline-none px-3 text-sm border-zinc-700 border-1 focus:outline-secondary placeholder:text-zinc-700 focus:bg-zinc-950"
                />
                <span className="text-red-600">
                  {errors && errors.fullname ? errors.fullname.type : ""}
                </span>
              </div>
              <div className="flex flex-col justify-center items-start gap-2 w-full">
                <label htmlFor="phone">
                  Telefono <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("phone", { required: true })}
                  type="tel"
                  id="phone"
                  placeholder="e.g. +58 412 1234567"
                  className="w-full bg-zinc-900 rounded-xl h-9 outline-none px-3 text-sm border-zinc-700 border-1 focus:outline-secondary placeholder:text-zinc-700 focus:bg-zinc-950"
                />
                <span className="text-red-600">
                  {errors && errors.phone ? errors.phone.type : ""}
                </span>
              </div>
              <div className="flex flex-col justify-center items-start gap-2 w-full">
                <label htmlFor="email">
                  Correo electrónico<span className="text-red-600">*</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  id="email"
                  placeholder="e.g. latamcrypto@gmail.com"
                  className="w-full bg-zinc-900 rounded-xl h-9 outline-none px-3 text-sm border-zinc-700 border-1 focus:outline-secondary placeholder:text-zinc-700 focus:bg-zinc-950"
                />
                <span className="text-red-600">
                  {errors && errors.email ? errors.email.type : ""}
                </span>
              </div>
              <div className="flex flex-col justify-center items-start gap-2 w-full">
                <label htmlFor="translation-issue">
                  ¿Tienes algun problema para trasladarte al evento?
                </label>
                <input
                  {...register("translation_issue", { required: false })}
                  type="tel"
                  id="translation_issue"
                  placeholder="e.g. No"
                  className="w-full bg-zinc-900 rounded-xl h-9 outline-none px-3 text-sm border-zinc-700 border-1 focus:outline-secondary placeholder:text-zinc-700 focus:bg-zinc-950"
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-2 w-full">
                <label htmlFor="country">
                  Solana Wallet <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("solana_wallet", { required: false })}
                  type="text"
                  id="solana_wallet"
                  value={publicKey?.toString()}
                  disabled
                  placeholder="e.g. 6sRkRJpnod3R9mNJZici8W71c54BNu9f7dsooAA2k2CR"
                  className="w-full bg-zinc-900 rounded-xl h-9 outline-none px-3 text-sm border-zinc-700 border-1 focus:outline-secondary placeholder:text-zinc-700 focus:bg-zinc-950"
                />
              </div>
              <button
                type="submit"
                className={"w-full h-10 rounded-full font-semibold border transition-all " + dynamicStyles}
              >
                {isConfirmed ? "¡Registro exitoso!" : isLoading ? "Enviando..." : "Confirmar"}
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
