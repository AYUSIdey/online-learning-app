import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps{
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    colour: string;
}

const CompanionCard = ({id, name, topic, subject, duration, colour}:CompanionCardProps) => {
    return (
        <article className="companion-card" style={{background: colour}}>
            <div className="flex justify-between items-center">
                <div className="subject-badge">
                    {subject}
                </div>
                <button className="companion-bookmark">
                    <Image src="/icons/bookmark.svg" alt="bookmark"
                           width={12.5} height={15}
                    />
                </button>

            </div>

            <h2 className="text-2xl font-bold">{name}</h2>
            <h2 className="text-sm">{topic}</h2>
            <div className="flex items-center gap-2">
                <Image src="/icons/clock.svg" alt="duration"
                width={13.5} height={13.5}
                />
                <p className="texsm">{duration} minutes</p>

            </div>
            <Link href={`/companions/${id}`} className="w-full">
                <button className="btn-primary w-full justify-center">
                    Start Learning
                </button>
            </Link>
        </article>
    )
}
export default CompanionCard