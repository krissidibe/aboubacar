import Image from "next/image";
import { HeroScrollDemo } from "../heroscroll";
import RevealOnScroll from "./RevealOnScroll";

const HeroSection = () => {
  return (
    <div className="flex flex-col py-10 mt-20  z-10 ">
      <div className=" justify-center items-center flex flex-col">
        <Image
          alt=""
          className="rounded-full mb-2"
          width={120}
          height={120}
          src={
            "https://z-p3-scontent.fbko4-1.fna.fbcdn.net/v/t39.30808-6/466837509_8471101732945099_590911962201257623_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH94RC_V8dz3sU_qBDHoEEAAbvlQW7pFVkBu-VBbukVWbIP4T88fa_P09_p9YIdfztmurJC28qHJh5tZslOFBOm&_nc_ohc=-BuykfwK9DkQ7kNvgHEXknG&_nc_zt=23&_nc_ht=z-p3-scontent.fbko4-1.fna&_nc_gid=A6hzSInhIusQYe_VvyuD62F&oh=00_AYAaIO2aPXIHS__smlTMmcGccA7a3xRe4U9VCNAhRN7Qew&oe=673DAFA8"
          }
        />

        <RevealOnScroll>
          <p className="sm:text-xl text-xl text-orange-400 gap-2 flex ">
            Hey there!, I'm
            <span className="text-white font-bold">Aboubacar</span>
          </p>
        </RevealOnScroll>
      </div>

      <RevealOnScroll>
        <div className="flex flex-col gap-4 mt-2">
          <p className="w-full max-w-xl m-auto">
            <span> Software Developer </span>
            <span className=" opacity-50">
              A self-taught developer with a passion for technology, always
              eager to learn new skills and expand knowledge in the field of
              digital innovations.
            </span>
          </p>

          {/* <div className="flex gap-4 items-center justify-start sm:justify-start py-4 self-center">
          <LinkSocial
            link="https://www.linkedin.com/in/aboubacar-sidiki-sidibe-7504a0165/"
            logo={<LinkedInLogoIcon />}
            name={"Linkedin"}
          />
          <LinkSocial
            link="https://x.com/Kris__Beat"
            logo={<TwitterLogoIcon />}
            name={"Twitter"}
          />
          <LinkSocial
            link="mailto:contact@aboubacar.dev"
            logo={<EnvelopeClosedIcon />}
            name={"Email"}
          />
        </div> */}
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <HeroScrollDemo />
      </RevealOnScroll>

      {/*     <div className="flex flex-col gap-1 mt-4">
        <p className="text-sm sm:text-lg">
          🤖 Currently specializing in Frontend ( React / Next.js)
        </p>
        <p className="text-sm sm:text-lg">
          📱 specializing in App Mobile creation with ( React Native / Flutter /
          Swift UI)
        </p>
        <p className="text-sm sm:text-lg">
          💾 Database & services ( PostgreSQL / Firabase / Amazon AWS )
        </p>
      </div>
 */}

      <RevealOnScroll>
        <div className=" flex flex-col items-center justify-center my-10 relative  ">
          <div className="absolute w-full h-[1px] bg-white/10 top-4 "></div>
          <p className="font-bold text-2xl self-center z-40 bg-[#0a0a0a] px-4">
            About Me
          </p>
          <div className="flex flex-col text-base items-center">
            <p className="py-0 mt-4">
              Co-founder & Chief Technology Officer (CTO) at{" "}
              <span className="text-orange-400">Payme Finance</span> | Founder
              at <span className="text-orange-400">Mee Enterprise Group</span>
            </p>
            <p className="opacity-50 text-center">
              Passionate about creating innovative applications and convinced of
              the growing importance of the digital world, I am a versatile
              mobile and web developer. With solid expertise in developing
              Android and iOS applications, as well as modern websites, I strive
              to turn ideas into functional and intuitive products while
              ensuring an optimal user experience.
            </p>
            <p className="pt-2 opacity-50 text-center">
              When I’m not coding, I enjoy playing PS5 games with my friends,
              doing sports, and staying up-to-date with tech trends.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};

export default HeroSection;
