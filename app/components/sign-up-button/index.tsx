import Link from "next/link"

export function SignUpButton({
    className
}: {
    className?: string
}) {
    return (
        <Link href="https://get-in.com/en/crossroads" className={className}>
            <button className="rounded-full font-semibold border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-black transition-all">¡REGISTRATE AQUí!</button>
        </Link>
    )
}