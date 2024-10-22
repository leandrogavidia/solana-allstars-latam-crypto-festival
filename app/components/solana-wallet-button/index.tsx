"use client";
import dynamic from "next/dynamic";
import Image from "next/image"

const WalletIcon = () => (
  <svg width={12} height={14} viewBox="0 0 12 14" fill="none">
    <path
      fill="#fff"
      d="M1.5 1.75h9c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1.875a.385.385 0 0 0-.375.375c0 .21.164.375.375.375H10.5c.82 0 1.5.68 1.5 1.5v5.25c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5Zm8.25 5.625a.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75a.771.771 0 0 0-.75-.75Z"
    />
  </svg>
);

const CONNECT_WALLET = (
  <>
    <div className="flex flex-row items-center justify-center gap-3 text-sm">
      <Image
        alt="Solflare"
        title="Solflare"
        width={512}
        height={512}
        src={"/images/solflare.png"}
        className="h-auto w-full max-w-6"
      />
      Conectar Wallet
    </div>
  </>
);
const LABELS = {
  "change-wallet": "Cambiar wallet",
  connecting: "Conectando...",
  "copy-address": "Copiar dirección",
  copied: "Copiada",
  disconnect: "Desconectar",
  "has-wallet": "Connectar",
  "no-wallet": CONNECT_WALLET,
} as const;

const BaseWalletMultiButton = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).BaseWalletMultiButton,
  { ssr: false }
);

export const SolanaWalletButton = () => {
  return (
    <div className={"flex max-h-10 min-h-10 items-center justify-center"}>
      {/*@ts-expect-error labels type*/}
      <BaseWalletMultiButton labels={LABELS} />
    </div>
  );
};

const BaseWalletMultiModal = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletModal,
  { ssr: false }
);

export const SolflareWalletModal = () => {
  return (
    <div className={"flex max-h-10 min-h-10 items-center justify-center"}>
      {/*@ts-expect-error labels type*/}
      <BaseWalletMultiModal labels={LABELS} />aaaaa
    </div>
  );
};
