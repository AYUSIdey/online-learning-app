// components/RightSidebar.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SparklesIcon } from "lucide-react"; // Keeping SparklesIcon for the title

const RightSidebar = () => {
    return (
        <aside className="w-full lg:w-1/4 p-4 space-y-6 hidden md:block">

            <Card className="bg-white shadow-md border border-gray-200 text-center">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary flex items-center justify-center gap-2">
                        <SparklesIcon className="w-6 h-6 text-primary" />
                        Your AI Companion Awaits!
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-4">
                    <div className="w-40 h-40 flex items-center justify-center">
                        <img
                            src="/images/robot.gif"
                            alt="Waving AI Robot Companion"
                            className="max-w-full h-auto object-contain"
                        />
                    </div>
                    <p className="text-primary text-sm mt-4 px-2">
                        Build your personalized learning companion today and unlock a smarter way to study.
                    </p>

                </CardContent>
            </Card>

        </aside>
    );
};

export default RightSidebar;