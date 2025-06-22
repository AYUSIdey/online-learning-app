// components/LeftSidebar.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircleIcon, LightbulbIcon, GraduationCapIcon } from "lucide-react";

const LeftSidebar = () => {
    return (
        <aside className="w-full lg:w-1/4 p-4 space-y-6 hidden md:block">
            {/* Quick Start Guide Card */}
            <Card className="bg-blue-200 shadow-md border border-black">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <CheckCircleIcon className="w-6 h-6 " />
                        Quick Start Guide
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-primary text-sm">
                    <ul className="list-inside list-none space-y-2">
                        <li className="flex items-center gap-2">
                            <span className="font-semibold text-primary">1. Define name:</span>
                            <span className="text-primary">Give your companion a catchy name (e.g., The Pro Hacker).</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="font-semibold text-primary">2. Choose Subject:</span>
                            <span className="text-primary">Decide which subject you want to study (e.g., Database Management System, Data Structure and Algorithm).</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="font-semibold text-primary">3. Add Topic:</span>
                            <span className="text-primary">Give the detailed topic or topics which you want the companion to cover.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="font-semibold text-primary">4. Choose Voice:</span>
                            <span className="text-primary">Decide the voice of the companion.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="font-semibold text-primary">5. Choose style:</span>
                            <span className="text-primary">Decide the style in which the conversation will continue.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="font-semibold text-primary">6. Select duration:</span>
                            <span className="text-primary">Personalise the session time span.</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>


            <Card className="bg-green-400 shadow-md border border-black">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                        <LightbulbIcon className="w-6 h-6 text-black" />
                        Why Personalize Your Learning?
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-primary text-sm">
                    <ul className="list-inside list-none space-y-2">
                        <li className="flex items-center gap-2">
                            <GraduationCapIcon className="w-4 h-4 text-primary" />
                            Boost understanding with tailored explanations.
                        </li>
                        <li className="flex items-center gap-2">
                            <LightbulbIcon className="w-4 h-4 text-primary" />
                            Get instant answers on complex topics.
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircleIcon className="w-4 h-4 text-primary" />
                            Master subjects at your own pace.
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </aside>
    );
};

export default LeftSidebar;