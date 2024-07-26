import Image from "next/image"
import Link from "next/link"
import { roleList, team } from "./team";

export default function Team() {

    return (
        <section className="mt-[140px] px-5">
            <h1 className="text-3xl font-bold text-white my-16">Team Solana Allstars Venezuela</h1>
            {
                roleList.map(role => (
                    <div key={role}>
                        <h2 className="text-2xl font-semibold text-secondary mt-12 mb-4">{role}</h2>

                        <div className="h-[1px] bg-white opacity-25 w-full mb-12"></div>

                        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mx-auto">
                            {
                                team.filter((member) => member.role === role).map(({ imagePath, name, xUrl, xUsername }) => (
                                    <div key={xUsername} className="flex flex-col justify-center items-center gap-y-2 text-center">
                                        <Image
                                            alt=""
                                            src={imagePath}
                                            width={80}
                                            height={80}
                                            className="rounded-full"
                                        />
                                        <h3 className="font-semibold text-secondary text-xl">{name}</h3>
                                        <p>Usuario de X: <Link href={xUrl} target="_blank" className="text-secondary underline">@{xUsername}</Link></p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }

        </section>
    );
}
