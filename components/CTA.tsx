import Image from "next/image";
import Link from "next/link";

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge">
                Master What Matters
            </div>
            <h2 className="text-3xl font-bold">
                Design Your Own Success: Build Personalised Study Companions
            </h2>
            <p>
                Choose a name, subject, voice & personality -
                and start your learning journey through voice conversations that
                feels natural and fun to you.....
            </p>
            <Image src="images/cta.svg" alt="cta" width={362} height={232} className="rounded-border border-amber-50 "/>
            <button className="btn-primary border-amber-400 border-4 rounded-4xl">
                <Image src="/icons/plus.svg" alt="plus" width={12} height={12}/>
                <Link href="/companions/new">
                    <p>Build a New Companion Now !</p>
                </Link>
            </button>

        </section>
    )
}
export default CTA