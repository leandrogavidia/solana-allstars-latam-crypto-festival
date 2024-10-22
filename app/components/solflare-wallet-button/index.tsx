import Solflare from "@solflare-wallet/sdk";
import Image from "next/image";

export const SolflareWalletButton = () => {
  const wallet = new Solflare();
  wallet.on('connect', () => {
    console.log('connected', wallet.publicKey?.toString());
});
    console.log(wallet.connected, wallet.isConnected, wallet.publicKey?.toString())
  return (
    <button
      onClick={async () => {
        await wallet.connect();
      }}
      className="flex justify-center items-center gap-x-2 rounded-full font-semibold border px-4 py-2 transition-all border-primary text-primary hover:bg-primary hover:text-black"
    >
      <Image
        alt="Solflare"
        title="Solflare"
        width={512}
        height={512}
        src={"/images/solflare.png"}
        className="h-auto w-full max-w-6"
      />
      {wallet.isConnected ? (
        <p>
            {
                wallet.publicKey?.toString().slice(0, 3) + "..." + wallet.publicKey?.toString().slice(-3)
            }
        </p>
      ) : (
        <p>Conectar wallet</p>
      )}
    </button>
  );
};
