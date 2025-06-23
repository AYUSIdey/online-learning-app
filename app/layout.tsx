import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import {
  ClerkProvider,

} from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AD Master Classes",
  description: "Real-time AI based Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    //   <html lang="en">
    //     <body className={`${bricolage.variable} antialiased`}>
    //       <header>
    //         <Navbar />
    //         <div className="flex items-center gap-4 ml-auto">
    //           <SignedOut>
    //             <SignInButton />
    //             <SignUpButton />
    //           </SignedOut>
    //           <SignedIn>
    //             <UserButton />
    //           </SignedIn>
    //         </div>
    //       </header>
    //       {children}
    //     </body>
    //   </html>
    // </ClerkProvider>

      <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
      <ClerkProvider appearance={{ variables: { colorPrimary: '#fe5933' }} }>
        <Navbar />
        {children}
      </ClerkProvider>
      </body>
      </html>
  );
}
