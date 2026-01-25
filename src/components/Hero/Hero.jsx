import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";
import linkedIn from "../../assets/linkedin.svg";
import { DownloadIcon, Mail } from "lucide-react";
import hero from "../../assets/IMG_9159.JPG";
import cv from "../../assets/CV/M-A-MUHIT-JOY-Resume.pdf";
import hi from "../../assets/Hi.svg";
import { Typewriter } from "react-simple-typewriter";

const Hero = ({ darkMode }) => {
  const socialIcons = [
    {
      icon: facebook,
      alt: "facebook",
      url: "https://www.facebook.com/mamuhit.joy.1/",
    },
    {
      icon: instagram,
      alt: "Instagram",
      url: "https://www.instagram.com/muhit_joy/",
    },
    {
      icon: github,
      alt: "github",
      url: "https://github.com/muhitjoy",
    },
    {
      icon: linkedIn,
      alt: "linkedin",
      url: "https://www.linkedin.com/in/m-a-muhit-joy/",
    },
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary:
      "text-white border-2 border-orange-500 hover:bg-orange-600",
    decorativeCircle: "bg-orange-500 opacity-10",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary:
      "text-gray-800 border-2 border-orange-500 hover:bg-orange-600 hover:text-white",
    decorativeCircle: "bg-orange-400 opacity-20",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col ">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delat="250"
        className="body-font z-10"
      >
        <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14">
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0 ">
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  data-aos-delay={`${400 + index * 100}`}
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  {/* icon image */}
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:h-10 object-contain ${
                      darkMode ? "" : "filter-brightness-75"
                    }`}
                  />
                </a>
              ))}
            </div>
            <h1
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
            >
              <Typewriter
                words={["Hi, I'm M A Muhit Joy"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </h1>
            <h3
              className={`title-font text-2xl sm:text-2xl lg:text-4xl mb-4 font-bold ${theme.textPrimary}`}
            >
              {/* typewriter animation */}
              <span className="text-orange-500">
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "Backend Developer",
                    "MERN Stack Developer",
                  ]}
                  loop={0} // infinite loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={1200}
                />
              </span>
            </h3>

            <p
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              As a MERN Stack Developer, I specialize in creating modern,
              scalable applications with MongoDB, Express.js, React.js, and
              Node.js, bringing ideas to life through seamless digital
              experiences.{" "}
            </p>
            {/* button */}
            <div className="w-full pt-4 sm:pt-6">
              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                {/* cv */}
                <a
                  href={cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform">
                    <DownloadIcon className="w-4 h-4 sm:h-5 sm:w-5 mr-2 " />
                    Download CV
                  </button>
                </a>

                <a href="#contact" className="w-full sm:w-auto">
                  <button
                    className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecondary} justify-center border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform`}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2"></Mail> Contact
                    me
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Image */}
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-full md:w-4/5 lg:w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="relative overflow-hidden rounded-full aspect-square p-1 bg-gradient-to-r from-blue-500 via-blue-400 to-orange-500">
                <div className="relative overflow-hidden rounded-full w-full h-full">
                  <img
                    src={hero}
                    alt="Hero Image"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <img
                src={hi}
                alt="Hi Icon"
                className="absolute -top-3 sm:top-4 left-4 sm:left-20 w-12 h-12 sm:w-20 sm:h-20 object-contain animate-bounce opacity-90 z-10"
              />
            </div>
          </div>
        </div>
        <div
          className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block `}
        ></div>
      </section>
    </div>
  );
};

export default Hero;
