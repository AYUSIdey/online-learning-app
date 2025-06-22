// pages/new-companion/index.tsx
import CompanionForm from "@/components/CompanionForm";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { Separator } from "@/components/ui/separator";

const NewCompanion = () => {
    return (
        // Outermost container: Defines the overall maximum width for your layout.
        // It's a flex container for the sidebars and main content.
        <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)] w-full max-w-7xl mx-auto py-8 px-4 gap-8
                    bg-gray-50 text-primary">

            {/* Left Sidebar: Fixed width on larger screens, hidden on smaller. */}
            <LeftSidebar />

            {/* Main Content Area (Your Companion Form):
                - flex-grow: Takes up all available space between the sidebars.
                - flex-col: Its children (h1, Separator, CompanionForm) stack vertically.
                - items-center: Centers its children horizontally within itself.
                - justify-start: Aligns its children to the top.
                - py-8 px-4: Internal padding.
                - bg-white rounded-lg shadow-lg border border-gray-200: Visual styling.
            */}
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

            {/* Right Sidebar: Fixed width on larger screens, hidden on smaller. */}
            <RightSidebar />
        </div>
    );
};
export default NewCompanion;