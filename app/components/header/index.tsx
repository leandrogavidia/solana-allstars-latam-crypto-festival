"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SignUpButton } from "../sign-up-button";
import { pathList } from "./path-list";
import { SolanaWalletButton } from "../solana-wallet-button";

export function Header() {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentStylesPath =
    "pointer-events-none cursor-default select-none hover:text-secondary after:!left-0 after:!bg-primary before:right-0 before:!bg-primary text-primary";

  const disabledStylesPath =
    "pointer-events-none cursor-default select-none opacity-70 overflow-visible after:content-[0] before:content-[0]";

  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);


  return (
    <header className="flex justify-between items-center mx-auto gap-x-5 w-full px-5 py-6 fixed top-0 z-[100] bg-black max-w-[1920px] left-1/2 -translate-x-1/2 ">
      <Link href="/" className="cursor-pointer">
        <Image
          alt="Logo Solana Allstars Latam"
          src={"/images/logo.png"}
          width={2424}
          height={1055}
          className="w-full h-auto max-w-[48px] relative z-50 block sm:hidden"
        />
        <Image
          alt="Logo Solana Allstars Latam"
          src={"/images/logo-desktop.png"}
          width={2424}
          height={1055}
          className="w-full h-auto max-w-[120px] relative z-50 hidden sm:block"
        />
      </Link>

      <div className="flex justify-center items-center gap-x-5 md:hidden ">
        <SolanaWalletButton />
        {isOpen ? (
          <Image
            className="relative z-50 md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            alt="Menu abierto"
            src={"/icons/x-icon.svg"}
            width={32}
            height={32}
          />
        ) : (
          <Image
            className="relative z-50 md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            alt="Menu abierto"
            src={"/icons/menu-icon.svg"}
            width={32}
            height={32}
          />
        )}
      </div>

      {isOpen && (
        <div className="w-full h-screen absolute top-0 right-0 z-40 bg-black flex flex-col justify-center items-center md:hidden">
          <nav>
            <ul className="flex flex-col gap-y-3 items-center">
              {pathList.map(({ name, path, disabled }) => (
                <li
                  key={path}
                  className={`overflow-hidden py-1 text-2xl transition-all md:text-xl hover:text-secondary relative after:content-[''] after:w-full after:h-[2px] after:bg-secondary after:absolute after:bottom-0 after:-left-full after:transition-all after:hover:left-0 before:content-[''] before:w-full before:h-[2px] before:bg-secondary before:absolute before:top-0 before:-right-full before:transition-all before:hover:right-0 ${
                    currentPath === path ? currentStylesPath : ""
                  } ${disabled ? disabledStylesPath : ""}`}
                >
                  <Link href={path} className="relative">{name}</Link>
                  {
                    disabled && (
                        <sub className="text-xs right-0 absolute -bottom-2 text-secondary">Soon</sub>
                    )
                  }
                </li>
              ))}
            </ul>
          </nav>
          

          <SignUpButton className="absolute bottom-6" />
        </div>
      )}

      <div className="hidden md:flex justify-between w-full items-center gap-x-5">
        <nav>
          <ul className="flex justify-start gap-x-3 items-center">
            {pathList.map(({ name, path, disabled }) => (
              <li
                title={disabled ? "Coming soon" : name}
                key={path}
                className={`overflow-hidden py-1 text-2xl transition-all md:text-xl hover:text-secondary relative after:content-[''] after:w-full after:h-[2px] after:bg-secondary after:absolute after:bottom-0 after:-left-full after:transition-all after:hover:left-0 before:content-[''] before:w-full before:h-[2px] before:bg-secondary before:absolute before:top-0 before:-right-full before:transition-all before:hover:right-0 ${
                  currentPath === path ? currentStylesPath : ""
                } ${disabled ? disabledStylesPath : ""}`}
              >
                <Link href={path} className="relative">{name}</Link>
                {
                    disabled && (
                        <sub className="text-xs  right-0 absolute -bottom-2 text-secondary">Soon</sub>
                    )
                }
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center items-center gap-x-5">
            <SignUpButton />
            <SolanaWalletButton />
        </div>
      </div>
    </header>
  );
}
