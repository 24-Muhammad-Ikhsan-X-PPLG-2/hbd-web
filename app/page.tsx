import { useState, useEffect } from "react";
import { PartyPopperExplosion } from "@/components/PartyPopperExplosion";
import { HeroSection } from "@/components/HeroSection"
import { BirthdayMessage } from "@/components/BirthdayMessage";
import { BirthdayCake } from "@/components/BirthdayCake";
import { FinalSurprise } from "@/components/FinalSurprise";
import { FinalExplosion } from "@/components/FinalExplosion";

export default function App() {
  const [showInitialExplosion, setShowInitialExplosion] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showFinalExplosion, setShowFinalExplosion] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    // Prevent scrolling during initial explosion
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShowInitialExplosion(false);
      setShowContent(true);
      document.body.style.overflow = "auto";
      setScrollEnabled(true);
    }, 3500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleStartSurprise = () => {
    const messageSection = document.getElementById("birthday-message");
    messageSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenGift = () => {
    setShowFinalExplosion(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="min-h-screen">
      {/* Initial Party Popper Explosion */}
      {showInitialExplosion && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
          <PartyPopperExplosion />
          <div className="text-white text-2xl sm:text-4xl md:text-5xl animate-pulse">
            Get Ready... 🎉
          </div>
        </div>
      )}

      {/* Main Content */}
      {showContent && (
        <>
          <HeroSection onStartSurprise={handleStartSurprise} />

          <div id="birthday-message">
            <BirthdayMessage />
          </div>

          <BirthdayCake />

          <FinalSurprise onOpenGift={handleOpenGift} />
        </>
      )}

      {/* Final Explosion */}
      {showFinalExplosion && <FinalExplosion />}
    </div>
  );
}
