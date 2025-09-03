import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { EducationCard } from "./ui/EducationCard";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string; // ✅ unified (can hold CGPA or %)
}

const education: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Graphic Era Hill University",
    period: "2023 - 2026 (Expected) ",
    score: "CGPA: 7.26",
  },
  {
    degree: "Diploma in Computer Science Engineering",
    institution: "Govt Polytechnic Sundernagar",
    period: "2020 - 2023",
    score: "Percentage: 82.54%",
  },
  {
    degree: "High School (X)",
    institution: "Govt HS Roni Muzzafarnagar",
    period: "2018 - 2019",
    score: "Percentage: 75%",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard
              key={edu.degree}
              {...edu}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
