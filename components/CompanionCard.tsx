"use client";
import { removeBookmark } from "@/lib/actions/companion.actions";
import { addBookmark } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react';

interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
    bookmarked: boolean;
}

const CompanionCard = ({
                           id,
                           name,
                           topic,
                           subject,
                           duration,
                           color,
                           bookmarked: bookmarkedInitial, // Renamed to avoid shadowing
                       }: CompanionCardProps) => {
    const pathname = usePathname();
    const [isBookmarked, setIsBookmarked] = useState(bookmarkedInitial);

    // --- CRUCIAL: Synchronize internal state with props ---
    useEffect(() => {
        setIsBookmarked(bookmarkedInitial);
    }, [bookmarkedInitial]);
    // --------------------------------------------------------

    const handleBookmark = async () => {
        try {
            if (isBookmarked) {
                await removeBookmark(id, pathname);
            } else {
                await addBookmark(id, pathname);
            }
            // IMPORTANT: Do NOT directly toggle `setIsBookmarked(!isBookmarked)` here.
            // The revalidatePath will trigger a full server re-render,
            // and the `useEffect` above will correctly update the state.
            // This ensures a single source of truth from the server.
        } catch (error) {
            console.error("Failed to toggle bookmark:", error);
            // Optionally, revert the UI state or show an error message
        }
    };
    return (
        <article className="companion-card" style={{ backgroundColor: color }}>
            <div className="flex justify-between items-center">
                <div className="subject-badge">{subject}</div>
                <button className="companion-bookmark" onClick={handleBookmark}>
                    <Image
                        src={
                            isBookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"
                        }
                        alt="bookmark"
                        width={12.5}
                        height={15}
                    />
                </button>
            </div>

            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-sm">{topic}</p>
            <div className="flex items-center gap-2">
                <Image
                    src="/icons/clock.svg"
                    alt="duration"
                    width={13.5}
                    height={13.5}
                />
                <p className="text-sm">{duration} minutes</p>
            </div>

            <Link href={`/companions/${id}`} className="w-full">
                <button className="btn-primary w-full justify-center">
                    Launch Lesson
                </button>
            </Link>
        </article>
    );
};

export default CompanionCard;