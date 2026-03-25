import HeroSection from "./components/HeroSection";
import NextSection from "./components/NextSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[1600px]">
        <div className="md:hidden px-3 pt-24 pb-24">
          <div className="mx-auto w-full max-w-[430px] space-y-3">
            <HeroSection />
            <NextSection />
            <ThirdSection />
            <FourthSection />
          </div>
        </div>

        <div className="hidden md:block pt-24">
          <HeroSection />
          <NextSection />
          <ThirdSection />
          <FourthSection />
        </div>
      </div>
    </main>
  );
}