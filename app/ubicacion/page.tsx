export default function Location() {
    return (
        <section className="mt-[140px] px-5">
            <h2 className="text-3xl font-bold my-16"><span className="text-[#00f8b7]">Ubicación:</span> Centro Comercial Tamanaco</h2>

            <div className="w-full mx-auto flex justify-center items-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.2956446787293!2d-66.85899762586486!3d10.477343864641057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a580bf3019d6b%3A0x3eb43f7f6f9942e1!2sHotel%20Tamanaco%20Caracas!5e0!3m2!1ses!2sve!4v1718748229879!5m2!1ses!2sve" width="800" height="600" style={{
                    border: 0
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    );
}