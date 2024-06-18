import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <section>
      <div className="w-full h-auto min-h-[400px] bg-custom-image flex justify-center text-center items-center flex-col gap-y-5 p-10 mt-[92px]">
        <p className="font-semibold z-30">Caracas, Venezuela • 31 de Agosto, 2024</p>
        <h1 className="text-4xl font-bold z-30">Solana Allstars LATAM Crypto Festival</h1>
        <Link href="https://www.youtube.com/live/wilFLhdkyy8?feature=shared" target="_blank" className="z-30">
          <button className="rounded-full bg-black text-white px-4 py-4 cursor-pointer shadow-lg shadow-[#00f8b7] hover:scale-95 transition-all">► <span className="text-[#00f8b7]">LATAM</span> Crypto Festival Livestream</button>
        </Link>
      </div>

      <div className="flex justify-center items-center gap-x-8 mt-10 px-5 mb-32">
        <div className="bg-white text-black w-full h-16 flex justify-center items-center font-semibold">
          <p>1.500 Asistentes</p>
        </div>
        <div className="bg-white text-black w-full h-16 flex justify-center items-center font-semibold">
          <p>30+ Speakers</p>
        </div>
        <div className="bg-white text-black w-full h-16 flex justify-center items-center font-semibold">
          1 Día
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 justify-center items-center">
        <div className="px-5 flex flex-col justify-center items-start gap-y-7">
          <h2 className="text-3xl text-[#00f8b7] font-semibold">Sobre LATAM Crypto Festival</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa doloremque beatae odio, sapiente exercitationem ut illo eius fuga quas laborum tempore molestiae eligendi nihil, consequatur quidem sint repellat dignissimos!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa doloremque beatae odio, sapiente exercitationem ut illo eius fuga quas laborum tempore molestiae eligendi nihil, consequatur quidem sint repellat dignissimos!</p>
        </div>

        <video width="600" controls>
          <source src="/videos/example-video.MOV" type="video/mov" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-0 mx-auto px-5 my-20">
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
        <Image
          alt="Gallery"
          src={"/images/main-cover.jpg"}
          width={300}
          height={300}
          className="w-full h-auto"
        />
      </div>

    </section>
  );
}
