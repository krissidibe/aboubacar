import {
  ArrowRightIcon,
 
} from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { IconApple, IconBrandAppstore, IconBrandGooglePlay } from "@tabler/icons-react";
import RevealOnScroll from "./RevealOnScroll";

const ProjectSection = () => {
  return (
    <div id="projects" className="flex flex-col  mt-0  pb-20">
      <p className="font-bold text-2xl mb-4">Project</p>
      <div className="flex flex-col md:gap-[120px] gap-[60px]">
        <RevealOnScroll>

        {PaymeFinance()}
        </RevealOnScroll>


        <RevealOnScroll>

        {PaymeFinanceMobile()}

</RevealOnScroll>

<RevealOnScroll>

        {Smartio()}

</RevealOnScroll>

<RevealOnScroll>


        {Afrilangue()}
</RevealOnScroll>


        <div>
          <p className="font-bold text-2xl mb-2">Other Project</p>

          <div className="flex flex-col gap-6">
            <div>
              <p className="">BENKAN MOBILE</p>
              <p className=" opacity-50 text-sm">
                Mobile application for a political party aimed at publishing
                content on the app and facilitating the recruitment of new
                members. with
                <span className="text-orange-400  ml-1 ">Flutter</span>
              </p>
            </div>
            <div>
              <p className="">Concours Justice Mali</p>
              <p className=" opacity-50 text-sm">
                Website for managing prison guard competitions in Mali, it
                facilitated the handling of applications and other related
                tasks. with
                <span className="text-orange-400 ml-1  ">Nextjs</span>
              </p>
            </div>

            <div>
              <p className="">Unity Game Creation</p>
              <p className=" opacity-50 text-sm">
              I also handle video game creation quite well; here are a few examples:

              </p>
              <div className="grid  md:grid-cols-2  gap-2 mt-2 ">
              <div className=" group  aspect-video  bg-muted cursor-pointer relative">
          <div className="bg-black/20 hidden items-end justify-center py-4 transition-all ease-in-out duration-500  inset-0 z-50  group-hover:flex absolute">
          
          <Link href={"https://www.linkedin.com/posts/aboubacar-sidiki-sidibe-7504a0165_unity-madebyunity-game-activity-7052205878686425088-ywJJ?utm_source=share&utm_medium=member_desktop"} target="_blank">
              <Button className="group">
              Watch the video. <ArrowRightIcon />{" "}
              </Button>
            </Link>
          </div>
          <Image
            className=" w-full h-full"
            alt="react"
            src="/images/game1.png"
            width={800}
            height={800}
          />
        </div>







        <div className=" group  aspect-video  bg-muted cursor-pointer relative">
          <div className="bg-black/20 hidden items-end justify-center py-4 transition-all ease-in-out duration-500  inset-0 z-50  group-hover:flex absolute">
          
          <Link href={"https://www.linkedin.com/posts/aboubacar-sidiki-sidibe-7504a0165_game-africaabrgame-unity-activity-7014204809884917760-iR_y?utm_source=share&utm_medium=member_desktop"} target="_blank">
              <Button className="group">
              Watch the video. <ArrowRightIcon />{" "}
              </Button>
            </Link>
          </div>
          <Image
            className=" w-full h-full"
            alt="react"
            src="/images/game2.png"
            width={800}
            height={800}
          />
        </div>

        
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function PaymeFinance() {
    return (
      <div className="grid sm:grid-cols-2 gap-4">
        <Link href={"https://paymefinance.com"} target="_blank" className=" group  aspect-video  bg-muted cursor-pointer relative">
          <div className="bg-black/20 hidden items-end justify-center py-4 transition-all ease-in-out duration-500  inset-0 z-50  group-hover:flex absolute">
            
              <Button className="group">
                Try Payme Finance <ArrowRightIcon />{" "}
              </Button>

          </div>
          <Image
            className=" w-full h-full"
            alt="react"
            src="/images/paymefinance.png"
            width={800}
            height={800}
          />
        </Link>
        <div className="flex flex-col ">
          <p className="font-bold md:text-2xl text-md">
            My first Saas is{" "}
            <span className="text-[#9a9768]">Payme Finance</span>{" "}
          </p>
          <div className="text-sm opacity-50">
            <p className="text-lg mb-2">
              Application for financial management and real-time tracking.
            </p>
            <p>Key features of the app:</p>
            <p>• Invoice generation using AI (Artificial Intelligence)</p>
            <p>• Invoice conversion (e.g., Dollar invoice to Euro)</p>
            <p>• Planning management and much more</p>
            <p className="text-lg my-2">Framework for a project</p>
            <div className="flex gap-1">
              <Image
                className="rounded-full  border-muted/20 border "
                alt="react"
                src={
                  "https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg"
                }
                width={40}
                height={40}
              />
              <Image
                className="rounded-full p-1 border-muted/20 border "
                alt="react"
                src={
                  "https://brandslogos.com/wp-content/uploads/images/large/react-logo-1.png"
                }
                width={40}
                height={40}
              />
              <Image
                className="rounded-full p-1 border-muted/20 border "
                alt="react"
                src={"https://dyma.fr/assets/technos/tailwind.jpg"}
                width={40}
                height={40}
              />
              <Image
                className="rounded-full p-2 border-muted/20 border "
                alt="react"
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png"}
                width={40}
                height={40}
              />
              <Image
                className="rounded-full  p-1 bg-white border-muted/20 border "
                alt="react"
                src={
                  "https://cdn.iconscout.com/icon/free/png-256/free-stripe-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-6-pack-logos-icons-3030362.png?f=webp&w=256"
                }
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Smartio() {
    return (
      <div className="grid sm:grid-cols-2 gap-4">
        <div className=" group  aspect-video  bg-muted cursor-pointer relative">
          <div className="bg-black/20 hidden items-end justify-center py-4 transition-all ease-in-out duration-500  inset-0 z-50  group-hover:flex absolute"></div>
          <Image
            className=" w-full h-full"
            alt="react"
            src="/images/dochome.jpeg"
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col ">
          <p className="font-bold md:text-2xl text-sm">
            My first Project in Morocco{" "}
            <span className="text-blue-400">Dochome.ma</span>{" "}
          </p>
          <div className="text-sm opacity-50">
            <p className="text-lg mb-2">
              {" "}
              A web application for tracking COVID-19,
            </p>

            <p>
              Offering on-site medical services to address the issues of
              patients who are unable to contact medical service providers
              directly.
            </p>
            <p>
              🙁 Unfortunately, the project is closed as COVID-19 is no longer a
              current issue.
            </p>

            <p className="text-lg my-2">Framework for a project</p>
            <div className="flex gap-1">
              <Image
                className="rounded-full  border-muted/20 border "
                alt="react"
                src={
                  "https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg"
                }
                width={40}
                height={40}
              />
              <Image
                className="rounded-full p-1 border-muted/20 border "
                alt="react"
                src={
                  "https://brandslogos.com/wp-content/uploads/images/large/react-logo-1.png"
                }
                width={40}
                height={40}
              />
              <Image
                className="rounded-full p-1 border-muted/20 border "
                alt="react"
                src={"https://dyma.fr/assets/technos/tailwind.jpg"}
                width={40}
                height={40}
              />
              <Image
                className="rounded-full p-2 border-muted/20 border "
                alt="react"
                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png"}
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  function PaymeFinanceMobile() {
    return (
      <div className="grid sm:grid-cols-2 gap-4">
        <div className=" group sm:hidden block  aspect-video  bg-muted cursor-pointer relative">
          <div className="bg-black/20 hidden items-end justify-center py-4 transition-all ease-in-out duration-500  inset-0 z-50  group-hover:flex absolute">
            <Button className="group">Version mobile SOON 😇</Button>
          </div>
          <Image
            className=" w-full h-full"
            alt="react"
            src="/images/paymefinancemobile.png"
            width={800}
            height={800}
          />
        </div>

        <div className="flex flex-col ">
          <p className="font-bold md:text-2xl text-md">
            {" "}
            <span className="text-[#9a9768]">Payme</span> Mobile
          </p>
          <div className="text-sm opacity-50">
            <p className="text-lg mb-2">
              The mobile version is built with React Native.
            </p>
            <p>Key features of the app:</p>
            <p>• Invoice generation using AI (Artificial Intelligence)</p>
            <p>• Invoice conversion (e.g., Dollar invoice to Euro)</p>
            <p>• Planning management and much more</p>
            <p className="text-lg my-2">Framework for a project</p>
            <div className="flex gap-1">
              <Image
                className="rounded-full p-1 border-muted/20 border "
                alt="react"
                src={
                  "https://brandslogos.com/wp-content/uploads/images/large/react-logo-1.png"
                }
                width={40}
                height={40}
              />
              <Image
                className="rounded-full p-1 border-muted/20 border "
                alt="react"
                src={"https://dyma.fr/assets/technos/tailwind.jpg"}
                width={40}
                height={40}
              />

              <Image
                className="rounded-full  p-1 bg-white border-muted/20 border "
                alt="react"
                src={
                  "https://cdn.iconscout.com/icon/free/png-256/free-stripe-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-6-pack-logos-icons-3030362.png?f=webp&w=256"
                }
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>

        <div className=" group sm:block hidden  aspect-video  bg-muted cursor-pointer relative">
          <div className="bg-black/20 hidden items-end justify-center py-4 transition-all ease-in-out duration-500  inset-0 z-50  group-hover:flex absolute">
            <Button className="group">Version mobile SOON 😇</Button>
          </div>
          <Image
            className=" w-full h-full"
            alt="react"
            src="/images/paymefinancemobile.png"
            width={800}
            height={800}
          />
        </div>
      </div>
    );
  }



  function Afrilangue() {
    return (
      <div className="grid sm:grid-cols-2 gap-4">
        <div className=" group sm:hidden block  aspect-video  bg-muted cursor-pointer relative">
          <div className="bg-black/20 hidden items-end gap-4 justify-center py-4 transition-all ease-in-out duration-500  inset-0 z-50  group-hover:flex absolute">
          <Link href={"https://apps.apple.com/fr/app/afrilangues-officiel/id1511912820"}>
            <Button className="group"> <IconBrandAppstore size={20} className="mr-2" /> Appstore</Button>
            
          </Link>
          <Link href={"https://play.google.com/store/apps/details?id=com.afrilangues.app&hl=fr"}>
            <Button className="group"><IconBrandGooglePlay size={20} className="mr-2" /> Playstore</Button>
          </Link>
          </div>
          <Image
            className=" w-full h-full"
            alt="react"
            src="/images/afrilangues.png"
            width={800}
            height={800}
          />
        </div>

        <div className="flex flex-col ">
          <p className="font-bold md:text-2xl text-md">
            {" "}
            <span className="text-orange-400">Afrilangues</span> Mobile version
          </p>
          <div className="text-sm opacity-50">
            <p className="text-lg mb-2">
              The mobile version is built with React Native.
            </p>
            <p>Key features of the app:</p>
            <p>• A language learning app for African languages </p>
            <p>• with more than 13 languages </p>
            <p>• (e.g., Bambara, Wolof, etc.)</p>
            <p className="text-lg my-2">Framework for a project</p>
            <div className="flex gap-1">
              <Image
                className="rounded-full p-1 border-muted/20 border "
                alt="react"
                src={
                  "https://brandslogos.com/wp-content/uploads/images/large/react-logo-1.png"
                }
                width={40}
                height={40}
              />
              <Image
                className="rounded-full p-1 border-muted/20 border "
                alt="react"
                src={"https://dyma.fr/assets/technos/tailwind.jpg"}
                width={40}
                height={40}
              />

              <Image
                className="rounded-full max-h-[40px]  p-1 bg-white border-muted/20 border "
                alt="react"
                src={
                  "https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
                }
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>

        <div className=" group sm:block hidden  aspect-video  bg-muted cursor-pointer relative">
          <div className="bg-black/20 hidden items-end gap-4 justify-center py-4 transition-all ease-in-out duration-500  inset-0 z-50  group-hover:flex absolute">
          <Link href={"https://apps.apple.com/fr/app/afrilangues-officiel/id1511912820"}>
            <Button className="group"> <IconBrandAppstore size={20} className="mr-2" /> Appstore</Button>
            
          </Link>
          <Link href={"https://play.google.com/store/apps/details?id=com.afrilangues.app&hl=fr"}>
            <Button className="group"><IconBrandGooglePlay size={20} className="mr-2" /> Playstore</Button>
          </Link>
          </div>
          <Image
            className=" w-full h-full"
            alt="react"
            src="/images/afrilangues.png"
            width={800}
            height={800}
          />
        </div>
      </div>
    );
  }
};

export default ProjectSection;
