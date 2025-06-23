import CompanionForm from "@/components/CompanionForm";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { Separator } from "@/components/ui/separator";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";

const NewCompanion = async () => {

    const { userId } = await auth();
    if(!userId) redirect('/sign-in');


    return (

        <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)] w-full max-w-7xl mx-auto py-8 px-4 gap-8
                    bg-gray-50 text-primary">

            <LeftSidebar />

            <main className="flex-grow flex flex-col items-center justify-start
                             py-8 px-4 bg-white rounded-lg shadow-lg border border-amber-400">
                {/* Article within main: This is where you apply max-width to constrain the form itself. */}
                <article className="w-full max-w-3xl gap-4 flex flex-col"> {/* Increased max-w to 3xl for more width */}
                    <h1 className="text-4xl font-extrabold mb-6 text-center lg:text-left">
                        <span className="bg-clip-text text-primary ">
                            Build Your Companion
                        </span>
                    </h1>
                    <Separator className="mb-6 bg-gray-200" />
                    <CompanionForm />
                </article>
            </main>

            <RightSidebar />

        </div>
    );
};
export default NewCompanion;