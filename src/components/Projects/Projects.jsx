import React from "react";

import project1 from "../../assets/projectPic/roommate.PNG";
import project2 from "../../assets/projectPic/travel.PNG";
import project3 from "../../assets/projectPic/lawyear.PNG";
import project4 from "../../assets/projectPic/auction.PNG";
import project5 from "../../assets/projectPic/flagshipfaceoff.PNG";
import project6 from "../../assets/projectPic/english_janala.PNG";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "Roommate Finder",
      description:
        "A modern web platform for finding roommates and shared accommodation with ease.",
      image: project1,
      githubLink: "https://github.com/muhitjoy/roommate-finder-frontend",
      liveLink: "https://roommate-finder-app-6331a.web.app/",
      tags: ["React", "Node.js", "Tailwind CSS", "Firebase", "MongoDB"],
    },
    {
      id: 2,
      title: "Tour Package Booking Management",
      description:
        "A responsive tour package booking website for easy travel planning and online reservations.",
      image: project2,
      githubLink: "https://github.com/muhitjoy/travelite-client",
      liveLink: "https://travelite-drab.vercel.app/",
      tags: ["React", "Node.js", "Tailwind CSS", "Firebase", "MongoDB"],
    },
    {
      id: 3,
      title: "Lawyers Authority",
      description:
        "A professional platform connecting clients with trusted lawyers, offering legal services and consultations online.",
      image: project3,
      githubLink: "https://github.com/muhitjoy/Lawyers-Authority-A8",
      liveLink: "https://muhitjoy-ph-assignment-8.netlify.app/",
      tags: ["React", "Tailwind CSS", "React Router"],
    },
    {
      id: 4,
      title: "Auction-Gallery",
      description:
        "A web platform for browsing and bidding on art and collectibles online.",
      image: project4,
      githubLink: "https://github.com/muhitjoy/Auction-Gallery",
      liveLink: "https://muhitjoy-ph-assignment-7.netlify.app/",
      tags: ["React", "Tailwind CSS"],
    },
    {
      id: 5,
      title: "FlagShipFaceOff",
      description:
        "A modern e-commerce mobile shop built for fast and easy online purchasing.",

      image: project5,
      githubLink: "https://github.com/muhitjoy/Auction-Gallery",
      liveLink: "https://flagship-face-off-project.netlify.app/",
      tags: ["React", "Tailwind CSS", "React Router"],
    },
    {
      id: 6,
      title: "English Janala",
      description:
        "A modern platform for learning English online through interactive lessons and exercises.",
      image: project6,
      githubLink: "https://github.com/muhitjoy/English-Janala",
      liveLink: "https://muhitjoy-ph-assignment-6.netlify.app/",
      tags: ["React", "Tailwind CSS", "Javascript"],
    },
  ];

  return (
    <section
      id="projects"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="py-24 relative "
    >
      <div className="container mx-auto px-4 ">
        <div
          className="text-center sm:text-4xl font-bold mb-3"
          data-aos="fade-up"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b )",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            A showcase of my recent work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 ">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #1f2937, #111827 )"
                  : "linear-gradient(to right, #ffffff, #f9fafb )",
                borderColor: darkMode ? "#374151" : "#e5e7eb",
              }}
              className="group rounded-xl border duration-300 hover:border-orange-500/60 transition-all "
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-800">
                {/* Image Section */}
                <div className="h-36 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Title Section */}
                <div className="p-4">
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{
                      color: darkMode ? "white" : "#1f2937",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm mb-3 "
                    style={{
                      color: darkMode ? "#d1d5db" : "#6b7280",
                    }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4 ">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                          color: darkMode ? "#d1d5db" : "#4b5563",
                        }}
                        className="px-2 py-1 text-xs rounded-full "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 ">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "white" : "#374151",
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <FaGithub className="text-sm"></FaGithub>
                      <span>Code</span>
                    </a>
                    {/* Demo */}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      style={{
                        background:
                          "linear-gradient(to right, #f97316, #f59e0b)",
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <FaExternalLinkAlt className="text-sm"></FaExternalLinkAlt>
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="#"
            style={{
              background: "linear-gradient(to right, #f97316, #f59e0b)",
            }}
            className="inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGithub className="text-sm"></FaGithub>
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm"></FaExternalLinkAlt>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
