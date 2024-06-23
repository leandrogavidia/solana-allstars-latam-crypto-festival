"use client"

import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const imageGallery = [
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
    {
      name: "Gallery",
      path: "/images/main-cover.jpg"
    },
  ]

  const extraInfoList = ["1.500 Asistentes", "30+ Speakers", "1 Día"]

  return (
    <section>
      <div className="w-full h-auto min-h-[400px] bg-custom-image flex justify-center text-center items-center flex-col gap-y-5 p-10 mt-[92px]">
        <p className="font-semibold z-30">Caracas, Venezuela • 31 de Agosto, 2024</p>
        <h1 className="text-4xl font-bold z-30">Solana Allstars LATAM Crypto Festival</h1>
        <h2 className="z-30 font-semibold text-xl">¡100% GRATUITO!</h2>
        <Link href="https://www.youtube.com/live/wilFLhdkyy8?feature=shared" target="_blank" className="z-30">
          <button className="rounded-full bg-black text-white px-4 py-4 cursor-pointer shadow-lg shadow-secondary hover:scale-95 transition-all">► <span className="text-secondary">LATAM</span> Crypto Festival Livestream</button>
        </Link>
      </div>

      <div className="flex justify-center items-center gap-x-8 mt-10 px-5 mb-32">
        {
          extraInfoList.map(info => (
            <div className="bg-white rounded-full text-black w-full h-16 flex justify-center items-center font-semibold">
              <p>{info}</p>
            </div>
          ))
        }
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 justify-center items-center">
        <div className="px-5 flex flex-col justify-center items-start gap-y-7">
          <h2 className="text-3xl text-secondary font-semibold">Sobre LATAM Crypto Festival</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa doloremque beatae odio, sapiente exercitationem ut illo eius fuga quas laborum tempore molestiae eligendi nihil, consequatur quidem sint repellat dignissimos!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa doloremque beatae odio, sapiente exercitationem ut illo eius fuga quas laborum tempore molestiae eligendi nihil, consequatur quidem sint repellat dignissimos!</p>
        </div>

        <video autoPlay={true} muted={true} width="600" controls>
          <source src="/videos/example-video.MOV" type="video/mov" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-0 mx-auto px-5 my-20">
        {
          imageGallery.map(({ name, path }) => (
            <Image
              alt={name}
              src={path}
              width={300}
              height={300}
              className="w-full h-auto"
            />
          ))
        }
      </div>

    </section>
  );
}
