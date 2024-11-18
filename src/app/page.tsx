import FooterSection from "@/components/User/FooterSection";
import GridBackgroundDemo from "@/components/User/GridBG";
import HeroSection from "@/components/User/HeroSection";
import Navigation from "@/components/User/navbar";
import ProjectSection from "@/components/User/ProjectSection";
import RevealOnScroll from "@/components/User/RevealOnScroll";

const page = () => {
  return (
    <div className="w-full max-w-5xl  mx-auto  h-full p-8 ">
      {/* nav */}
      <GridBackgroundDemo />
      <div className=" items-center gap-2 flex-col lg:flex-row    justify-center backdrop-blur-lg  flex lg:justify-between  top-0   w-full max-w-5xl py-3  z-50  left-0 right-0  bg-zinc-450  fixed  mx-auto">
        <p className="font-bold text-xl">Aboubacar.dev</p>

        <Navigation />
      </div>

      {/* HEro */}
      <HeroSection />

      <ProjectSection />

      <RevealOnScroll>
        <FooterSection />
      </RevealOnScroll>
    </div>
  );
};

export default page;
