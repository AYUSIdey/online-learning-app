import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
    getUserCompanions,
    getUserSessions,
    getBookmarkedCompanions,
} from "@/lib/actions/companion.actions";
import Image from "next/image";
import CompanionsList from "@/components/CompanionsList";

const Profile = async () => {
    const user = await currentUser();

    if (!user) redirect("/sign-in");

    const companions = await getUserCompanions(user.id);
    const sessionHistory = await getUserSessions(user.id);
    const bookmarkedCompanions = await getBookmarkedCompanions(user.id);

    return (
        <main className="min-lg:w-3/4">

            <section className="flex justify-between gap-4 max-sm:flex-col items-center">
                <div className="flex gap-4 items-center">

                    <Image
                        src={user.imageUrl}
                        alt={user.firstName!}
                        width={110}
                        height={110}
                        className="rounded-full"
                    />
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-2xl">
                            {user.firstName} {user.lastName}
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            {user.emailAddresses[0].emailAddress}
                        </p>
                    </div>
                    <aside className="w-1/4 p-4 flex flex-col items-center justify-center">
                        <Image
                            src="/images/penbot.gif"
                            alt="Robot with pen"
                            width={200}
                            height={200}
                            objectFit="contain"
                            unoptimized
                        />
                    </aside>
                </div>
                <div className="flex gap-4">
                    <div className="border border-black rouded-lg p-3 gap-2 flex flex-col h-fit">
                        <div className="flex gap-2 items-center">
                            <Image
                                src="/icons/check.svg"
                                alt="checkmark"
                                width={22}
                                height={22}
                            />
                            <p className="text-2xl font-bold">{sessionHistory.length}</p>
                        </div>
                        <div>Lessons completed</div>
                    </div>
                    <div className="border border-black rouded-lg p-3 gap-2 flex flex-col h-fit">
                        <div className="flex gap-2 items-center">
                            <Image src="/icons/cap.svg" alt="cap" width={22} height={22} />
                            <p className="text-2xl font-bold">{companions.length}</p>
                        </div>
                        <div>Companions created</div>
                    </div>

                    <aside className="w-1/4 p-4 flex flex-col items-center justify-center">
                        <Image
                            src="/images/rocket.gif"
                            alt="Robot with pen"
                            width={200}
                            height={200}
                            objectFit="contain"
                            unoptimized
                        />
                    </aside>
                </div>
            </section>
            <Accordion type="multiple">
                <AccordionItem value="bookmarks">
                    <AccordionTrigger className="text-2xl font-bold">
                        Bookmarked Companions {`(${bookmarkedCompanions.length})`}
                    </AccordionTrigger>
                    <AccordionContent>
                        <CompanionsList
                            companions={bookmarkedCompanions}
                            title="Bookmarked Companions"
                        />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="recent">
                    <AccordionTrigger className="text-2xl font-bold">
                        Recent Sessions
                    </AccordionTrigger>
                    <AccordionContent>
                        <CompanionsList
                            title="Recent Sessions"
                            companions={sessionHistory}
                        />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="companions">
                    <AccordionTrigger className="text-2xl font-bold">
                        My Companions {`(${companions.length})`}
                    </AccordionTrigger>
                    <AccordionContent>
                        <CompanionsList title="My Companions" companions={companions} />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <div className="flex-grow md:w-1/2 flex items-center justify-center  min-h-[150px]">
                <Image
                    src="/images/rolling-robot.gif"
                    alt="Thumbs up robot"
                    width={300}
                    height={300}
                    objectFit="contain"
                    unoptimized
                />
            </div>
        </main>
    );
};
export default Profile;