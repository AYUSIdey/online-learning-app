import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function SignInPage() {
    return (
        <main className="flex justify-center items-center min-h-screen bg-gray-50 text-gray-900 p-4">
            <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-lg shadow-xl border border-gray-200">

                <div className="hidden md:flex flex-col items-center justify-center text-center">
                    <div className="w-48 h-48 relative">
                        <Image
                            src="/images/dancing-robot.gif"
                            alt="Waving Robot Welcoming You"
                            layout="fill"
                            objectFit="contain"
                            unoptimized
                            className="rounded-full shadow-lg border-2 border-amber-400 p-1"
                        />
                    </div>
                    <p className="mt-4 text-primary font-semibold text-lg">
                        Let's build your perfect study companion!
                    </p>
                </div>

                <div className="hidden md:block w-px h-64 bg-gray-200"></div>

                <div className="flex-shrink-0">
                    <SignIn />
                </div>
            </div>
        </main>
    );
}