export default function Faq() {

    const questions = [
        {
            title: "Sobre LATAM Crypto Festival",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae officia laboriosam iure est, possimus, repellat doloremque placeat quos magnam corporis aut dolorum excepturi veniam delectus quo debitis iusto fugiat deleniti."
        },
        {
            title: "Sobre LATAM Crypto Festival",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae officia laboriosam iure est, possimus, repellat doloremque placeat quos magnam corporis aut dolorum excepturi veniam delectus quo debitis iusto fugiat deleniti."
        },
        {
            title: "Sobre LATAM Crypto Festival",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae officia laboriosam iure est, possimus, repellat doloremque placeat quos magnam corporis aut dolorum excepturi veniam delectus quo debitis iusto fugiat deleniti."
        },
        {
            title: "Sobre LATAM Crypto Festival",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae officia laboriosam iure est, possimus, repellat doloremque placeat quos magnam corporis aut dolorum excepturi veniam delectus quo debitis iusto fugiat deleniti."
        },
        {
            title: "Sobre LATAM Crypto Festival",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae officia laboriosam iure est, possimus, repellat doloremque placeat quos magnam corporis aut dolorum excepturi veniam delectus quo debitis iusto fugiat deleniti."
        },
        {
            title: "Sobre LATAM Crypto Festival",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae officia laboriosam iure est, possimus, repellat doloremque placeat quos magnam corporis aut dolorum excepturi veniam delectus quo debitis iusto fugiat deleniti."
        },
    ]

    return (
        <section className="mt-[140px] px-5">
            <h1 className="text-3xl font-bold my-16 text-[#00f8b7]">Preguntas frecuentes</h1>

            <div className="flex flex-col justify-center items-center gap-y-10">
                {
                    questions.map(({ title, content }) => (
                        <div key={title} className="flex flex-col justify-center items-start gap-y-4">
                            <h3 className="text-xl text-[#00f8b7] font-semibold">{title}</h3>
                            <p>{content}</p>
                            <div className="w-full h-[1px] bg-white opacity-20"></div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}