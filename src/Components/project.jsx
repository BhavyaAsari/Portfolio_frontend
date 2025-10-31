import ResumeAnalyzer from "../assets/Resume.png";
import VelvetScreen from "../assets/VelvetScreen (1).png";
import AnimeHub from "../assets/AnimeHub.png";

export default function Projects() {
  return (
    <>
      <div className=" m-10 max-w-full p-6" id="projects">
        <div className="grid justify-items-center m-10">
          <h1 className="text-6xl text-white font-bold tracking-wide mt-10 p-7">
            Projects
          </h1>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AnimeHub */}
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse transition-transform transform hover:scale-105">
            <div className="md:flex">
              <div className="p-5">
                <h2 className="text-purple-600 font-semibold text-xl">Anime Hub</h2>
                <a href="#" className="text-purple-400 block text-sm mb-2">
                  Blog + Chat Platform ~ Deployed
                </a>
                <p className="text-gray-600">
                  A platform where ideas meet admirers.
                </p>
              </div>
              <div className="p-5 flex items-center justify-center">
                <img
                  src={AnimeHub}
                  alt="Anime Hub"
                  className="w-32 h-auto rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Resume Analyzer */}
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse transition-transform transform hover:scale-105">
            <div className="md:flex">
              <div className="p-5">
                <h2 className="text-purple-600 font-semibold text-xl">
                  AI Resume Analyzer
                </h2>
                <a href="#" className="text-purple-400 block text-sm mb-2">
                  AI Career Insights
                </a>
                <p className="text-gray-600">
                  Helps job seekers and employers analyze resumes & trends.
                </p>
              </div>
              <div className="p-5 flex items-center justify-center">
                <img
                  src={ResumeAnalyzer}
                  alt="Resume Analyzer"
                  className="w-32 h-auto rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Velvet Screen */}
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse transition-transform transform hover:scale-105">
            <div className="md:flex">
              <div className="p-5">
                <h2 className="text-purple-600 font-semibold text-xl">
                  Velvet Screen
                </h2>
                <a href="#" className="text-purple-400 block text-sm mb-2">
                  OTP-based Booking
                </a>
                <p className="text-gray-600">
                  A no-login movie booking system using secure OTP.
                </p>
              </div>
              <div className="p-5 flex items-center justify-center">
                <img
                  src={VelvetScreen}
                  alt="Velvet Screen"
                  className="w-32 h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
