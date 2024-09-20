import { EnvelopeClosedIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import React from "react";
import { LinkSocial } from "./LinkSocial";

const HeroSection = () => {
  return (
    <div className="flex flex-col py-10 mt-20  z-10 ">
      <div className="flex flex-col gap-4">
        <p className="sm:text-4xl text-xl text-orange-400 ">Hey there!, I'm</p>
        <p className="sm:text-6xl text-xl font-bold">Aboubacar Sidiki Sidibé</p>
        <p className="sm:text-xl">
          <span> Software developer </span>
          <span className=" opacity-50">
            A self-taught developer with a passion for technology, always eager
            to learn new skills and expand knowledge in the field of digital
            innovations.
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-1 mt-4">
        <p className="text-sm sm:text-lg">🤖 Currently specializing in Frontend ( React / Next.js)</p>
        <p className="text-sm sm:text-lg">
          📱 specializing in App Mobile creation with ( React Native / Flutter /
          Swift UI)
        </p>
        <p className="text-sm sm:text-lg">💾 Database & services ( PostgreSQL / Firabase / Amazon AWS )</p>
      </div>

      <div className="flex gap-4 items-center justify-start sm:justify-start py-10">
      
      <LinkSocial link="https://www.linkedin.com/in/aboubacar-sidiki-sidibe-7504a0165/"  logo={<LinkedInLogoIcon />}  name={"Linkedin"} />
      <LinkSocial link="https://x.com/Kris__Beat"  logo={<TwitterLogoIcon />}  name={"Twitter"} />
      <LinkSocial link="mailto:assowlove@gmail.com"  logo={<EnvelopeClosedIcon />}  name={"Email"} />
      </div>

      <div className="grid mt-6 col-span-2 md:grid-cols-2 gap-10 md:gap-4 ">
       <div className="">
       <p className="font-bold text-2xl">About Me</p>
       <div className="flex flex-col text-base">
       <p className="py-2">Co-founder & Chief Technology Officer (CTO) at <span className="text-orange-400">Payme</span> | Founder at <span className="text-orange-400">Mee Enterprise Group</span></p>
       <p className="opacity-50">
       Passionate about creating innovative applications and convinced of the growing importance of the digital world, I am a versatile mobile and web developer. With solid expertise in developing Android and iOS applications, as well as modern websites, I strive to turn ideas into functional and intuitive products while ensuring an optimal user experience.
       </p>
       <p className="pt-2 opacity-50">When I’m not coding, I enjoy playing PS5 games with my friends, doing sports, and staying up-to-date with tech trends.</p>
       </div>
       </div>
       <div className="w-full h-full p-[80px] sm:p-[100px] pt-2  sm:pt-0 ">

       <Image alt="" className="rounded-full" width={1000} height={1000} src={"https://media.licdn.com/dms/image/v2/D4D03AQGzrGBXON_KUQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718193574804?e=1731542400&v=beta&t=U26uM-32lkJaam9bZMCuWCyhWtUWv3ZjW8wvtqiFrAQ"} />
       </div>
      </div>
    </div>
  );


};

export default HeroSection;
