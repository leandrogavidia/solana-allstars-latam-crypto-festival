import Image from "next/image"

export default function Location() {
    const ccLiderImages = [
        {
            name: "ccpcv-1",
            path: "/images/ccpcv/ccpcv-1.jpg"
        },
        {
            name: "ccpcv-2",
            path: "/images/ccpcv/ccpcv-2.jpg"
        },
        {
            name: "ccpcv-3",
            path: "/images/ccpcv/ccpcv-3.png"
        },
        {
            name: "ccpcv-4",
            path: "/images/ccpcv/ccpcv-4.jpg"
        },
    ]
    return (
        <section className="mt-[140px] px-5">
            <h2 className="text-3xl font-bold my-16"><span className="text-secondary">Ubicación:</span> C.C Parque Cerro Verde
            </h2>

            <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex flex-col justify-start items-center gap-4">
                    <p>Parque Cerro Verde es un moderno centro comercial en Caracas, Venezuela, que ofrece una experiencia completa para toda la familia. Con una arquitectura vanguardista inspirada en el Ávila, cuenta con amplios espacios, diversas tiendas, restaurantes y áreas de entretenimiento.</p>

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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4077.6559443694778!2d-66.83261020349136!3d10.45188873930609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a580abfac5b39%3A0xc808d8a8b250a296!2sParque%20Cerro%20Verde!5e0!3m2!1ses-419!2sve!4v1729457176051!5m2!1ses-419!2sve" width="800" height="600" style={{
                    border: "0"
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>



        </section>
    );
}