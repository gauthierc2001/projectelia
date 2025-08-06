import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="text-center">
        {/* Welcome Text */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
          Welcome to Elia's World
        </h1>
        
        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4 mb-8">
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-100"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-200"></div>
        </div>
        
        {/* Follow Elia on X Button */}
        <a
          href="https://x.com/project_elia"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white hover:bg-black/30 hover:border-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="font-semibold">Follow Elia on X</span>
        </a>
      </div>
    </div>
  );
}
