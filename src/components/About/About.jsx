import React from "react";
import about from "../../assets/developer.png";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 p-8`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
        >
          <div className="relative w-75 h-75 lg:w-96 lg:h-96 ">
            {/* image */}
            <div
              className="absolute inset-0 flex items-center justify-center z-0"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <img
                src={about}
                alt="About Image"
                className="
                   w-10/12 
                   sm:w-9/12 
                   md:w-8/12 
                   lg:w-9/12 
                   xl:w-12/12
                   h-auto
                   object-contain
                   z-10
                   transition-all
                   duration-300
                  "
                data-aos="zoom-in"
                data-aos-delay="400"
              />
            </div>
          </div>
        </figure>
        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left relative order-1 lg-order-2"
        >
          <header>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text "
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h1>
          </header>
          <p
            className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed bg-linear-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <span className="block font-semibold text-orange-400 mb-2">
              Frontend Development
            </span>
            I specialize in creating modern, responsive, and user-friendly
            interfaces using React, Tailwind CSS, and modern UI libraries. I
            focus on clean design, smooth user experience, and performance
            optimization to deliver visually appealing web applications.
            <span className="block font-semibold text-orange-400 mt-4 mb-2">
              Backend Development
            </span>
            I build secure and scalable backend systems using Node.js,
            Express.js, and MongoDB. My expertise includes RESTful API
            development, authentication, database management, and server-side
            logic to ensure reliable and efficient application performance.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 ">
            {/* education */}
            <div className="text" data-aos="zoom-in" data-aos-delay="600">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 ">
                5+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Education
              </div>
            </div>
            {/* years experiance */}
            <div className="text" data-aos="zoom-in" data-aos-delay="600">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 ">
                2+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Years Experiance
              </div>
            </div>
            {/* project completed */}
            <div className="text" data-aos="zoom-in" data-aos-delay="600">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 ">
                12+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Projects Completed
              </div>
            </div>
          </div>
          {/* button */}
          <button
            id="skills"
            className={`w-full sm:w-auto border-2 border-orange-500 inline-flex items-center justify-center py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform ${
              darkMode
                ? "text-white bg-orange-500/10"
                : "text-gray-800 bg-white/90"
            }`}
            data-aos="fade-up"
            data-aos-delay="900"
          >
            {" "}
            Learn More
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
