import Image from "next/image"

export default function Location() {
    const ccLiderImages = [
        {
            name: "cc-lider-1",
            path: "/images/cc-lider/cc-lider-1.jpg"
        },
        // {
        //     name: "cc-lider-2",
        //     path: "/images/cc-lider/cc-lider-2.jpg"
        // },
        {
            name: "cc-lider-3",
            path: "/images/cc-lider/cc-lider-3.jpg"
        },
        {
            name: "cc-lider-4",
            path: "/images/cc-lider/cc-lider-4.webp"
        },
        {
            name: "cc-lider-5",
            path: "/images/cc-lider/cc-lider-5.jpeg"
        },
    ]
    return (
        <section className="mt-[140px] px-5">
            <h2 className="text-3xl font-bold my-16"><span className="text-secondary">Ubicación:</span> Centro Comercial Lider</h2>

            <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex flex-col justify-start items-center gap-4">
                    <p>CC Líder es uno de los centros comerciales más grandes y populares de Caracas, Venezuela. Inaugurado en 2008, está ubicado en la Avenida Francisco de Miranda, en la zona de La California.</p>

                    <div className="grid w-full grid-cols-2 gap-4">
                        {
                            ccLiderImages.map(({ name, path }) => (
                                <Image 
                                    alt={name}
                                    src={path}
                                    width={1000}
                                    height={1000}
                                    className="w-full h-auto"
                                    key={name}
                                />
                            )) 
                        }
                    </div>
                </div>
                <div className="w-full mx-auto flex justify-center items-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24910.682855005023!2d-66.8345180844558!3d10.485908718956166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58321f7ff1df%3A0xb03e14bfba3d104f!2sCentro%20Comercial%20L%C3%ADder!5e0!3m2!1ses-419!2sve!4v1720385260839!5m2!1ses-419!2sve" width="800" height="600" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>



        </section>
    );
}