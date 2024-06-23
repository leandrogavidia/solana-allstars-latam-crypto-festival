export default function Agenda() {

    const events = [
        {
            title: "Panel de opinión XXXXXXXXX",
            hour: "10:00am"
        },
        {
            title: "Panel de opinión XXXXXXXXX",
            hour: "11:00am"
        },
        {
            title: "Panel de opinión XXXXXXXXX",
            hour: "12:00pm"
        },
        {
            title: "Panel de opinión XXXXXXXXX",
            hour: "01:00pm"
        },
        {
            title: "Panel de opinión XXXXXXXXX",
            hour: "02:00pm"

        },
        {
            title: "Panel de opinión XXXXXXXXX",
            hour: "02:00pm"
        },
    ]

    return (
        <section className="mt-[140px] px-5">
            <h1 className="text-3xl font-bold mt-16]"><span className="text-secondary">Agenda:</span> 31 de Agosto, 2024</h1>

            <div className="flex flex-col justify-center items-start gap-y-10 mt-16">
                {
                    events.map(({ title, hour }) => (
                        <div key={`${title}-${hour}`} className="flex flex-col justify-center items-start gap-y-4 w-full">
                            <h3 className="text-xl text-secondary font-semibold">{title}</h3>
                            <p>{hour}</p>
                            <div className="w-full h-[1px] bg-white opacity-20"></div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}