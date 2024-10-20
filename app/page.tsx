"use client"

import Image from "next/image"
import { imageGallery } from "./image-gallery"

export default function Home() {


  const extraInfoList = ["2.500+ Asistentes", "30+ Speakers", "1 Día"]

  return (
    <section>
      <div className="w-full h-auto min-h-[400px] bg-custom-image flex justify-center text-center items-center flex-col gap-y-5 p-10 mt-[92px]">
        <p className="font-semibold z-30">Caracas, Venezuela • 24 de Noviembre, 2024</p>
        <h1 className="text-4xl font-bold z-30">Solana Allstars LATAM Crypto Festival</h1>
        <h2 className="z-30 font-semibold text-xl">¡100% GRATUITO!</h2>
        {/* <Link href="https://www.youtube.com/live/wilFLhdkyy8?feature=shared" target="_blank" className="z-30">
          <button className="rounded-full bg-black text-white px-4 py-4 cursor-pointer shadow-lg shadow-secondary hover:scale-95 transition-all">► <span className="text-secondary">LATAM</span> Crypto Festival Livestream</button>
        </Link> */}
      </div>

      <div className="flex justify-center items-center gap-x-8 mt-10 px-5 mb-32">
        {
          extraInfoList.map(info => (
            <div key={info} className="text-center bg-white rounded-full text-black w-full h-16 flex justify-center items-center font-semibold">
              <p>{info}</p>
            </div>
          ))
        }
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 justify-center items-center px-5">
        <div className="flex flex-col justify-center items-start gap-y-7">
          <h2 className="text-3xl text-secondary font-semibold">Sobre LATAM Crypto Festival</h2>
          <p>
            ¡Únete al Latam Crypto Festival en Caracas, Venezuela! Este evento de un día, organizado por el equipo de Solana Allstars, está dedicado a impulsar la adopción de la blockchain de Solana en América Latina. </p>
          <p>Descubre las últimas innovaciones, participa en talleres interactivos y conecta con líderes de la industria. No te pierdas esta oportunidad única de formar parte del futuro del blockchain. ¡Nos vemos en Caracas!</p>
        </div>

        <video autoPlay={true} muted={true} width="600" controls loop className="mx-auto">
          <source src="/videos/allstars-recompilacion.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-0 mx-auto px-5 my-20">
        {
          imageGallery.sort(() => Math.random() - 0.5).map(({ name, path }) => (
            <Image
              key={path}
              alt={name}
              src={path}
              width={300}
              height={300}
              className="w-full h-32 max-h-32 object-cover"
            />
          ))
        }
      </div>

    </section>
  );
}
