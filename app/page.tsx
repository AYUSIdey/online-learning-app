import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl ">Popular Companions </h1>

        <section className="home-section">
            <CompanionCard
                id = "123"
                name = "New Coder"
                topic = "List and Tuples"
                subject = "Programming Language Python"
                duration = {45}
                color ="#aada6e"
            />
            <CompanionCard
                id = "456"
                name = "The Operator"
                topic = "Process Table and Control Block"
                subject = "Operating System"
                duration = {20}
                color ="#fada6e"
            />
            <CompanionCard
                id = "789"
                name = "New Data Scientist"
                topic = "Functional Dependency"
                subject = "Database Management System"
                duration = {45}
                color ="#jada6e"
            />
        </section>

        <section className="home-section">
            <CompanionsList
                title = "Recently completed sessions"
                companions = {recentSessions}
                classNames = "w-2/3 max-lg:w-full"
            />
            <CTA/>
        </section>
    </main>
  )
}

export default Page