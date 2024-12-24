"use client";
import { useEffect, useRef, useState } from "react";
import { Trees, Gift, Star, Snowflake, BellRing } from "lucide-react";

const ChristmasVideoPage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showWelcome, setShowWelcome] = useState(true);

  const startExperience = async () => {
    if (audioRef.current && videoRef.current) {
      try {
        await Promise.all([videoRef.current.play(), audioRef.current.play()]);
        setShowWelcome(false);
      } catch (error) {
        console.error("Error starting media:", error);
      }
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    const audioElement = audioRef.current;

    if (videoElement) {
      const handleVideoEnded = () => {
        videoElement.play().catch(console.error);
      };
      videoElement.addEventListener("ended", handleVideoEnded);
      return () => videoElement.removeEventListener("ended", handleVideoEnded);
    }

    if (audioElement) {
      const handleAudioEnded = () => {
        audioElement.play().catch(console.error);
      };
      audioElement.addEventListener("ended", handleAudioEnded);
      return () => audioElement.removeEventListener("ended", handleAudioEnded);
    }
  }, []);

  return (
    <div className="min-h-screen bg-red-900 relative">
      {showWelcome && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="text-center text-white p-8 rounded-lg bg-green-800/50 backdrop-blur-sm">
            <h2 className="text-4xl font-bold mb-4">
              Giáng sinh vui vẻ nhé !!!🎄🎄🎄
            </h2>
            <p className="mb-6 text-lg">
              Chào mừng đến với không khí Giáng sinh🎄🎄🎄
            </p>
            <button
              onClick={startExperience}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-colors duration-300 animate-pulse"
            >
              Start Christmas 🎄🎄🎄
            </button>
          </div>
        </div>
      )}

      <audio ref={audioRef} loop preload="auto">
        <source
          src="/iLoveYt.net_YouTube_Last-Christmas-Remix-Merry-Christmas-Nha_Media_utZDbZ8n8M4_008_128k.mp3"
          type="audio/mpeg"
        />
      </audio>

      <header className="bg-green-800 p-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">
          Merry Christmas 🎄🎄🎄
        </h1>
        <p className="text-white text-lg">
          Chào mừng đến với không khí Giáng sinh🎄🎄🎄
        </p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-4">
          {/* Left Decorations */}
          <div className="col-span-2 flex flex-col items-center gap-8">
            <div className="animate-bounce">
              <Star size={48} className="text-yellow-300" />
            </div>
            <div className="relative h-48">
              <Trees
                size={48}
                className="text-green-500 absolute animate-pulse"
              />
              <Gift
                size={32}
                className="text-red-400 absolute top-32 left-4 animate-bounce"
              />
            </div>
            <BellRing size={48} className="text-yellow-400 animate-swing" />
            <Snowflake size={32} className="text-white animate-spin-slow" />
          </div>

          {/* Video container */}
          <div className="col-span-8">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                playsInline
                loop
              >
                <source src="/1.mp4" type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video tag.
              </video>
            </div>

            <div className="mt-8 text-center text-white">
              <h2 className="text-2xl font-semibold mb-4">
                Không khí Giáng sinh an lành
              </h2>
              <p className="text-lg">
                Hãy cùng tận hưởng những khoảnh khắc ấm áp của mùa Giáng sinh
                với gia đình và những người thân yêu.
              </p>
            </div>
          </div>

          {/* Right Decorations */}
          <div className="col-span-2 flex flex-col items-center gap-8">
            <div className="animate-bounce">
              <Star size={48} className="text-yellow-300" />
            </div>
            <div className="relative h-48">
              <Trees
                size={48}
                className="text-green-500 absolute animate-pulse"
              />
              <Gift
                size={32}
                className="text-red-400 absolute top-32 right-4 animate-bounce"
              />
            </div>
            <BellRing size={48} className="text-yellow-400 animate-swing" />
            <Snowflake size={32} className="text-white animate-spin-slow" />
          </div>
        </div>
      </main>

      <footer className="bg-green-800 text-white text-center p-4 mt-8">
        <p>&copy; 2024 VietDev. All rights reserved.</p>
      </footer>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes swing {
          0%,
          100% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
        }
        .animate-swing {
          animation: swing 2s infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ChristmasVideoPage;
